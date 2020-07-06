import React, { Component } from 'react'
import './infection.scss'
import Axios from 'axios';

export default class Infection extends Component {
	constructor(props) {
    super(props);
    this.state = {
			INC_DEC : "",
			ISOL_CLEAR_CNT : "",
			GUBUN : "",
		}
	}
	componentDidMount(){
		Axios.get("http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=K46K63aMeQ4hpGjk7Wi5MahoC7VbxFIXhsOBUn0WT8Frr3GVqZaZSN0ExgnPbBVQkg09CqeV031XYlX%2BkkNJQg%3D%3D&pageNo=1&numOfRows=10&startCreateDt=20200410&endCreateDt=20200410").then(res => {
      const state = res.data;
      console.log(res.data);
			this.setState(state);
			// INVALID REQUEST PARAMETER ERROR. 정보포털 OpenApi 사망..
    })
	}
	
  render() {
    return (
      <div className="infection">
				<img src="../Img/good.PNG" style={{ width : "1000px"}}></img>
				<img src="../Img/good1.PNG" style={{ height : "150px"}}></img>
			</div>
    )
  }
}

