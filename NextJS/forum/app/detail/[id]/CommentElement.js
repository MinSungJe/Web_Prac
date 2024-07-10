export default function CommentElement({content, author}) {
    return (
        <div style={{padding: '10px', border: '1px solid black', borderRadius: '5px'}}>
            <p>{author}</p>
            <h4>{content}</h4>
        </div>
    )
}