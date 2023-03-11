import React from "react";
import "./Contact.css";
import contacImage from "./../Store/Photos/contact2.jpg";
import contacImage1 from "./../Store/Photos/contact1.png";
export default function Contact() {
  return (
    <div>
      <div class="d-flex">
        <div class="leftpanecontact">
          <img src={contacImage} alt="Contact Us" width={750} height={800} />
        </div>

        <div class="rightpanecontact" style={{}}>
          {" "}
          <h1>Contact us</h1>
          <p>
            <h4 style={{ color: "grey" }}>
              Email us with any queries or if want to share your explored
              earlyEatery or call us at 8830835652 . we would be happy to solve
              your queries and would love to add you earlyEatery on our site .
              Always welcome to join earlyEateries family
            </h4>
          </p>
        </div>
      </div>
    </div>
  );
}
