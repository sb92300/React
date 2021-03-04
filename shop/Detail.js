import React, { useEffect, useState } from "react";
//이게 있어야 컴포넌트를 만들 수 있음.
import { useHistory, useParams } from "react-router-dom";
import styled from 'styled-components';
import './Detail.scss';

let Box = styled.div`
  padding : 20px;
`;

let Word = styled.h4`
  font-size : 25px;
  color : ${ props => props.color }
  color : ${ props => props.color2 } 
`;
// 이런 식으로 props 값만 바꿔서 여러 개의 컬러를 지정할 수 있으나 편의성은 떨어짐.
function Detail(props) {


    useEffect( ()=>{
      //component가 생성될 떄, component가 update될 때 실행 됨.
      // useEffect는 몇 번이고 써도 괜찮다. 단 위에서 부터 차례대로 실행 됨.
     let timer = setTimeout(function() {
          if(time == false) {
            setTime(true);
          }
      },2000);
    return function() {
      // return 함수는 Unmount가 될 때 실행 됨.
      // 실행할 코드
    }
    } );
    let [time, setTime] = useState(false);
    let { id } = useParams();
    // { url 파라미터 값 }
    let history = useHistory();
    let product = props.shoes.find(function(shoes) {
      //배열에서 원하는 데이터를 추출할 땐 find.
      return shoes.id == id;
        //return해 주는 값을 바로 선언.
    })

    //방문기록을 담은 오브젝트.

    return (
      <div className="container">
        <Box>
          <Word className="red" color='purple'>상세 페이지</Word>
          {/* 변수가 아니라 문자를 보낼 때는 props에서 {} 빼도 됨. */}
            { time === false
               ? (    <div className="my-alert-new">
                      <p>재고 마감 임박!</p>
                      </div>)
               : null 
            } 
        </Box>
        <div className="row">
          <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6 mt-4">
              <h4 className="pt-5">{props.shoes[product.id].title}</h4>
              <p>{props.shoes[product.id].content}</p>
              <p>{props.shoes[product.id].price}원</p>
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
  // class Detail2 extends React.Component {

  //   componentDidMount() {
  //       //Detail2가 Mount 되고 나서 실행할 코드 (컴포넌트 첫 등장후 실행할 코드)
  //   }
  //   componentWillUnmount() {
  //       //Detail2가 Unmount 되기 전에 실행할 코드 (컴포넌트가 사라지기 전에(다른 페이지로 이동 등의 사유) 실행할 코드)
  //   }
  // } 옛날 리액트 문법


export default Detail;