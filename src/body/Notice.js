import React, { Component } from 'react'
import './notice.css'
export default class Notice extends Component {
  render() {
    return (
      <div className="notice">
        <table className="notice_table">
        <thead>
        <tr>
        <th scope="cols">Count</th>
        <th scope="cols">Title</th>
        <th scope="cols">Content</th>
        <th scope="cols">Views</th>
        </tr>
        </thead>

        <tbody>

        <tr>
        <th scope="row">1</th>
        <td>코로나19 수도권 방역 관리 방안</td>
        <td>2020.06.19(금) 코로나 수도권...</td>
        <td>128</td>
        </tr>

        <tr>
        <th scope="row">2</th>
        <td>다중이용시설 이용 코로나19 검사</td>
        <td>2020.05.20(수) 다중이용시설...</td>
        <td>37</td>
        </tr>

        <tr>
        <th scope="row">3</th>
        <td>이태원 클럽 방문 코로나19 검사</td>
        <td>2020.05.28(금) 이태원 클럽...</td>
        <td>76</td>
        </tr>

        <tr>
        <th scope="row">4</th>
        <td>코로나19 위기극복 성금 전달</td>
        <td>2020.06.15(화) 위기극복성금...</td>
        <td>112</td>
        </tr>
        
        </tbody>
        </table>
       </div>
    )
  }
}
