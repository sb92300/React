import React from 'react';
// propsTypes를 이용한 props 검증
import PropsTypes from 'prop-types'; 

// destructuring assignment (비구조화 할당)
const MyComponent = ({name, favoriteNumber, children}) => {

  return (
    <div>
      Hello my name is {name}.
      <br />
      children의 값은 {children}
      <br />
      제가 좋아하는 숫자는 {favoriteNumber} 입니다.
    </div>
  );
};

// deafualtPorps 값 만들기 
MyComponent.defaultProps = {
  name: 'basic name',
};
MyComponent.propTypes = {
    // props는 string만 가능함. 렌더링은 되지만 console에 error
    name : PropsTypes.string,
    favoriteNumber : PropsTypes.number.isRequired,
}
export default MyComponent;
