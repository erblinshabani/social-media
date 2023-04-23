import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export const CreatePost = () => {
    const [user] = useAuthState(auth)

    const schema = yup.object().shape({
        'description': yup.string().required("You Must Add A Description")
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })

    const postRef = collection(db, "posts")
    
    const submitForm = async (data) => {
        await addDoc(postRef, {
            ...data,
            userProfilePhoto: user?.photoURL,
            username: user?.displayName,
            userId: user?.uid,
            postUploadedTime: serverTimestamp()
        })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(submitForm)} className="create-new-post">
                <img className='writeIcon' src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png" alt="createPost" />
                <textarea placeholder='Type something...' {...register('description')}/>
                <button type="submit">Upload</button>
            </form>
            <p style={{ color: "red", fontSize: "17px" , textAlign:"center" }}>{errors?.description?.message}</p>
        </div>
    )
}