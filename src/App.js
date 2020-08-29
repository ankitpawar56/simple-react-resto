import React from 'react';
import logo from './logo.svg';
import "tabler-react/dist/Tabler.css";
// import { Card, Button } from "tabler-react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { AiOutlineCheck, AiFillStar } from 'react-icons/all';
import StarRatings from 'react-star-ratings';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './App.css';

class App extends React.Component {
  state ={
    allRestoDetails : {"name":"Cafe Goodluck",
    "area":"Deccan Gymkhana",
    "city":"Pune",
    "category":["Restaurant","Cafe","Breakfast"],
    "cover-image":"https://content3.jdmagicbox.com/comp/pune/p6/020pxx20.xx20.180309120117.g6p6/catalogue/cafe-good-luck-pune-solapur-road-pune-home-delivery-restaurants-j7ane.jpg",
    "review_rating":
    {"votes":[{
      "rating":4,"votes":159},
      {"rating":5,"votes":201},
      {"rating":2,"votes":49},
      {"rating":3,"votes":69},
      {"rating":1,"votes":125}],
    "total":603},
    "feature_rating":
    { "rate":[{ 
        "name":"place", "rating" : 3.6},
        {"name":"food", "rating" : 3.5},
        {"name":"service","rating" : 3.8},
        {"name":"staff", "rating" : 4.1},
        {"name":"breakfast", "rating" : 3.4}]
      }
    }
  }
  render() {
  const value = 0.66;
    return (
      <Container>
        <Row md={16} className="text-center">
          <Col md={16}>
            <Card style={{ width: '30rem' }}>
              <Card.Img variant="top" src={this.state.allRestoDetails["cover-image"]} />
                <Card.Body>
                <Card.Title>{this.state.allRestoDetails.name}</Card.Title>
                <Card.Text>
                  {this.state.allRestoDetails.area} , {this.state.allRestoDetails.city}
                  <div>
                  {this.state.allRestoDetails.category.map(name => (
                        <span className='pl18'><AiOutlineCheck></AiOutlineCheck> {name}</span >
                        ))}
                        </div>
                </Card.Text>
                <Card.Text>Ratings</Card.Text>
                <Card.Text>
                  {this.state.allRestoDetails.review_rating.votes.sort((a,b) => b.rating - a.rating).map(name => (
                        <div>
                         <span className='pr10'> {name.rating}  </span>
                          <StarRatings
                            rating={name.rating}
                            starRatedColor="black"
                            numberOfStars={5}
                            name='rating'
                            starDimension= '20px'
                              />
                           <span>  {name.votes}</span></div>
                  ))}
                </Card.Text>
                <Card.Text>
                  {this.state.allRestoDetails.feature_rating.rate.map( value => (
                    <div className="d-inline-flex p-2 col-example" style={{ width: "80px" }}>
                    <CircularProgressbar  
                    value={value.rating} maxValue={5} text={value.name} /> 
                    </div>
                  ))}
                    
                     


                </Card.Text>
                
                 </Card.Body>
              </Card>
           </Col>
         </Row>
      </Container>
    );
  }
}

export default App;
