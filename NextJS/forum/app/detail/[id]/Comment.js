'use client'

import { useEffect, useState } from "react"
import CommentElement from "./CommentElement"

export default function Comment({ id }) {
    let [comment, setComment] = useState('')
    let [commentList, setCommentList] = useState([])

    useEffect(() => {
        fetch(`/api/comment/get?id=${id}`)
            .then((r) => {
                if (r.status == 200) {
                    return r.json()
                }
            })
            .then((r) => {
                setCommentList(r)
            })
    }, [])

    return (
        <div>
            {
                commentList.length > 0 ?
                commentList.map((a, i) =>
                    <CommentElement key={i} content={a.content} author={a.author}></CommentElement>
                )
                : '댓글없음'
            }
            <input onChange={(e) => { setComment(e.target.value) }}></input>
            <button onClick={() => {
                fetch('/api/comment/new', {
                    method: 'POST',
                    body: JSON.stringify({
                        content: comment,
                        parent: id
                    })
                }).then((r) => {
                    if (r.status == 200) {
                        return r.json()
                    }
                    throw new Error('Failed to post comment');
                }).then((r) => {
                    setCommentList(r)
                }).catch((error) => {console.log(error)})
            }}>댓글전송</button>
        </div>
    )
}