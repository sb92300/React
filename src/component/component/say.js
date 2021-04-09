import {useState} from 'react';

const Say = () =>{
    const [message, setMessage] = useState('');
    //state의 값을 바꿔주는 함수(setMessage)를 세터(setter)함수라고 한다.
    const onClickEnter = ()=>{setMessage('안녕하세요!')};
    const onClickLeave = ()=>{setMessage('안녕히 가세요')};

    return (
        <>
            <button onClick={onClickEnter}>hi</button>
            <button onClick={onClickLeave}>bye</button>
            <h1>{message}</h1>
        </>
    )
}
export default Say;