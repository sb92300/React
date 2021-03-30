
function User({user, onRemove}) {
    return(
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
            <button onClick={()=>{onRemove(user.id)}}>삭제</button>
        </div>
    )
}


function UserList({users, onRemove}) {

    return(
      <div>
        {
            users.map(user => (
                    <User user={user} key={user.id} onRemove={onRemove}/>
            ))
            // 신문법 return (user => (return 값 입력))
            // map의 콜백함수가 받는 user 인자 값은 users의 모든 값을 한번 씩 반복해서 추출한 값.
        }
      </div>
  
    )
}

export default UserList;