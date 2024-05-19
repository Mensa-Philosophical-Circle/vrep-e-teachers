import "../styles/comingSoon.css";
import comingImg from "../assets/coming-soon.png";
import DNormalButton from "../components/dashboardNormalButton";
export default function ComingSoonPage() {
  return (
    <>
      <article className="cSoonPgBody">
        <article className="content">
          <img
            src={comingImg}
            alt="A magnifying glass with eyes and a mouth frowning"
          />
          <h1>This feature will be live Soon !!</h1>
        </article>
        <div className="row">
          <DNormalButton value="Back to Dashboard" type="invert" />
          <DNormalButton value="Join the Waitlist" type="normal" />
        </div>
      </article>
    </>
  );
}
