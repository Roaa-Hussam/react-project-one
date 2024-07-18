import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPhone,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
function Contact() {
  return (
    <div>
      <h3 className="Title">Contact</h3>
      <div className="content-section ">
        <p>
          <FontAwesomeIcon icon={faHome} className="contact-icon" /> 777 Seventh
          Avenue, New York
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />
          012-3456-7891
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          yourcompany@mail.com
        </p>
        <p>
          <FontAwesomeIcon icon={faGlobe} className="contact-icon" />
          www.yourcompany.com
        </p>
      </div>
    </div>
  );
}
export default Contact;
