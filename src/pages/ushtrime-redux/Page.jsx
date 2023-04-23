import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPost } from "../../redux/page";
import '../../styles/page.css'

export const Page = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const postsList = useSelector(state => state.posts.value)
    
    const dispatch = useDispatch()

    const addNewPost = () => {
        if(title && content) {
            dispatch(addPost(title, content))
        }

        setTitle("")
        setContent("")
    }

    return (
        <div className="page">
            <h1 className="page-title">Welcome To Notes</h1>
            <div className="page-create-notes">
                <input value={title} type="text" onChange={e => setTitle(e.target.value)} placeholder="Title" />
                <input value={content} type="text" onChange={e => setContent(e.target.value)} placeholder="Content" />
                <button onClick={addNewPost}>Add Notes</button>
            </div>
            <div className="notes">
                {postsList.map((posts,key) => {
                    return (
                        <div className="notes-card" key={key}>
                            <h1>{posts.title}</h1>
                            <p>{posts.content}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}