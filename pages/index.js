import React from 'react'
import table from 'markdown-table'
import ReactMD from 'react-remarkable'
import CopyToClipboard from 'react-copy-to-clipboard'
import glamorous, {Div} from 'glamorous'

const Container = glamorous.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 1024,
  margin: '0 auto',
  fontFamily: 'Roboto',
  fontSize: 16,
})
const Column = glamorous.div(
  {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 25,
  },
  props => ({flex: props.flex || 1})
)

const Icon = ({className, type, selected = false, ...props}) => (
  <Div
    display="flex"
    justifyContent="center"
    alignItems="center"
    color={selected ? '#FF9036' : '#F1F1F1'}
    backgroundColor={selected ? '#F1F1F1' : '#333'}
    display="flex"
    border="1px solid #333"
    padding={4}
    userSelect="none"
    cursor="pointer"
    width="35px"
    height="35px"
    transition="all .3s ease"
    {...props}>
    <i className="material-icons" style={{fontSize: 20}}>
      {type}
    </i>
  </Div>
)

const ContainerD = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#333',
  backgroundColor: '#F1F1F1',
  display: 'flex',
  border: '1px solid #333',
  padding: 4,
  userSelect: 'none',
  cursor: 'pointer',
  width: '35px',
  height: '35px',
  transition: 'all .3s ease',
  ':hover': {
    backgroundColor: '#333',
    color: '#F1F1F1',
  },
})

const Delete = ({className, type, ...props}) => (
  <ContainerD {...props}>
    <i className="material-icons" style={{fontSize: 20}}>
      {type}
    </i>
  </ContainerD>
)

const Input = glamorous.input({
  fontFamily: 'Roboto',
  fontSize: 16,
  width: '100%',
  height: 35,
  outline: 'none',
  border: 'none',
  padding: 12,
  margin: 8,
  backgroundColor: 'transparent',
  border: '1px solid #333',
  color: '#333',
  transition: 'all .3s ease',
  ':focus': {},
})

const Button = glamorous.button({
  fontFamily: 'Roboto',
  border: 'none',
  outline: 'none',
  height: 35,
  minWidth: 35,
  lineHeight: '11px',
  padding: 12,
  margin: '12px 0',
  backgroundColor: '#F1F1F1',
  border: '1px solid #333',
  color: '#333',
  transition: 'all .3s ease',
  cursor: 'pointer',
  ':hover': {
    color: '#F1F1F1',
    backgroundColor: '#333',
  },
})

const Code = glamorous.pre({
  width: '100%',
  padding: 12,
  backgroundColor: '#FAFAFA',
  color: '#333',
  borderRadius: 0,
})

const Title = glamorous.h2({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Roboto',
  padding: 0,
  color: '#333',
})

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
          {this.state.columns.map((data, idx) => (
            <Div display="flex" alignItems="center" width="100%" key={`title_${idx}`}>
              <Input
                value={data}
                onChange={e => this._changeTitle(idx, e.target.value)}
                onKeyDown={e => this._testKeyTitle(idx, e)}
                innerRef={r => (this._inputTitle = r)}
              />
              <Div display="flex">
                <Icon
                  type="format_align_left"
                  selected={this.state.aligns[idx] === 'l'}
                  onClick={() => this._changeAlign(idx, 'l')}
                />
                <Icon
                  type="format_align_center"
                  selected={this.state.aligns[idx] === 'c'}
                  onClick={() => this._changeAlign(idx, 'c')}
                />
                <Icon
                  type="format_align_right"
                  selected={this.state.aligns[idx] === 'r'}
                  onClick={() => this._changeAlign(idx, 'r')}
                />
              </Div>
            </Div>
          ))}
          <Title color="#F1F1F1">
            <glamorous.Span paddingRight={12}>Rows</glamorous.Span>
            <Button onClick={this._addRow}>+</Button>
          </Title>
          {this.state.rows.map((data, idx) => (
            <Div display="flex" alignItems="center" width="100%" key={`data_${idx}`}>
              <Input
                value={data}
                onChange={e => this._changeData(idx, e.target.value)}
                onKeyDown={e => this._testKeyRow(idx, e)}
                innerRef={r => (this._input = r)}
              />
              <Delete type="remove" onClick={() => this._removeRow(idx)} />
            </Div>
          ))}
        </Column>
        <Column flex={2}>
          <Div
            flex={1}
            display="flex"
            flexDirection="column"
            width="100%"
            justifyContent="flex-start"
            alignItems="flex-start">
            <Title children="Preview" />
            <CopyToClipboard text={parse(this.state)}>
              <Button>Copy the markdown</Button>
            </CopyToClipboard>
            <div className="markdown-body">
              <ReactMD source={parse(this.state)} />
            </div>
            <Code>{parse(this.state)}</Code>
          </Div>
        </Column>
      </Container>
    )
  }
}

export default Index
