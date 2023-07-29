import React from 'react'
import  { Col,Row } from "react-bootstrap"
 function ButtonGroub({fillterItems,catgorys}) {
  return (
    <Row>
    <Col sm={12} className='justify-content-center text-center'>
    <div className='justify-content-center d-flex mt-1 mb-5'>
      {
        catgorys.length ? (catgorys.map((c)=>{
          return (
            
            <button onClick={()=>fillterItems(c)} className='btn-sans  mx-3'>{c}</button>
            )})): <h3>لا يوجد اصناف</h3>
      }
      </div>
    </Col>
    </Row>
  )
}
export default ButtonGroub