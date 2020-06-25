import React, { Component } from 'react'
import './news.css'
export default class News extends Component {
  render() {
    return (
      <div className="news">
        <div className="news_box">
        <img className="newsImage1" src="./Img/corona1.jpg" alt=""></img><br></br>
        <a className="news_font" href="https://www.yna.co.kr/view/AKR20200619047851063?input=1195m"> 코로나19 대전 확산 지속…확진자 근무 요양병원 환자 전수검사</a>
        </div>
        
        <div className="news_box">
        <img className="newsImage1" src="./Img/corona2.jpg" alt=""></img><br></br>
        <a className="news_font" href="http://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202006190245&t=NN"> 제넥신 “코로나19 예방 백신, 첫 투여 완료”</a>
        </div>

        <br></br>
        <div className="news_box">
        <img className="newsImage1" src="./Img/corona3.jpg" alt=""></img><br></br>
        <a className="news_font" href="https://www.hankyung.com/international/article/2020061962827"> WHO "올해 말 코로나 백신 1~2종 개발 가능성 있어"</a>
        </div>

        <div className="news_box">
        <img className="newsImage1" src="./Img/corona4.jpg" alt=""></img><br></br>
        <a className="news_font" href="https://news.chosun.com/site/data/html_dir/2020/06/19/2020061900355.html?utm_source=naver&utm_medium=original&utm_campaign=news"> 트럼프 중국이 미국 경제 망치려 코로나 퍼트렸을 수도"</a>
        </div>
      </div>
    )
  }
}
