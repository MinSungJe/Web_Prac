'use client'

import { useEffect, useState } from "react"
import CommentElement from "./CommentElement"

export default function Comment({ id }) {
    let [comment, setComment] = useState('')
    let [commentList, setCommentList] = useState([{ _id: '668ecce2b8a7b0b3ca74962a', content: '댓글이다옹', author: 'test2', parent: '668ec69eb8a7b0b3ca749623' }])

    useEffect(() => {
        fetch('/api/comment/get', {
            method: 'POST',
            body: id
        })
            .then((r) => {
                if (r.status == 200) {
                    return r.json()
                }
            })
            .then((r) => {
                return JSON.parse(r)
            })
            .then((r) => {
                setCommentList(r)
            })
    }, [])

    return (
        <div>
            {
                commentList.map((a, i) =>
                    <CommentElement key={i} content={a.content} author={a.author}></CommentElement>
                )
            }
            <input onChange={(e) => { setComment(e.target.value) }}></input>
            <button onClick={() => {
                fetch('/api/comment/new', {
                    method: 'POST',
                    body: JSON.stringify({
                        content: comment,
                        parent: id
                    })
                })
            }}>댓글전송</button>
        </div>
    )
}