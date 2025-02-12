import "./services.css"
import {BiCheck} from "react-icons/bi"

const Services = () => {
 
 
  
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2 >Services</h2>
      <div className="container services_container">
        <article 
       
        className="service">
          <div className="service_head">
            <h3>UI/UX</h3>
          </div>
          <ul className="service_list">
            <li><BiCheck className="service_list-icon"/> 
              <p>Interaction Design. </p>
            </li>
            <li><BiCheck className="service_list-icon"/> 
              <p>Visual Design. </p>
            </li>
            <li><BiCheck className="service_list-icon"/> 
              <p>Information Architecture</p>
            </li>
           
          </ul>
        </article>
        <article
        
         className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li><BiCheck className="service_list-icon"/> 
              <p>Front-End Web development </p>
            </li>
           
          </ul>
        </article>
       
      </div>
    </section>
  )
}

export default Services