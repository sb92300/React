import {useState} from 'react';

const EventPractice = () => {

    const [form, setForm] = useState({
        userName : "",
        message : "",
    })
    const {userName, message} = form;
    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name] : e.target.value
        };
        setForm(nextForm);
    }
    const onClick = () => {
        alert(userName + ':' + message);
        setForm({
            userName : '',
            message : ""
        })
    };
    const onKeyPress = e=> {
        if(e.key === 'Enter') {
            onclick();
        }
    }
    return(
        <>
            <h1>이벤트 연습</h1>
            <input type="text" name="userName" placeholder="아무거나 입력해보세요." value={userName} onChange={onChange} />
            <input type="text" name="message" placeholder="아무거나 입력해보세요." value={message} onChange={onChange} onKeyPress={onKeyPress} />
            <button onClick={onClick}>확인</button>
        </>
    )
}
// input에 입력하면 form이 nextForm으로 바뀐다. ->  form state 구조가 변한다. name(username) : value(username), massage : massage 값으로 -> 클릭하면 alert (userName, message)
export default EventPractice;