import "../../styles/dashboardError.css";
import oopsImg from "../../assets/oops.png";
import DNormalButton from "../../components/dashboardNormalButton";
export default function DashboardErrorPage() {
  return (
    <>
      <article className="dErrPgBody">
        <article className="content">
          <img
            src={oopsImg}
            alt="A magnifying glass with eyes and a mouth frowning"
          />
          <h1>Oops!! Looks Like Something Went Wrong</h1>
          <DNormalButton value="Back to Dashboard" type="normal" />
          <p className="redText">Try Again Later</p>
        </article>
      </article>
    </>
  );
}
