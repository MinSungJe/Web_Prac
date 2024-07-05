import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
    if (요청.method == 'DELETE') {
        try {
            let data = JSON.parse(요청.body)
            const db = (await connectDB).db("forum")
            let result = await db.collection('post').deleteOne({_id: new ObjectId(data._id)})
            return 응답.status(200).json('완료')
        } catch (error) {
            console.log(error)
        }
    }

    return 응답.status(400).json('이상해')
}