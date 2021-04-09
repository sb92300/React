import React from 'react';
import PropsType from 'prop-types';

class MyComponent2 extends React.Component {
    render() {
        const {name, favoriteNumber, children} = this.props; // 비구조화 할당
        return(
            <div>
                안녕하세요. 제 이름은 {name} 입니다. <br/>
                children의 값은 {children}, <br />
                제가 좋아하는 숫자는 {favoriteNumber} 입니다.
            </div>
        )
    }
}

MyComponent2.defaultProps = {
    name: 'basic-name',
}
MyComponent2.propTypes = {
    name : PropsType.string,
    favoriteNumber : PropsType.isRequired
}

export default MyComponent2;