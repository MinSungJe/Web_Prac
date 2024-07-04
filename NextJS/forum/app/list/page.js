import { connectDB } from "@/util/database"
import Link from "next/link"
import DetailLink from "./DetailLink"

export default async function List() {

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray()

    return (
        <div className="list-bg">
        {
            result.map((a, i) => {
                return <ListItem key={i} id={a._id} title={a.title} content={a.content}></ListItem>
            })
        }
        </div>
    )
  }

function ListItem({id, title, content}) {
    return (
        <div className="list-item">
          <Link href={`/detail/${id}`}><h4>{title}</h4></Link>
          <Link href={`/edit/${id}`}>✏️</Link>
          <DetailLink></DetailLink>
          <p>{content}</p>
        </div>
    )
}