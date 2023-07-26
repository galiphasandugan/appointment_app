import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TiDelete } from "react-icons/ti";

const AppointmentList = ({ apps,setApps }) => {
  console.log(apps);

  const handleDelete = () =>{
    setApps()
  }
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>

      {apps.map(({ id, patient, consulted, doctor, day }) => (
        <div
          key={id}
          className={consulted ? "appointments consulted" : "appointments"}
        >
          <Row className="justify-content-between align-item-center">
            <Col xs={12} sm={12} md={6} >
              <h4>{patient}</h4>
              <h5>{doctor}</h5>
            </Col>
            <Col>
              <h5>{day}</h5>
            </Col>
            <Col className="text-end">
              <TiDelete 
              className="text-danger fs-1"
              type="button"
              onClick={()=> handleDelete}
              
              />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default AppointmentList;
