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
      <CardGroup>
        {List.map((eatry) => {
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
                <CardTitle tag="h5">{eatry.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <ListGroup flush>
                  <ListGroupItem>
                    <div></div>
                  </ListGroupItem>
                  <ListGroupItem>A second item</ListGroupItem>
                  <ListGroupItem>And a third item</ListGroupItem>
                </ListGroup>
                <Button>Button</Button>
              </CardBody>
            </Card>
          );
        })}
      </CardGroup>
    );
  };
  return (
    <div class="container">
      <div class="d-flex">
        <div class="leftpane">
          <h1>Test Page</h1>
        </div>
        <div class="middlepane">{getEateryCardList(eateryList)}</div>
        <div class="rightpane">
          <h1>Test Page</h1>
        </div>
      </div>
    </div>
  );
}
