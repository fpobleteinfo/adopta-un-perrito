import React from 'react'
import {Badge} from 'react-bootstrap'

const Tags = ({colorTag, tag}) => {
  return (
    <>
    <Badge bg={colorTag}>{tag}</Badge>
    </>
  )
}

export default Tags