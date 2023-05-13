import React from "react";
import {
  CardBody,
  CardGroup,
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import "./Home.css";
import { earlyeateries } from "../Store/data.js";
export default function Home() {
  const eateryList = earlyeateries;
  console.log(eateryList);
  const bgColor = "#E7E8D1";
  const getEateryCardList = (List) => {
    return (
      <div class="eatery">
        <CardGroup
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
          }}
        >
          {List.map((eatery, index) => {
            console.log("eatry", eatery);
            return (
              <Card
                style={{
                  display: "flex",
                  flexDirection: "row",
                  backgroundColor: bgColor,
                  width: "150%",
                  margin: "0.8rem",
                }}
              >
                <CardImg
                  alt="Card image cap"
                  src={eatery.image}
                  top
                  height={300}
                  width="40%"
                  style={{
                    width: 500,
                    objectFit: "cover",
                  }}
                />
                <CardBody>
                  <CardTitle
                    tag="h5"
                    style={{
                      backgroundColor: bgColor,
                      fontFamily: "Segoe UI",
                    }}
                  >
                    <a href={eatery.WebsiteLink}>{eatery.eateryName}</a>
                  </CardTitle>
                  <CardSubtitle className="mb-2 text-muted item" tag="h6">
                    since 1912
                  </CardSubtitle>
                  <ListGroup
                    flush
                    style={{
                      backgroundColor: bgColor,
                    }}
                  >
                    <ListGroupItem
                      style={{
                        backgroundColor: bgColor,
                      }}
                    >
                      <b style={{ fontFamily: "MV Boli" }}>Dish - </b>{" "}
                      {eatery.dishName}
                    </ListGroupItem>
                    <ListGroupItem
                      style={{
                        backgroundColor: bgColor,
                      }}
                    >
                      <b style={{ fontFamily: "MV Boli" }}>Price - </b>{" "}
                      {eatery.price}
                    </ListGroupItem>
                    <ListGroupItem
                      style={{
                        backgroundColor: bgColor,
                      }}
                    >
                      <b style={{ fontFamily: "MV Boli" }}>Location - </b>{" "}
                      {eatery.location}
                    </ListGroupItem>
                    <ListGroupItem
                      style={{
                        backgroundColor: bgColor,
                      }}
                    >
                      <b style={{ fontFamily: "MV Boli" }}>Date - </b>{" "}
                      {eatery.date}
                    </ListGroupItem>
                  </ListGroup>
                </CardBody>
              </Card>
            );
          })}
        </CardGroup>
      </div>
    );
  };
  return (
    <div>
      <div class="d-flex" style={{ width: "100%" }}>
        <div class="leftpane"></div>
        <div class="middlepane">{getEateryCardList(eateryList)}</div>
        <div class="rightpane"></div>
      </div>
    </div>
  );
}
