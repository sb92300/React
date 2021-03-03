import React, { useState } from "react";
//이게 있어야 컴포넌트를 만들 수 있음.
import { useHistory, useParams } from "react-router-dom"


function Detail(props) {
    let { id } = useParams();
    // { url 파라미터 값 }
    let history = useHistory();
    //방문기록을 담은 오브젝트.

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6 mt-4">
              <h4 className="pt-5">{props.shoes[id].title}</h4>
              <p>{props.shoes[0].content}</p>
              <p>{props.shoes[0].price}원</p>
              <button className="btn btn-primary">주문하기</button>
              <button className="btn btn-danger" onClick={ ()=> {
                  history.goBack();
                //   history.push('/') 라고 작성하면 작성한 경로로 이동 가능.
              } }>뒤로가기</button> 
          </div>
        </div>
      </div> 
    )
  }

export default Detail;