import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(요청, 응답) {
    
    if (요청.method == 'POST') {
        try {
            let temp = {
                title: 요청.body.title,
                content: 요청.body.content
            }

            const db = (await connectDB).db("forum")
            await db.collection('post').updateOne({_id: new ObjectId(요청.body._id)}, 
            {$set: temp})
            return 응답.redirect(302, '/list')
        } catch (error) {
            console.log('에러남')
        }
    }
    
    return 응답.status(400).json('이상해')
}