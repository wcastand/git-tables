import React from 'react'
import table from 'markdown-table'
import ReactMD from 'react-remarkable'
import CopyToClipboard from 'react-copy-to-clipboard'

const Row = props => <div style={{flex: 1, display: 'flex'}} {...props} />
const Column = props => (
  <div style={{flex: 1, display: 'flex', flexDirection: 'column'}} {...props} />
)

function parse(state) {
  let str = ''
  const t = table([
    state.titles.split(',').map(s => s.trim()),
    ...state.rows.map(r => r.split(',').map(s => s.trim())),
  ])
  return t
}

class Index extends React.Component {
  state = {
    titles: 'Title, Description',
    rows: ['title 1, description 1'],
  }
  _changeTitles = titles => this.setState(old => ({titles}))
  _changeData = (idx, val) =>
    this.setState(old => ({rows: old.rows.map((r, i) => (i === idx ? val : r))}))
  _addRow = () => this.setState(old => ({rows: [...old.rows, '']}), () => this._input.focus())
  _removeRow = idx => this.setState(old => ({rows: old.rows.filter((v, i) => i !== idx)}))
  _testKey = (idx, e) =>
    e.keyCode === 13
      ? this._addRow()
      : e.keyCode === 8 && e.target.value === '' ? this._removeRow(idx) : null

  render() {
    return (
      <Column>
        <input value={this.state.titles} onChange={e => this._changeTitles(e.target.value)} />
        {this.state.rows.map((data, idx) => (
          <input
            key={idx}
            value={data}
            onChange={e => this._changeData(idx, e.target.value)}
            onKeyUp={e => this._testKey(idx, e)}
            ref={r => (this._input = r)}
          />
        ))}
        <button onClick={this._addRow}>Add a row</button>
        <CopyToClipboard text={parse(this.state)}>
          <button>Copy to clipboard</button>
        </CopyToClipboard>
        <div className="markdown-body">
          <ReactMD source={parse(this.state)} />
        </div>
      </Column>
    )
  }
}

export default Index
