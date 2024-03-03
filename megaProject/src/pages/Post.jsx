import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../../src/appwrite/config";

import {Button} from "../components/index";
import {Container} from "../components/index";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { url } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.user.userDetail);
    let AllPost = useSelector(state => state.user.posts)

    const isAuthor = post && userData ? post.user_Id === userData.$id : false;

    useEffect(() => {
        if (url) {
           let currentPost =  AllPost?.find(post => post.$id === url)

           !currentPost && appwriteService.getDocument(url).then((post) => {
                if (post) setPost(post);
              
                else navigate("/");  console.log('post ',post);
                console.log("img  ",appwriteService.getFile(post.featuredImage));
            });

            setPost(currentPost)
        } else navigate("/");
    }, [url, navigate]);

    const deletePost = () => {
        appwriteService.deleteDocument(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                    </div>
            </Container>
        </div>
    ) : null;
}