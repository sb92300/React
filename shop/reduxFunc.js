import { reduData, alert } from './reduxData.js';

function reducer(state = reduData, action) {
    //데이터 수정하는 함수는 reducer라고 이름 짓자.
    if(action.type === 'addProduct') {
      let found = state.findIndex((a)=> { return a.id === action.payload.id });
       //find, findIndex => array 안에 데이터가 있는지 찾는 함수, findIndex는 몇 번째에 있는지 까지 찾음.
      //state 즉 reduData에 있는 데이터의 id 와 action.data에 있는 id가 같은게 있는지 비교. 있으면 배열에 몇 번째에 위치하는지 숫자를 return해줌.
      if(found >= 0 ) {
        // found의 값이 0보다 크거나 같다는 의미는 findIndex 함수를 돌려서 나온 값이 있다는 뜻. 즉 같은 값이 있다는 뜻.
        let copy = [...state];
        copy[found].quantity++;
        return copy;
      } else {
        let copy = [...state];
        copy.push(action.payload);
        return copy;

      }
    }
    else if( action.type === 'plus' ) { 
      // Cart.js에서 props.dispatch({ type: plus})라고 정의된 부분에 의하여 조건문 실행
      let copy = [...state];
      copy[action.data].quantity++;
      return copy;

    }
    else if( action.type === 'minus') {
  
      let minusCopy = [...state];
      minusCopy[action.data].quantity--;
      return minusCopy;
  
    }
    else {
  
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