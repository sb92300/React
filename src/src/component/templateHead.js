import styled from 'styled-components';

const HeadBlock = styled.div `
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    h1 {
        margin: 0;
    font-size: 36px;
    color: #343a40;
    }
    .weekend {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .task-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
    
`

function Head() {
    return (
        <HeadBlock>
            <h1>날짜</h1>
            <div className="weekend">요일</div>
            <div className="task-left">ToDo 남은 숫자</div>
        </HeadBlock>
    )
};

export default Head;