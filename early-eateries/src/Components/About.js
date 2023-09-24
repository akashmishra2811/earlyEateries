import { Form, Label, Input, FormGroup, Button, Badge } from "reactstrap";
import { CiPhone } from "react-icons/ci";
import { BiEnvelope, BiDish, BiDrink, BiHeart } from "react-icons/bi";
import {background} from "./../Store/Photos/about.jpg"
export default function About(props) {
  return (
    <div style={{ marginTop: "4%" }}>
      <div
        class="d-flex fa-align-center"
        style={{
          width: "80%",
          margin: "auto",
          marginTop: "2%",
          marginBottom: "10%",
          boxShadow: "  13px 13px 10px 10px	#F5F5F5",
          backgroundColor: "white",
          height: "600px",
        }}
      >
        <div
          class="leftpane"
          style={{ width: "40%", backgroundColor: "#ff4d4d", height: "600px" }}
        >
          <div style={{ marginTop: "15%" }}>
            {" "}
            <h3 style={{ color: "white" }}>About Us</h3>
          </div>
          <div style={{ margin: "6%" }}>
            {" "}
            <p style={{ color: "white" }}>
              Fill the form ,to get connect with earlyEateries
            </p>
            <div
              style={{ display: "flex", marginTop: "30%", marginLeft: "20%" }}
            >
              <CiPhone
                color="white"
                style={{
                  marginTop: "2px",
                  marginRight: "8px",
                  fontSize: "23px",
                }}
              />
              <p style={{ color: "white" }}>9130537127</p>
            </div>
            <div
              style={{ display: "flex", marginTop: "10%", marginLeft: "20%" }}
            >
              <BiEnvelope
                color="white"
                style={{
                  marginTop: "2px",
                  marginRight: "8px",
                  fontSize: "23px",
                }}
              />
              <p style={{ color: "white" }}>earlyEateries@gmail.com</p>
            </div>
            <div
              style={{ display: "flex", marginTop: "30%", marginLeft: "25%" }}
            >
              <BiDish
                color="#e9d2f1"
                style={{
                  marginTop: "2px",
                  marginRight: "8px",
                  fontSize: "40px",
                }}
              />
              <BiDrink
                color="#e9d2f1"
                style={{
                  marginTop: "2px",
                  marginRight: "8px",
                  fontSize: "40px",
                }}
              />
              <BiHeart
                color="#e9d2f1"
                style={{
                  marginTop: "2px",
                  marginRight: "8px",
                  fontSize: "40px",
                }}
              />
            </div>
          </div>
        </div>
        <div
          class="rightpane"
          style={{ width: "60%", backgroundColor: "	white ", height: "600px" }}
        ></div>
      </div>
    </div>
  );
}
