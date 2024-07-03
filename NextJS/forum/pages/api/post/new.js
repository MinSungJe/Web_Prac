import { connectDB } from "@/util/database"

export default async function handler(요청, 응답) {
    const db = (await connectDB).db("forum")
    const coll = db.collection('post')
    if (요청.method == 'POST') {
        if (요청.body.title == '') {
            return 응답.status(400).json('제목없음')
        }
        try {
            let docs = { title: 요청.body.title, content: 요청.body.content }
            await coll.insertOne(docs)
            return 응답.redirect(302, '/list')
        } catch (error) {
            console.log('뭔가 이상해')
        }
    }
}