import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import PostForm from '../PostForm'
import Container from '../container/Container'
import appwriteService from '../../appwrite/config'


function EditPost() {
    let [post,setPost] = useState()
    let {url} = useParams()
    let navigate = useNavigate()
    useEffect(()=>{
        if (url) {
            appwriteService.getDocument(url).then((post)=>{
                setPost(post)
            })
        }
        else{
            navigate("/")
        }
    },[url,navigate])
  return (
    <div>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  )
}

export default EditPost