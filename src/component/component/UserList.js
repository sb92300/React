import React from 'react';

function User({user}) {
    return (
        <div>
            <b>{user.username}</b> : <span>{user.email}</span>
        </div>
    )
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]
  return (
    <div>
        {
        users.map(user => (
            <>
                <User user={user} key={user.id}/>
            </>
        )
        )}
    </div>
  )
}
// 고유한 번호 등이 있을 때는 key={고유번호}, 없을 때는 map의 인자에 index를 받아서 key={index}
export default UserList;