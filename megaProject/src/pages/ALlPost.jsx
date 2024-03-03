import React from 'react'
import { useEffect,useState } from 'react'
import {Container} from "../components/index"
import appwriteService from '../appwrite/config'
import {Card as PostCard} from '../components/index'
import { ID } from 'appwrite'
import { useSelector ,useDispatch} from 'react-redux'
import {posts as allposts} from '../store/authSlices'
import Select from '../components/select/Select'
import { useForm } from '../components/index'
import { Query } from 'appwrite'

function ALlPost() {
    let sorting
    let [posts,setPosts] = useState([])
    let selector = useSelector(store => store.user.posts)
    let dispatch = useDispatch()
    useEffect(()=>{
        let initQuery
       let item = localStorage.getItem('sort')
        if(item === "Newest")  initQuery =  [ Query.equal("status","active"),
        Query.orderAsc("date")]
        if(item === "Oldest") initQuery =  [ Query.equal("status","active"),
        Query.orderDesc("date")]
        setValue('sort', item)
     posts.length === 0 &&   appwriteService.getDocuments(initQuery)
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
     sorting = localStorage.getItem('sort')
    },[])
    let {register,handleSubmit,getValues,setValue} = useForm()
    let SortBy =['Newest','Oldest']
    let submit = (data)=>{
        console.log(data);
       

        
        let query
        if(data.sort == 'Newest'){
             query = [ Query.equal("status","active"),
        Query.orderAsc("date")]
        }
        if(data.sort == 'Oldest'){
            query = [ Query.equal("status","active"),
        Query.orderDesc("date")]
        }
        appwriteService.getDocuments(query)
        .then((posts)=> {
            console.log(posts);
            if (posts) {
                setPosts(posts.documents)
                dispatch(allposts(posts.documents))

            }
    })
        console.log('this');
        localStorage.setItem('sort', data.sort);
    }
  return (
    <div className='w-full py-8'>
        <Container>

            <div className='w-full'>
                <form onChange={handleSubmit(submit)}>
                <Select  
                options={SortBy}
                label ={"sort-by"}
                className ={'w-32 '}
                {...register("sort", { required: true })}
                // onSelect={() => handleSubmit(submit)} 
                />
                </form>
            </div>

            <div key={ID.unique()} className='flex flex-wrap'>  {posts.map((post,index)=>(
                <div className='p-2 w-1/4'> <PostCard  {...post}/> </div>
            ))}
            </div>
          
        </Container>
    </div>
  )
}

export default ALlPost