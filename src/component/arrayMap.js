import { useRef } from "react";

function User({user}) {
    return(
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}


function UserList() {
    const users = [
        {   id: 1,
            userName : 'ab',
            email : 'ab1@abc.com'
        },
        {   id: 2,
            userName : 'bc',
            email : 'ab2@abc.com'
        },
        {   id: 3,
            userName : 'cd',
            email : 'ab3@abc.com'
        },
        {   id: 4,
            userName : 'de',
            email : 'ab4@abc.com'
        }
    ];

    const nextId = useRef(5);
    const onCreate = () => {
        nextId.current += 1;
    }

    return(
      <div>
        {
            users.map(user => (
                <User user={user} key={user.id} />
            ))
            // 신문법 return (user => (return 값 입력))
            // map의 콜백함수가 받는 user 인자 값은 users의 모든 값을 한번 씩 반복해서 추출한 값.
        }
      </div>
  
    )
}

export default UserList;