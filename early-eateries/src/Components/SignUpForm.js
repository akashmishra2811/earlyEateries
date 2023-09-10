import {Form, Label , Input , FormGroup ,Button} from "reactstrap";

export default function SignUpForm(props) {


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
            style={{ width: "50%", backgroundColor: " #ff4d4d" }}
          >
            <h1
              style={{
                textDecoration: "none",
                fontFamily: "Segoe Script",
                display: "inline",
                color: "white",
                textShadow: "black",
                marginLeft: "83%",
              }}
            >
              early
            </h1>
            <div style={{ marginTop: "37%" }}>
              {" "}
              <h1 style={{ color: "white" }}>Welcome Back!</h1>
            </div>
            <div style={{ margin: "6%" }}>
              {" "}
              <h5 style={{ color: "white" }}>
                Enter you login and we want you to be active member in
                earlyEatery family
              </h5>
              <Button
                style={{ backgroundColor: " #ff4d4d", marginTop: "8%" }}
                onClick={() => {
                  props.setLogic(true);
                }}
              >
                SignIn
              </Button>
            </div>
          </div>
          <div
            class="rightpane"
            style={{ width: "50%", backgroundColor: " #F5FEFD " }}
          >
            <h1
              style={{
                display: "inline",
                color: " #ff4d4d",
                textDecoration: "none",
                fontFamily: "Segoe Script",
                marginRight: "77%",
              }}
            >
              Eateries
            </h1>
            <div style={{ marginTop: "15%" }}>
              {" "}
              <h3>Sign Up Form</h3>
            </div>
            <div style={{ margin: "6%", marginTop: "15%" }}>
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
                <FormGroup>
                  <Label for="examplePassword" hidden>
                    Password
                  </Label>
                  <Input
                    id="exampleConfirmPassword"
                    name="confirmPassword"
                    placeholder=" confirm Password"
                    type="password"
                    style={{ marginTop: "8%" }}
                  />
                </FormGroup>
                <Button
                  style={{ marginTop: "8%", backgroundColor: " #ff4d4d" }}
                >
                  SignUp
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
}