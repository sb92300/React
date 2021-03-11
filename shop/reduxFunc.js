import { reduData, alert } from './reduxData.js';

function reducer(state = reduData, action) {
    //데이터 수정하는 함수는 reducer라고 이름 짓자.
    if( action.type === 'plus' ) { 
      // Cart.js에서 props.dispatch({ type: plus})라고 정의된 부분에 의하여 조건문 실행
      let copy = [...state];
      copy[0].quantity++;
      return copy;
  
    } else if( action.type === 'minus') {
  
      let minusCopy = [...state];
      minusCopy[0].quantity--;
      return minusCopy;
  
    } else {
  
      return state;
  
    }
    //데이터를 수정하는 방법을 여기서 작성. action.type이 plus면 ~ 반환 아니면 기본 값 반환이라는 뜻.
  }
  
  function reducer2(state = alert, action) {
    if(action.type === "close") {
      state = false;
      return state;
    } else {
      return state;
    }
  }

  export { reducer, reducer2 };