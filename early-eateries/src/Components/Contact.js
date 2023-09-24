import { Form, Label, Input, FormGroup, Button,Badge } from "reactstrap";
import {CiPhone} from "react-icons/ci";
import{BiEnvelope ,BiDish , BiDrink ,BiHeart}from "react-icons/bi";
export default function Contact(props) {
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
           height :"600px"
        }}
      >
        <div
          class="leftpane"
          style={{ width: "30%", backgroundColor: "#170140",  height :"600px"}}
        >
          <div style={{ marginTop: "15%" }}>
            {" "}
            <h3 style={{ color: "white" }}>Contact Information</h3>
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
          style={{ width: "70%", backgroundColor: "	white " , height :"600px" }}
        >
          <div style={{ margin: "6%", marginTop: "5%" }}>
            <Form>
              <FormGroup>
                <Label
                  color=" #e9d2f1"
                  style={{ marginRight: "95%" }}
                  for="exampleName"
                >
                  Name
                </Label>
                <Input
                  id="exampleName"
                  name="name"
                  placeholder="Akash Mishra"
                  type="text"
                  color="#e9d2f1"
                />
              </FormGroup>{" "}
              <FormGroup>
                <Label style={{ marginRight: "95%" }} for="exampleEmail">
                  Email
                </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label style={{ marginRight: "95%" }} for="examplePhone">
                  Phone
                </Label>
                <Input
                  id="examplePhone"
                  name="phone"
                  placeholder="883835652"
                  type="Number"
                />
              </FormGroup>{" "}
              <FormGroup>
                <Label style={{ marginRight: "95%" }} for="examplePhone">
                  Message
                </Label>
                <textarea style={{ marginRight: "95%" }} rows="5" cols="50">
                  Type your Message here
                </textarea>
              </FormGroup>
              <Button style={{ marginLeft: "82%", marginTop: "8%", backgroundColor: "#170140" }}>
                Send Message
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
