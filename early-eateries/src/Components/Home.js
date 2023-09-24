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
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import "./Home.css";
import Display  from "./Display"
import { earlyeateries } from "../Store/data.js";
export default function Home() {
  const eateryList = earlyeateries;
  console.log(eateryList);
  const bgColor = "#E7E8D1";
  const getEateryCardList = (List) => {
    return (
      <>
        {" "}
       
        <div style={{ margin: "2.5%" }}>
          <Card
            style={{
              width: "18rem",
            }}
          >
            <img alt="Sample" src="https://picsum.photos/300/200" />
            <CardBody>
              <CardTitle tag="h5">Vaidya Hotel</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Misal
              </CardSubtitle>

              <Button style={{ backgroundColor: " #16909d" }}>Comment</Button>
              <Button style={{ backgroundColor: "#cc0000", margin: "3.5%" }}>
                Info
              </Button>
            </CardBody>
          </Card>
        </div>
      </>
    );
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
    <>
     <Display/>
    <div>
      <div
        class="d-flex"
        style={{ width: "100%", marginTop: "3.5%", flexWrap: "wrap" }}
      >
        {eateryList.map((eatery, index) => {
          return <>{getEateryCardList(eatery)}</>;
        })}
      </div>
      <div style={{ marginLeft: "33%" }}>
        <Pagination aria-label="Page navigation example" size="lg">
          <PaginationItem>
            <PaginationLink first href="">
              First
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="" previous>
              Previous
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="" next>
              Next
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="" last>
              Last
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </div>
    </div>
    </>
  );
}
