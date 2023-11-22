import pic1 from "../assets/images/Group 10.png";
import {Link } from "react-router-dom";

function Profiles() {
  return (
    <>
      <div>
        <div className="row p-4 ">
          <div className="col col-lg-6 col-md-6 col-sm-12">
            <h1>The Fast Pinpoint</h1>
            <h1 style={{ color: "red" }}> GetStarted </h1>
            <h1>Tracking & Reservation</h1>
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12">
          <Link to={"/Contact"}> 
            <img src={pic1} alt="m"></img>
            </Link>
          </div>
          <div className="p-4" >
          <p>
            Pinpoint is the fastest tracking and reservation software <br></br> solution
            for personal and enterprise vehicles for institutes,<br></br> offices and
            companies with live tracking, history recording,<br></br> estimated arrival
            time and usage report generation and much more features
          </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profiles;
