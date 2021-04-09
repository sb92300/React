function CreateUser({username, email, onChange, onCreate}) {
    return(
        <div>
            <input name="username"  onchange={onChange} value={username}/>
            <input name="email" placeholder="이메일" onchange={onChange} value={email}/>
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

export default CreateUser;