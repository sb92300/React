import React, {Component} from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            fixedNumber : 0,
        };
            //constructor method / class형 component에서 state를 만들기 위해 필요. super(props)를 선언해 주어야 현재 컴포넌트가 상속받고 있는 리액트의 생성자 함수를 호출해줌.
    }
    render() {
        const {number, fixedNumber} = this.state;
        return(
            <>
                <h1>{number}</h1>
                <h2>불변 값 {fixedNumber}</h2>
                <button onClick={()=> {
                    this.setState({number : number + 1},
                        ()=>{console.log('방금 setState가 출력되었다.')
                    console.log(this.state);
                }
            );
            }}> + 1 </button>
                {/* useState 생성 시 setState를 이용해 값을 변환하는 것 처럼 class형도 setState를 이용해 값을 변환한다. */}
            </>
        );
    };
};
// class Counter extends React.Component {
//         state = {
//                   number: 0,
//                   fixedNumber : 0,
//                  };
//             //constructor 없이 만드는 방법
//     render() {
//         const {number, fixedNumber} = this.state;
//         return(
//             <>
//                 <h1>{number}</h1>
//                 <h2>불변 값 {fixedNumber}</h2>
//                 <button onClick={()=> {this.setState({number : number + 1});}}> + 1 </button>
//                 {/* useState 생성 시 setState를 이용해 값을 변환하는 것 처럼 class형도 setState를 이용해 값을 변환한다. */}
//             </>
//         );
//     };
// };


export default Counter;