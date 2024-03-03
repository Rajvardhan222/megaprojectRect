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

function MyPost() {
    let sorting
    let [posts,setPosts] = useState([])
    let selector = useSelector(store => store.user.posts)
    let data = useSelector(store => store.user.userDetail)
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
               let mypost = posts.documents.filter(doc => doc.user_Id === data.$id)
               setPosts(mypost)
               console.log(mypost);
                
                dispatch(allposts(mypost));

            }
    })

    // store fetch

    // let AllPost = selector(store => store.user.posts)
   
     sorting = localStorage.getItem('sort')
    },[])
    let {register,handleSubmit,setValue} = useForm()
    let SortBy =['Newest','Oldest']
    let submit = (value) => {
        console.log(value);
    
        let query;
        if (value.sort == 'Newest') {
            query = [Query.equal("status", "active"), Query.orderAsc("date")];
        }
        if (value.sort == 'Oldest') {
            query = [Query.equal("status", "active"), Query.orderDesc("date")];
        }
        appwriteService.getDocuments(query)
            .then((posts) => {
                console.log(posts);
                if (posts) {
                    console.log(value.$id);
                    let mypostx = posts.documents.filter(doc => doc.user_Id == data.$id)
                    setPosts(mypostx)
                    console.log(mypostx);
    
                    dispatch(allposts(mypostx));
                }
            })
        console.log('this');
        localStorage.setItem('sort', value.sort);
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

export default MyPost