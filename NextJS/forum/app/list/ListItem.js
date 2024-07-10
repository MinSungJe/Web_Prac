'use client'

import Link from "next/link"
import DetailLink from "./DetailLink"

export default function ListItem({result}) {


    return (
        <div className="list-bg">
        {
            result.map((a, i) => {
                return <ListElement key={i} id={a._id} title={a.title} content={a.content}></ListElement>
            })
        }
        </div>
    )
}


function ListElement({id, title, content}) {
    return (
        <div className="list-item">
          <Link href={`/detail/${id}`}><h4>{title}</h4></Link>
          <Link href={`/edit/${id}`}>✏️</Link>
          <span onClick={(e)=>{
            fetch('/api/post/delete', {
                method : 'DELETE',
                body : JSON.stringify({_id:id})})
            .then((r)=>{
                if (r.status == 200) {
                    return r.json()
                }
                else {
                    // 서버가 에러코드전송시 실행할 코드
                    console.log('서버에서 에러전송')
                }
            })
            .then((r)=>{
                if (r) {
                    // 성공 시 실행할 코드
                    e.target.parentElement.style.opacity = 0
                    setTimeout(()=>{
                        e.target.parentElement.style.display = 'none' 
                    }, 1000)
                }
            }).catch((error) => {
                // 인터넷문제로 실패시 실행할 코드
                console.log('인터넷 에러')
            })
          }}>
            🗑️
          </span>
          <span onClick={()=>{
            fetch('/api/test?name=min&age=25')
          }}>🛠️</span>
          <span onClick={()=>{
            fetch('/api/abc/kim')
          }}>🙋‍♂️</span>
          <DetailLink></DetailLink>
          <p>{content}</p>
        </div>
    )
}