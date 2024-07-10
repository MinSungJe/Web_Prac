import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(요청, 응답) {
    const db = (await connectDB).db("forum")
    if (요청.method == 'POST') {
        let result = await db.collection('comment').find({parent: new ObjectId(요청.body)}).toArray()
        return 응답.status(200).json(JSON.stringify(result))
    }
}