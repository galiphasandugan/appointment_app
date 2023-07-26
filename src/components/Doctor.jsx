import { Container} from "react-bootstrap"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {doctorData} from "../helper/data"
import AddModal from "./AddModal"
import { useState } from "react"


const Doctor = ({apps , setApps}) => {
    const [show, setShow] = useState(false);
    const [drname ,setDrName] = useState("")

  return (
    <div>
      <Container className="p-2">
        <h3 className="display-6 mb-3"style={{color: "rgb(188, 18, 189"}}>Our Doctors</h3>
        <Row className="justify-content-center">

        {doctorData.map(({id,name,dep,img})=>(
        <Col xs={6} sm={4} md={3} key={id}>
            <img 
            onClick={() =>{
              setDrName(name)
              setShow(true)
             
            }} 
            src={img} alt="" className="img-thumbnail doctor-img" />
            <h5>{name}</h5>
            <h6>{dep}</h6>
        </Col>
        ))}

        </Row>
        <AddModal drname={drname} apps={apps} setApps={setApps} show={show} handleClose={()=> setShow(false)}  />
      </Container>
      
    </div>
  )
}

export default Doctor
