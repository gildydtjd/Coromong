import React, { Component } from 'react'
import './mask.css'
import { Link } from 'react-router-dom';


export default class Mask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : "",
      phone : ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
        handleChange = (e) => {
          this.setState({
            [e.target.name]: e.target.value
          })
        }
    
         handleSubmit = (e) => {
          e.preventDefault();
          this.setState({
            name: '',
            phone: ''
          })
        }
  render() {

     return (
      <div className="mask">
        <div style={{width : '20%'}}>
        <img src="./Img/mask.PNG" style={{width : '60%'}} alt=""></img>
        <h1 className="mask_title">마스크 판매처 조회</h1>
        <label className="form-label" for="formBasicEmail">판매처를 찾을 주소를 입력해 주세요</label>
        <form onSubmit={this.handleSubmit} className="search_form">
        <input
          placeholder="주소"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
          class="form-control"
        />
        <Link to={"/Mask/" + this.state.name}><button type="submit" className="btn-primary">주소 조회</button></Link>
      </form>
      </div>
      </div>
     )
  }
}
