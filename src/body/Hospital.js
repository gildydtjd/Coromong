import React, { Component } from 'react'
import './hospital.css'
import { Link } from 'react-router-dom';


export default class Hospital extends Component {
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
      <div className="hospital">
        <div style={{width : '20%'}}>
        <img src="../Img/hospital.PNG" style={{width : '60%'}}></img>
        <h1 className="mask_title">병원 조회</h1>
        <label className="form-label" for="formBasicEmail">병원을 찾을 주소를 입력해 주세요</label>
        <form onSubmit={this.handleSubmit} className="search_form">
        <input
          placeholder="주소"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
          class="form-control"
        />
        <Link to={"/Mask/" + this.state.name}><button type="submit" className="btn-primary">병원 조회</button></Link>
      </form>
      </div>
      </div>
     )
  }
}