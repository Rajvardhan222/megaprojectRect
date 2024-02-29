import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import Procted from './components/Procted.jsx'
import Login from './components/pages/Login.jsx'
import Signup from './components/pages/Signup.jsx'
import ALlPosts from './components/pages/ALlPost.jsx'
import AddPost from './components/pages/AddPost.jsx'
import EditPost from './components/pages/EditPost.jsx'
import Post from './components/pages/Post.jsx'

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
                path: "/all-posts",
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
              
            ]
        }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
