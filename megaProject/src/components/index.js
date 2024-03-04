import React from 'react'
import InpurForm from './inputForm/InpurForm'
import {useForm} from "react-hook-form"
import authservice from '../appwrite/user'
import Button from "./button/Button"
import {login} from "../store/authSlices"
import {useDispatch} from "react-redux"
import { useRef } from 'react'
// import { service } from 'appwrite/types/service'
import { useNavigate } from 'react-router-dom'
import Logo from './logo/Logo'

import Container from './container/Container'
import Home from '../pages/Home'
import Login from '../pages/Login'
import AddPost from '../pages/AddPost'
import ALlPost from '../pages/AllPost'
import Post from '../pages/Post'
import Signup from '../pages/Signup'
import Card from './card/Card'
import PostForm from './PostForm'
import SignUP from './loginForm/signUp/SignUP'
import LoginForm from './loginForm/LoginForm'
import Procted from './Procted'
import RTE from './RTE'



export {React,InpurForm,useForm,useDispatch,authservice,Button,login,useRef,useNavigate,Logo,Container,Home,Login,ALlPost,Post,Signup,AddPost,Card,PostForm,SignUP,LoginForm,Procted,RTE}