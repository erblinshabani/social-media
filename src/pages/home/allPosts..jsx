import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
import { useState } from "react"
import { useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "../../firebase/firebase"
import { UploadFiles } from "./uploadFiles"

export const AllPosts = (props) => {
    const post = props.post
    const [user] = useAuthState(auth);
    const [likes, setLikes] = useState([])
    
    const likesRef = collection(db, "likes")
    
    const likesDoc = query(likesRef, where("postId", "==", post.id))

    const getLikes = async () => {
        const data = await getDocs(likesDoc);
        setLikes(data.docs.map(doc => ({ userId: doc.data().userId })));
    }

    const addLike = async () => {
        await addDoc(likesRef, {
            userId: user?.uid,
            postId: post.id
        })
        getLikes()
    }

    const deleteLike = async () => {
        const likeToDeleteQuery = query(likesRef, where("postId", "==", post.id), where("userId", "==", user?.uid));
        const getLikeToDelete = await getDocs(likeToDeleteQuery)
        const likeToDeleteDoc = doc(db, "likes", getLikeToDelete.docs[0].id);
        await deleteDoc(likeToDeleteDoc)
        getLikes()
    }

    const hasUserLiked = likes?.find(like => like.userId === user?.uid)

    useEffect(() => {
        getLikes()
    },[])
    return (
        <div className='allPosts'>
            <div className='postHeader'>
                <img src={post?.userProfilePhoto} alt={post?.displayName} />
                <div className='postHeader-body'>
                    <h3>{post?.username}</h3>
                    {/* <p>{post?.postUploadedTime.seconds}</p> */}
                </div>
            </div>
            <div className='postBody'>

                <p>{post?.description}</p>
            </div>
            <p id="likesAmount">Likes: {likes.length}</p>
            <div className="postFooter">
                <UploadFiles iconFunction={hasUserLiked ? deleteLike : addLike} fileType='like' img={hasUserLiked ? "https://cdn-icons-png.flaticon.com/512/1076/1076984.png" : "https://cdn-icons-png.flaticon.com/512/1077/1077035.png"} span={hasUserLiked ? "Unlike" : "Like"}/>
                <UploadFiles fileType='comment' img="https://cdn-icons-png.flaticon.com/512/1380/1380338.png" span="Comment"/>
                <UploadFiles fileType='like' img="https://cdn-icons-png.flaticon.com/512/2958/2958783.png" span="Share"/>
            </div>
        </div>
    )
}