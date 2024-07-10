import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"
import { ObjectId } from "mongodb"

export default async function handler(요청, 응답) {
    const db = (await connectDB).db("forum")
    const coll = db.collection('comment')
    let session = await getServerSession(요청, 응답, authOptions)

    
    if (요청.method == 'POST') {
        // 로그인됐는지 확인
        if (!session) {
            return 응답.status(400).json('로그인안됨')
        }

        // 보낼 데이터 제작
        요청.body = JSON.parse(요청.body)
        let docs = {
            content: 요청.body.content,
            author: session.user.email,
            parent: new ObjectId(요청.body.parent)
        }

        if (요청.body.content == '') {
            return 응답.status(400).json('내용없음')
        }
        try {
            await coll.insertOne(docs)
            return 응답.status(200).json('전송완료')
        } catch (error) {
            return 응답.status(400).json(error)
        }
    }

}