import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';


function Cart(props) {
    //redux를 사용해도 값을 상단에서 하단으로 보내는 것이니 props는 써야한다.
   
    function close() {
      props.dispatch({ type : "close", payload : { name : 'kim' } })
    };

    return (
        <div>
  <Table responsive="sm">
    <thead>
      <tr>
        <th>상품 번호</th>
        <th>상품명</th>
        <th>수량</th>
        <th>변경</th>
      </tr>
    </thead>
    <tbody>
    {
        props.store.map((a, i)=> {  

          function productPlus() {
            props.dispatch({ type : 'plus', data : a.id })
          }
          function productMinus() {
            props.dispatch({ type : 'minus', data : a.id })
          }

            return (
            <tr key={i}>
            <td>{a.id}</td>
            <td>{ a.name }</td>
            <td>{ a.quantity }</td>
            <td><button onClick={ productPlus }>+</button>
                <button onClick={ productMinus }>-</button>
            </td>
            {/* porps.dispatch({}) 이 문법을 이용해서 type을 정의 */}
          </tr>
          )
        })
    }
    </tbody>
  </Table>
  {  props.alert === true
  //index.js에서 reduce로 넘어온 값이므로 props가 붙어야 함. 또한 이 삼항연산자를 포함한 함수에 props 인자가 있는지 확인.
     ? ( <div className="my-alert-new">
        <p>지금 구매하시면 20%할인 합니다.</p>
        <button onClick={ close }>닫기</button>
        {/* payload : {} 를 이용해서 데이터를 보낼 수 있음. */}
    </div> )
    : null
  }
</div>
    )
}

function ForRedux(state) {
// state를 props화하는 함수. index.js에서 Provider에게 준 state 값을 여기서 가공
  console.log(state);
  //reducer2를 같이 받아옴. 그러므로 state에는 2가지 값이 들어가 있음.(신발 정보와 true라고 만든 let alert의 값)
  return {
    store : state.reducer,
    alert : state.reducer2
    //index.js 에서 넘어온 state를 여기서 store라고 사용하겠다는 뜻.
    //reducer, reducer2를 받아왔으므로 2가지 값의 이름을 지정해 사용한다.
 }
}

export default connect(ForRedux)(Cart);
// export default connect(함수명)(함수명); import 설치 유의
// export default Cart;