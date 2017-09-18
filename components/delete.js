import React from 'react'
import glamorous from 'glamorous'

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
export default Delete
