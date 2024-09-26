const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

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

app.get('/write', (요청, 응답) => {
    응답.render('write.ejs')
})

app.post('/add', async (요청, 응답) => {
    let data = 요청.body

    if (data.title == '') {
        응답.send('제목입력안했는데요')
        return
    }

    try {
        let result = await db.collection('post').insertOne({title: data.title, content: data.content})
        응답.redirect('/list')
    } catch(e) {
        console.log(e)
        응답.status(500).send('서버에러남')
    }
})