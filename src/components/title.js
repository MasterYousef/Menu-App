import React from 'react'
import  { Col,Row } from "react-bootstrap"
 function Title() {
  return (
    <Row className='mt-4'>
    <Col sm={12} className='justify-content-center text-center title'>
    <h2>قائمة الطعام</h2>
    <div className='justify-content-center d-flex mt-3'>
        <p className='line'></p>
    </div>
    </Col>
    </Row>
  )
}
export default Title
