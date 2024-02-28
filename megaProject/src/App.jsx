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

  return (
   
     
      <Container>
        <Header/>
        {/* {Outlet} */}
        <Footer/>
      </Container>
     
    
  );
}

export default App;
