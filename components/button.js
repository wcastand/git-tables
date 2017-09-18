import glamorous from 'glamorous'

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
export default Button
