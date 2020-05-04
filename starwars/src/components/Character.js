// Write your Character component here
import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import './Character.css';

const Character = props => {
    return (
        <div className="cardContainer">
            <Card>
                <CardImg top width="100%" src={props.image} alt="Card image cap" />
                <CardBody>
                    <CardTitle><h3>{props.name}</h3></CardTitle>
                    <CardSubtitle>Species: {props.species}</CardSubtitle>
                    <Button>Status: {props.status}</Button>
                </CardBody>
            </Card>
        </div>
            ) 
}


export default Character