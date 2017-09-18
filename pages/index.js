import React from 'react'
import table from 'markdown-table'
import ReactMD from 'react-remarkable'
import CopyToClipboard from 'react-copy-to-clipboard'
import glamorous, {Div} from 'glamorous'

import Code from '../components/code'
import Icon from '../components/icon'
import Hint from '../components/hint'
import Align from '../components/align'
import Title from '../components/title'
import Input from '../components/input'
import Button from '../components/button'
import Column from '../components/column'
import Delete from '../components/delete'
import Preview from '../components/preview'
import Container from '../components/container'

function parse(state) {
  const rrows = state.rows.map(r => r.split(',').map(s => (s ? s.trim() : '')))

  const t = table([state.columns.map(s => s.trim()), ...rrows], {
    align: state.aligns,
  })
  return t
}

class Index extends React.Component {
  state = {
    columns: ['Title', 'Description'],
    rows: ['title 1, desc 1', 'title 2, desc 2'],
    aligns: ['l', 'c'],
  }
  _changeTitle = (idx, title) =>
    this.setState(old => ({columns: old.columns.map((r, i) => (i === idx ? title : r))}))
  _changeData = (idx, val) =>
    this.setState(old => ({rows: old.rows.map((r, i) => (i === idx ? val : r))}))

  _addTitle = () =>
    this.setState(
      old => ({columns: [...old.columns, ''], aligns: [...old.aligns, '']}),
      () => this._inputTitle.focus()
    )
  _removeTitle = idx =>
    this.setState(
      old => ({
        columns: old.columns.filter((v, i) => i !== idx),
        aligns: old.aligns.filter((v, i) => i !== idx),
      }),
      () => (console.log(this.state), this._inputTitle.focus())
    )

  _addRow = () => this.setState(old => ({rows: [...old.rows, '']}), () => this._input.focus())
  _removeRow = idx =>
    this.setState(old => ({rows: old.rows.filter((v, i) => i !== idx)}), () => this._input.focus())

  _testKeyTitle = (idx, e) => {
    switch (e.keyCode) {
      case 13:
        this._addTitle()
        break
      case 8:
        if (e.target.value === '') {
          this._removeTitle(idx)
          e.preventDefault()
        }
        break
      default:
        break
    }
  }

  _testKeyRow = (idx, e) => {
    switch (e.keyCode) {
      case 13:
        this._addRow()
        break
      case 8:
        if (e.target.value === '') {
          this._removeRow(idx)
          e.preventDefault()
        }
        break
      default:
        break
    }
  }
  _changeAlign = (idx, val) =>
    this.setState(old => {
      const d = [...old.aligns]
      d[idx] = val
      return {
        ...old,
        aligns: d,
      }
    })
  render() {
    return (
      <Container>
        <Column flex={1} bgColor="#333">
          <Title color="#F1F1F1">
            <glamorous.Span paddingRight={12}>Header</glamorous.Span>
            <Button onClick={this._addTitle}>+</Button>
          </Title>
          <Hint>
            <li>
              You can add a column by hitting enter in the last input of the list or by clicking on
              the "+"
            </li>
            <li>To delete a column simply delete the text and hit backspace once.</li>
          </Hint>
          {this.state.columns.map((data, idx) => (
            <Div display="flex" alignItems="center" width="100%" key={`title_${idx}`}>
              <Delete type="remove" onClick={() => this._removeTitle(idx)} />
              <Input
                value={data}
                onChange={e => this._changeTitle(idx, e.target.value)}
                onKeyDown={e => this._testKeyTitle(idx, e)}
                innerRef={r => (this._inputTitle = r)}
              />
              <Align state={this.state.aligns} idx={idx} action={this._changeAlign} />
            </Div>
          ))}
          <Title color="#F1F1F1">
            <glamorous.Span paddingRight={12}>Rows</glamorous.Span>
            <Button onClick={this._addRow}>+</Button>
          </Title>
          <Hint>
            <li>
              You can add a row by hitting enter in the last input of the list or by clicking on the
              "+"
            </li>
            <li>
              To delete a row simply delete the text and hit backspace once. or click on the "-"
            </li>
          </Hint>
          {this.state.rows.map((data, idx) => (
            <Div display="flex" alignItems="center" width="100%" key={`data_${idx}`}>
              <Delete type="remove" onClick={() => this._removeRow(idx)} />
              <Input
                value={data}
                onChange={e => this._changeData(idx, e.target.value)}
                onKeyDown={e => this._testKeyRow(idx, e)}
                innerRef={r => (this._input = r)}
              />
            </Div>
          ))}
        </Column>
        <Column flex={2}>
          <Preview>
            <Title children="Preview" />
            <CopyToClipboard text={parse(this.state)}>
              <Button>Copy the markdown</Button>
            </CopyToClipboard>
            <div className="markdown-body">
              <ReactMD source={parse(this.state)} />
            </div>
            <Code>{parse(this.state)}</Code>
          </Preview>
        </Column>
      </Container>
    )
  }
}

export default Index
