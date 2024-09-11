const express = require('express')
const app = express()

app.use(express.static(__dirname+'/public'))

app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행 중임')
})

app.get('/', (요청, 응답) => {
    응답.sendFile(__dirname+'/index.html')
})

app.get('/news', (요청, 응답) => {
    응답.send('오늘의 늬우스')
})

app.get('/shop', (요청, 응답) => {
    응답.send('쇼핑페이지이올시다')
})

app.get('/about', (요청, 응답)=>{
    응답.sendFile(__dirname+'/about.html')
})