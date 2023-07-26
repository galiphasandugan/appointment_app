import { useState } from "react"
import AppointmentList from "../components/AppointmentList"
import Doctor from "../components/Doctor"
import { appointmentData } from "../helper/data"

const Home = () => {
  const [appointment,setAppointment]= useState(appointmentData)
  console.log(appointment)
  return (
    <main className="text-center mt-2">
      <h1 className="text-danger display-5">CLARUS HOSPITAL</h1>
      <Doctor  apps ={appointment} setApps ={setAppointment}/>
      <AppointmentList apps = {appointment}  />
    </main>
  )
} 

export default Home
