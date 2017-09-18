import {Div} from 'glamorous'

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

export default Icon
