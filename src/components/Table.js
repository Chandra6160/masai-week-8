import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function sum(props) {
  let total = 0;
  let amount = this.props.arr;
  for(let i=0;i<amount.length;i++)
  {
    console.log(amount[i] +" hello")
  }

}

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render()
  {
    const total=this.props.arr.reduce((acc,arr)=>{
      return acc + ((arr.rate * arr.quantity) - ((arr.rate * arr.quantity) * (arr.discount / 100)) + ((arr.rate * arr.quantity) * (arr.tax/100)));
    },0)

    // console.log(this.props.arr)
    return (
      <table class="table mt-3 text-white">
        <thead>
          <tr>
            <th scope="col">Item Name</th>
            <th scope="col">Rate</th>
            <th scope="col">Quantity</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        {this.props.arr.map((arr) => {
          return (
            <tbody>
              <tr>
                <th scope="row">{arr.item}</th>
                <td>{arr.rate}</td>
                <td>{arr.quantity}</td>
                <td>{((arr.rate * arr.quantity) - ((arr.rate * arr.quantity) * (arr.discount / 100)) + ((arr.rate * arr.quantity) * (arr.tax/100))).toFixed(2)}</td>
              </tr>

            </tbody>
          )
        })}
        <tbody>
          <tr>
          <th scope="row">Total : Rs {total.toFixed(2)} </th>



          </tr>
        </tbody>

      </table>
    );
  }
}
