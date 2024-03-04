import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Procted from './components/Procted.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import ALlPosts from './pages/ALlPost.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
import MyPost from './pages/MyPost.jsx'
import DisplayName from './pages/DisplayName.jsx'
let router = createBrowserRouter([
        {   path:'/',
            element:<App/>,
            children:[
              
                {
                  path: "/",
                  element: <Home />,
              },
              {
                  path: "/login",
                  element: (
                      <Procted authincated={false}>
                          <Login />
                      </Procted>
                  ),
              },
              {
                path: "/signup",
                element: (
                    <Procted authincated={false}>
                        <Signup />
                    </Procted>
                ),
            },
            {
                path: "/all-post",
                element: (
                    <Procted authincated>
                        {" "}
                        <ALlPosts />
                    </Procted>
                ),
            },
            {
                path: "/add-post",
                element: (
                    <Procted authincated>
                        {" "}
                        <AddPost />
                    </Procted>
                ),
            },
            {
                path: "/edit-post/:url",
                element: (
                    <Procted authincated>
                        {" "}
                        <EditPost />
                    </Procted>
                ),
            },
            {
                path: "/post/:url",
                element: <Post />,
            },
            {
                path: '/my-posts',
                element : <MyPost/>
            },
            {
                path : '/display',
                element : <DisplayName />,
            }
              
            ]
        }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
)
