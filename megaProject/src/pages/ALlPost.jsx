import React from 'react'
import { useEffect,useState } from 'react'
import {Container} from "../components/index"
import appwriteService from '../appwrite/config'
import {Card as PostCard} from '../components/index'
import { ID } from 'appwrite'
import { useSelector ,useDispatch} from 'react-redux'
import {posts as allposts} from '../store/authSlices'

function ALlPost() {
    let [posts,setPosts] = useState([])
    let selector = useSelector(store => store.user.posts)
    let dispatch = useDispatch()
    useEffect(()=>{
     posts.length === 0 &&   appwriteService.getDocuments([])
        .then((posts)=> {
            console.log(posts);
            if (posts) {
                setPosts(posts.documents)
                dispatch(allposts(posts.documents))

            }
    })

    // store fetch

    // let AllPost = selector(store => store.user.posts)
    setPosts(selector)

    },[])
  return (
    <div className='w-full py-8'>
        <Container>
            <div key={ID.unique()} className='flex flex-wrap'>  {posts.map((post,index)=>(
                <div className='p-2 w-1/4'> <PostCard  {...post}/> </div>
            ))}
            </div>
          
        </Container>
    </div>
  )
}

export default ALlPost