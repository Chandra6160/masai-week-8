import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class InputValue extends React.Component {
  constructor(props){
    super(props)
    this.state={
      item : "",
      rate : 0,
      quantity :0,
      amount : 0,
      discount :0,
      tax : 0,
    }
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
    })
  }
  render()
  {
    console.log("Ip" +this.state.item)
    return (
      <div class="container">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">Item Name</span>
          </div>
          <input type="text" class="form-control" aria-label="Default" name="item" aria-describedby="inputGroup-sizing-default" value={this.state.item} onChange={this.handleInput} />

        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text " id="inputGroup-sizing-default">Rate</span>
          </div>
          <input type="text" class="form-control" aria-label="Default" name="rate" aria-describedby="inputGroup-sizing-default" value={this.state.rate} onChange={this.handleInput} />

        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">Quantity</span>
          </div>
          <input type="text" class="form-control" aria-label="Default" name="quantity" aria-describedby="inputGroup-sizing-default" value={this.state.quantity} onChange={this.handleInput} />

        </div>
        <div class="row">
          <div class="input-group mb-3 col-6">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">Discount (%)</span>
            </div>
            <input type="text" class="form-control" aria-label="Default" name="discount" aria-describedby="inputGroup-sizing-default" value={this.state.discount} onChange={this.handleInput} />

          </div>
          <div class="input-group mb-3 col-6">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">Tax(%)</span>
            </div>
            <input type="text" class="form-control" aria-label="Default" name="tax" aria-describedby="inputGroup-sizing-default" value={this.state.tax} onChange={this.handleInput} />

          </div>
        </div>

        <button type="submit" class="btn btn-info mt-3" onClick={()=>{this.props.onSubmit(this.state.item,this.state.rate,this.state.quantity,this.state.amount,this.state.tax,this.state.discount)}}>Add</button>
      </div>


    );
  }
}
