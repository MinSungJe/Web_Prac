const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')

const { MongoClient } = require('mongodb')

let db
const url = 'mongodb+srv://admin:qwer1234@cluster0.xacmkco.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
new MongoClient(url).connect().then((client) => {
    console.log('DB연결성공')
    db = client.db('NodeJS')

    app.listen(8080, () => {
        console.log('http://localhost:8080 에서 서버 실행 중임')
    })
}).catch((err) => {
    console.log(err)
})


app.get('/', (요청, 응답) => {
    응답.sendFile(__dirname + '/index.html')
})

app.get('/shop', (요청, 응답) => {
    응답.send('쇼핑페이지이올시다')
})

app.get('/about', (요청, 응답) => {
    응답.sendFile(__dirname + '/about.html')
})

app.get('/news', (요청, 응답) => {
    응답.send('오늘의 늬우스')
})

app.get('/list', async (요청, 응답) => {
    let result = await db.collection('post').find().toArray()
    응답.render('list.ejs', {posts: result})
})

app.get('/time', (요청, 응답) => {
    응답.render('time.ejs', {time: new Date()})
})