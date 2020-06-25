import React, { Component } from 'react'
import Axios from 'axios';
import './mask.css'

export default class Mask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      count: "",
      stores: [{
        addr: "",
        code: "",
        created_at: "",
        lat: "",
        lng: "",
        name: "",
        remain_stat: "",
        stock_at: "",
        type: ""
      }]
    }
  }
  
  componentDidMount(){
    Axios.get("https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json").then(res => {
      const state = res.data;
      console.log(res.data);
      this.setState(state);
    })
  }
  
  render() {
     return (
      <div className="mask">
        </div>
    )
  }
}
