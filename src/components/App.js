import React from 'react';
import ReactDOM from 'react-dom';
import {Col, Row, Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText,Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./app.module.css";
import InuputValue from "./InputValue.js";
import Table from "./Table.js";


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      item : "",
      rate : 0,
      quantity :0,
      amount : 0,
      array : []
    }
  }
  onSubmit = (item,rate,quantity,amount,tax,discount) => {

    const ob = {
      item : item,
      rate : rate,
      quantity : quantity,
      amount : amount,
      tax : tax,
      discount :discount
    }
    this.setState({
      item : item,
      rate : rate,
      quantity :quantity,
      amount : amount,

      array : [...this.state.array,ob]
    })
  }



  render()
  {
    // console.log(this.state.array);
    // console.log(this.state.rate,this.state.quantity,this.state.amount)
    return (
      <div class="jumbotron">
        <div class="container text-center text-white bg-dark " >
          <h2 >Sonnora Restaurant</h2>
          <p ></p>

          <InuputValue onSubmit={this.onSubmit} />
          <Table arr={this.state.array} />

      </div>


      </div>
    );
  }

}
