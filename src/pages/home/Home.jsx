import { auth } from '../../firebase/firebase';
import '../../styles/home.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { CreatePost } from './createPost';
import { UploadFiles } from './uploadFiles';
import { Post } from './post';
import { useDocumentTitle } from '../../components/useDocumentTitle';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate(null)

    useDocumentTitle("Home")

    return (
        <div className="home" style={{ flex: user ? 0.6 : 1 }}>
            {user ?
            <div className='homePosts'>
                <div className='postCreate'>
                    <CreatePost />
                    <div className='uploadFiles'>
                        <UploadFiles fileType={"Image"} img="https://cdn-icons-png.flaticon.com/512/833/833281.png" span="Photo"/>
                        <UploadFiles fileType={"Video"} img="https://cdn-icons-png.flaticon.com/512/1179/1179069.png" span="Video"/>
                        <UploadFiles fileType={"Event"} img="https://cdn-icons-png.flaticon.com/512/2693/2693646.png" span="Event"/>
                        <UploadFiles fileType={"Article"} img="https://cdn-icons-png.flaticon.com/512/2696/2696555.png" span="Article"/>
                    </div>
                </div>
                <div className='posts'>
                    <Post />
                </div>
            </div>
            :

            <div>
                <h1 onClick={() => navigate('/login')}>Go To Log In Page</h1>
            </div>
            }
        </div>
    )
}

export default Home