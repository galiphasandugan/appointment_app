import AppointmentList from "../components/AppointmentList"
import Doctor from "../components/Doctor"


const Home = () => {
  return (
    <main className="text-center mt-2">
      <h1 className="text-danger display-5">CLARUS HOSPITAL</h1>
      <Doctor/>
      <AppointmentList/>
    </main>
  )
}

export default Home
