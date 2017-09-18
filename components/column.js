import glamorous from 'glamorous'

const Column = glamorous.div(
  {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 0,
    margin: '12px 0',
  },
  props => ({flex: props.flex || 1})
)

export default Column
