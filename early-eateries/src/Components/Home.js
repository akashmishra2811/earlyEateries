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
import data from "./../Store/data.json";
import image from "./../Store/Photos/vaidyaMisal.jpg";
export default function Home() {
  const eateryList = data.earlyeateries;
  console.log(eateryList);

  const getEateryCardList = (List) => {
    return (
      <div class="eatery">
        <CardGroup style={{ display: "flex", flexDirection: "column" }}>
          {List.map((eatery) => {
            console.log("eatry", eatery);
            return (
              <Card style={{ display: "flex", flexDirection: "row" }}>
                <CardImg
                  alt="Card image cap"
                  src={image}
                  top
                  height={300}
                  width="100%"
                  style={{ width: "50%" }}
                />
                <CardBody>
                  <CardTitle tag="h5">
                    <a href={eatery.WebsiteLink}>{eatery.eateryName}</a>
                  </CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    since 1912
                  </CardSubtitle>
                  <ListGroup flush>
                    <ListGroupItem>
                      <b>Dish - </b> {eatery.dishName}
                    </ListGroupItem>
                    <ListGroupItem>
                      <b>Price - </b> {eatery.price}
                    </ListGroupItem>
                    <ListGroupItem>
                      <b>Location - </b> {eatery.location}
                    </ListGroupItem>
                    <ListGroupItem>
                      <b>Date - </b> {eatery.date}
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
      <div class="d-flex">
        <div class="leftpane"></div>
        <div class="middlepane">{getEateryCardList(eateryList)}</div>
        <div class="rightpane"></div>
      </div>
    </div>
  );
}
