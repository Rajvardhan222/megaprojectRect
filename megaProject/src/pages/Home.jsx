import React,{useEffect,useState} from 'react'
import appwriteService from '../appwrite/config'
import {Card, useNavigate} from '../components/index'
import {Container} from '../components/index'
import { useDispatch, useSelector } from 'react-redux'
import { posts as post} from '../store/authSlices'


function Home() {
   
    let dispatch = useDispatch()
    const [posts, setPosts] = useState([])
    let store = useSelector(storage => storage.isUserLoggedIn)
    dispatch(post(posts))
    let allPosts = useSelector(posts => posts.user.posts)
    useEffect(() => {
        posts.length === 0 && appwriteService.getDocuments().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })

        setPosts(allPosts)
        
    }, [store])

    if (posts.length === 0 ) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
   
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <Card {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
                    
}

export default Home