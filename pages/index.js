import React from 'react'
import table from 'markdown-table'
import ReactMD from 'react-remarkable'
import CopyToClipboard from 'react-copy-to-clipboard'
import glamorous, {Div} from 'glamorous'

const Row = glamorous.div({flex: 1, display: 'flex'})
const Column = glamorous.div(
  {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '100vh',
    padding: 25,
  },
  props => ({
    flex: props.flex || 1,
    backgroundColor: props.bgColor || '#F1F1F1',
  })
)

const Icon = ({className, type, selected = false, ...props}) => (
  <Div
    color={selected ? '#F1F1F1' : '#333'}
    backgroundColor={selected ? '#333' : '#F1F1F1'}
    display="flex"
    border="1px solid #F1F1F1"
    padding={4}
    userSelect="none"
    cursor="pointer"
    {...props}>
    <i className="material-icons" style={{fontSize: 20}}>
      {type}
    </i>
  </Div>
)

const Input = glamorous.input({
  fontFamily: 'Roboto',
  width: '100%',
  outline: 'none',
  border: 'none',
  padding: 8,
  margin: 8,
  backgroundColor: 'transparent',
  borderBottom: '1px solid #F1F1F1',
  color: '#F1F1F1',
})

const Copy = glamorous.button({
  fontFamily: 'Roboto',
  border: 'none',
  outline: 'none',
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

const Add = glamorous.button({
  fontFamily: 'Roboto',
  border: 'none',
  outline: 'none',
  padding: 12,
  margin: '12px 0',
  backgroundColor: '#333',
  border: '1px solid #F1F1F1',
  color: '#F1F1F1',
  transition: 'all .3s ease',
  cursor: 'pointer',
  ':hover': {
    color: '#333',
    backgroundColor: '#F1F1F1',
  },
})

const Code = glamorous.pre({
  width: '100%',
  padding: 12,
  backgroundColor: '#FAFAFA',
  color: '#333',
  borderRadius: 0,
})

const Title = glamorous.h2({fontFamily: 'Roboto', padding: 0}, props => ({
  color: props.color || '#333',
}))

function parse(state) {
  let str = ''
  const l = state.rows[0].split(',').length
  const rrows = state.rows.map(r => r.split(','))
  let fr = []
  for (let i = 0; i < l; i++) {
    fr[i] = fr[i] || []
    rrows.map(r => fr[i].push(r[i]))
  }
  fr = fr.map(e => e.map(s => (s ? s.trim() : '')))
  const t = table([state.titles.split(',').map(s => s.trim()), ...fr], {
    align: state.aligns,
  })
  return t
}

class Index extends React.Component {
  state = {
    titles: 'Title, Description',
    rows: ['title 1, title 2', 'desc 1, desc 2'],
    aligns: ['l', 'c'],
  }
  _changeTitles = titles => this.setState(old => ({titles}))
  _changeData = (idx, val) =>
    this.setState(old => ({rows: old.rows.map((r, i) => (i === idx ? val : r))}))
  _addRow = () => this.setState(old => ({rows: [...old.rows, '']}), () => this._input.focus())
  _removeRow = idx =>
    this.setState(old => ({rows: old.rows.filter((v, i) => i !== idx)}), () => this._input.focus())
  _testKey = (idx, e) =>
    e.keyCode === 13
      ? this._addRow()
      : e.keyCode === 8 && e.target.value === '' ? this._removeRow(idx) : null
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
      <Row>
        <Column flex={1} bgColor="#333">
          <Title color="#F1F1F1" children="Header" />
          <Input value={this.state.titles} onChange={e => this._changeTitles(e.target.value)} />
          <Title color="#F1F1F1" children="Data" />
          {this.state.rows.map((data, idx) => (
            <Div display="flex" alignItems="center" width="100%" key={idx}>
              <Input
                value={data}
                onChange={e => this._changeData(idx, e.target.value)}
                onKeyUp={e => this._testKey(idx, e)}
                innerRef={r => (this._input = r)}
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
          <Add onClick={this._addRow}>Add a row</Add>
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
            <Code>{parse(this.state)}</Code>
            <CopyToClipboard text={parse(this.state)}>
              <Copy>Copy the markdown</Copy>
            </CopyToClipboard>
            <div className="markdown-body">
              <ReactMD source={parse(this.state)} />
            </div>
          </Div>
        </Column>
      </Row>
    )
  }
}

export default Index
