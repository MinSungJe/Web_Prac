import { connectDB } from "@/util/database"

export default async function List() {

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray()

    return (
        <>
        {
            result.map((a, i) => {
                return <ListItem key={i} title={a.title} content={a.content}></ListItem>
            })
        }
        </>
    )
  }

function ListItem({title, content}) {
    return (
        <div className="list-item">
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
    )
}