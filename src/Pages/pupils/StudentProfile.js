import { useParams } from "react-router-dom";
import mailIconGray from "../../assets/images/mailicon.png";
import phoneIconGray from "../../assets/images/phoneicongray.png";
import { FaPhoneAlt } from "react-icons/fa";

function StudentProfile() {
  const studentId = useParams();

  return (
    <div className="general-info-container">
      <section className="general-info">
        <p>
          Full name: <span>Dara Ejibo</span>
        </p>
        <p>
          Mother's name: <span>Ejibo Rachel</span>
        </p>
        <p>
          Father's name: <span>Ejibo Daniel</span>
        </p>
        <p>
          Registration Date: <span>17 Jan 2023</span>
        </p>
        <p>
          Nationality: <span>Nigerian</span>
        </p>
        <p>
          State Of Origin: <span>Nigerian</span>
        </p>
        <p>
          Date Of Birth: <span>15/05/2015</span>
        </p>
      </section>
      <section className="general-contact-info" style={{paddingRight: '10px'}}>
        <div style={{ display: 'none' }}>
          <h4>Center Contact</h4>
          <p>
            <img src={phoneIconGray} alt="" />
            12345 69870
          </p>
          <p>
            <img src={mailIconGray} alt="" />
            hanumannagar.center@tipsg.in
          </p>
        </div>
        <div style={{ border: "none", marginBottom: "auto" }}>
          <h4>Parent Contact</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
              <FaPhoneAlt />
              <p>12345 69870</p>
            </div>
            <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
              <FaPhoneAlt />
              <p>12345 69870</p>
            </div>
          </div>
        </div>
        <div>
          <h4>Mother's Details</h4>
          <p>Name: Ejibo Rachel</p>
          <p>Nationality : Nigerian</p>
          <p>State Of Origin : Lagos</p>
          <p>Place Of Birth : Iyana Ipaja</p>
          <p>House Address : Plot no. 116, Lane number 4, Ikeja Lagos </p>
        </div>
        <div>
          <h4>Father’s Details</h4>
          <p>Name: Ejibo Daniel</p>
          <p>Nationality : Nigerian</p>
          <p>State Of Origin : Lagos</p>
          <p>Place Of Birth : Iyana Ipaja</p>
          <p>House Address : Plot no. 116, Lane number 4, Ikeja Lagos </p>
        </div>
      </section>
    </div>
  );
}

export default StudentProfile;
