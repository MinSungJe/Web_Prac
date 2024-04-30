// 서버 생성 기본 코드
const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, function () {
  console.log('listening on 8080')
});

// 이거 넣어야 서버간 ajax 요청이 잘 됨
app.use(express.json())
var cors = require('cors')
app.use(cors())

// build 파일 보내기(static 안 필요 자료들)
app.use(express.static(path.join(__dirname, 'react-project/build')))
// build 파일 보내기(html)
app.get('/', function(요청, 응답) {
    응답.setFile(path.join(__dirname, 'react-project\build\index.html'))
})

// 데이터 보내기(/product로 get요청, client-side rendering)
app.get('/product', function(요청, 응답) {
    응답.json({name:'black shoes'})
})

// 리액트에서 라우팅을 담당하는 경우
app.get('*', function(요청, 응답) {
    응답.setFile(path.join(__dirname, 'react-project\build\index.html'))
})