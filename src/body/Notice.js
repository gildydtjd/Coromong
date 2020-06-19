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
        <th scope="cols">Content</th>
        </tr>
        </thead>

        <tbody>

        <tr>
        <th scope="row">항목명</th>
        <td>내용이 들어갑니다.</td>
        <td>내용이 들어갑니다.</td>
        <td>내용이 들어갑니다.</td>
        </tr>

        <tr>
        <th scope="row">항목명</th>
        <td>내용이 들어갑니다.</td>
        <td>내용이 들어갑니다.</td>
        <td>내용이 들어갑니다.</td>
        </tr>

        <tr>
        <th scope="row">항목명</th>
        <td>내용이 들어갑니다.</td>
        <td>내용이 들어갑니다.</td>
        <td>내용이 들어갑니다.</td>
        </tr>

        <tr>
        <th scope="row">항목명</th>
        <td>내용이 들어갑니다.</td>
        <td>내용이 들어갑니다.</td>
        <td>내용이 들어갑니다.</td>
        </tr>
        
        </tbody>
        </table>
       </div>
    )
  }
}
