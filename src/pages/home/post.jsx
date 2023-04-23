import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { useEffect } from 'react'
import { useState } from 'react'
import {  db } from '../../firebase/firebase'
import '../../styles/post.css'
import { AllPosts } from './allPosts.'

export const Post = () => {
    const [posts, setPosts] = useState([])

    const postsRef = collection(db, "posts");

    const getPostsRef = query(postsRef, orderBy("postUploadedTime", "desc"))
    

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(getPostsRef);
            setPosts(data?.docs.map(doc => ({...doc.data(), id: doc.id})))
        }
        
        getPosts()
    }, [getPostsRef, posts])
    return (
        <>
            {posts.map((post, key) => {
                return (
                    <AllPosts key={key} post={post}/>
                    )
            })}
        </>
    )
}