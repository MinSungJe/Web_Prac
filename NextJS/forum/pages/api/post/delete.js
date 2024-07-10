import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
    if (요청.method == 'DELETE') {
        let session = await getServerSession(요청, 응답, authOptions)
        try {
            let data = JSON.parse(요청.body)
            const db = (await connectDB).db("forum")
            let target = await db.collection('post').findOne({_id: new ObjectId(data._id)})

            // 유저가 맞는지 확인
            if (!session || target.author != session.user.email) {
                return 응답.status(500).json('작성자 불일치')
            }

            // 삭제
            let result = await db.collection('post').deleteOne({_id: new ObjectId(data._id)})
            return 응답.status(200).json('완료')
        } catch (error) {
            console.log(error)
        }
    }

    return 응답.status(400).json('이상해')
}