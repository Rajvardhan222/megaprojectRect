import { Provider, useDispatch } from "react-redux";
import "./App.css";
import store from "./store/store";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";
import user from "./appwrite/user"
import authservice from "./appwrite/user"
import { logOut,login } from "./store/authSlices";
import Loding from "./components/loding/Loding";
import Container from "./components/container/Container";
import { Outlet } from "react-router-dom";

function App() {

    let [isloggedIn,setisloggedIn] = useState(false)
    let [loding,setLoding] = useState(true)

    let dispatch = useDispatch();

    useEffect(()=>{
let user = authservice.getCurrentUser()
.then((userDetail)=>{
        if(userDetail){
          dispatch(login({userDetail}))
          setisloggedIn(true)
        }
        else{
          dispatch(logOut())
          setisloggedIn(false)
        }
})

.finally(()=>{
  setLoding(false)
})

    },[])

    return !loding ? (
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block'>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    ) : null
  
}

export default App;
