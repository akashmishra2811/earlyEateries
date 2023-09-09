import { Form, Label, Input, FormGroup, Button } from "reactstrap";

export default function SignInForm(props) {
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
        }}
      >
        <div
          class="leftpane"
          style={{ width: "50%", backgroundColor: "#F5FEFD" }}
        >
          <h1
            style={{
              textDecoration: "none",
              fontFamily: "Segoe Script",
              display: "inline",
              color: "#66e0ff",
              textShadow: "white",
              marginLeft: "83%",
            }}
          >
            early
          </h1>
          <div style={{ marginTop: "15%" }}>
            {" "}
            <h3>Sign In Form</h3>
          </div>
          <div style={{ margin: "8%", marginTop: "15%" }}>
            <Form>
              <FormGroup>
                <Label for="exampleEmail" hidden>
                  Email
                </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
              </FormGroup>{" "}
              <FormGroup>
                <Label for="examplePassword" hidden>
                  Password
                </Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="Password"
                  type="password"
                  style={{ marginTop: "8%" }}
                />
              </FormGroup>{" "}
              <Button style={{ marginTop: "8%", backgroundColor: "#66e0ff" }}>
                SignIn
              </Button>
            </Form>
          </div>
        </div>
        <div
          class="rightpane"
          style={{ width: "50%", backgroundColor: "#66e0ff" }}
        >
          <h1
            style={{
              display: "inline",
              color: "#F5FEFD",
              textDecoration: "none",
              fontFamily: "Segoe Script",
              marginRight: "77%",
            }}
          >
            Eateries
          </h1>
          <div style={{ marginTop: "32%" }}>
            {" "}
            <h1 style={{ color: "white" }}>HELLO!</h1>
          </div>
          <div style={{ margin: "6%" }}>
            {" "}
            <h5 style={{ color: "white" }}>
              Feel free to share you details and join the earlyEatery Family
            </h5>
            <Button
              style={{ backgroundColor: "#66e0ff", marginTop: "8%" }}
              onClick={() => {
                props.setLogic(false);
              }}
            >
              SignUp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
