import glamorous from 'glamorous'

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

export default Input
