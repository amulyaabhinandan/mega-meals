import { Outlet } from "react-router-dom"
import ProfileClass from "./ProfileClass"

const About = () => {
  return (
    <>
      <h3>This is the ongoing About page for our web page...</h3>
      <h4>Get Ready to be EXPLORED 🚀</h4>
      <ProfileClass name={"Amulya which is passed from Props..."} />
      {/* <Outlet /> */}
    </>
  )
}

export default About
