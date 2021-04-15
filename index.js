const express = require('express');
const path = require('path');
const app = express();
//express를 이용한 서버 실행 (server\index.js, server\리액트 프로젝트 폴더)
// cd server, npm init, npm install express -> 실행 
// react 프로젝트 폴더 내에서 npm run build 후 아래 코드 실행.

app.use(express.static(path.join(__dirname, 'project/build')));
//특정 폴더안의 파일을 static 파일로 요청자에게 보내줌


app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/project/build/index.html'));
})
// '/'경로에서 리액트 폴더 내에 build 폴더에 존재하는 index.html 실행
// 모든 리액트로 만든 기능의 결과가 index.html 하나로 나타나기 때문.
// 리액트는 html을 대신 하는 것이기 때문에 이런 식으로 사용 가능 
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '/project/build/index.html'));
});
// client가 url에 어떤걸 입력하면 react project를 보여줌
// react 안에 react-router-dom을 이용하여 route를 해놔야 함.
// 리액트 라우팅을 위한 문장.

const http = require('http').createServer(app);
http.listen(8080, function() {
    console.log('listening on 8080');
});