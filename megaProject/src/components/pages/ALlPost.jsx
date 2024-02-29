import React from 'react'
import { useEffect,useState } from 'react'
import Container from "../container/Container"
import appwriteService from '../../appwrite/config'
import PostCard from '../card/Card'

function ALlPost() {
    let [posts,setPosts] = useState([])
    useEffect(()=>{
        appwriteService.getDocuments([])
        .then((posts)=> {
            if (posts) {
                setPosts(posts.documents)
            }
    })
    },[])
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>  {posts.map((post,index)=>{
                <div className='p-2 w-1/4'> <PostCard key={index} post={post}/> </div>
            })}
            </div>
          
        </Container>
    </div>
  )
}

export default ALlPost