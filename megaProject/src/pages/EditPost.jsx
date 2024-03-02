import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import PostForm from '../../src/components/PostForm'
import {Container} from "../components/index"
import appwriteService from '../appwrite/config'


function EditPost() {
    let [post,setPost] = useState(null)
    let {url} = useParams()
    console.log('edit post url ',url);
    let navigate = useNavigate()
    
    useEffect(()=>{
        if (url) {
            appwriteService.getDocument(url).then((p)=>{
                console.log("log p ",p)
                setPost(p)
                console.log("post get ",post);

        })
        }
        else{
            navigate("/")
        }
        console.log('post update', appwriteService.getDocument(url).then((p)=>p));
    },[url,navigate])
    console.log("after post ",post);
  return post ? (
    <div>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost