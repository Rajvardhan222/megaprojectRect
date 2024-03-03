import React from 'react';
import Logo from '../logo/Logo';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Logoutbtn from '../logout/Logoutbtn';

function Header() {
    let navigator = useNavigate()
        let status = useSelector((storage)=>storage.user.isUserLoggedIn);
        let navData = [
            {
                name:"Home",
                url:"/",
                isActive:true
            },
            {
                name:"Login",
                url:"/login",
                isActive:!status
            },
            {
                name:"SignUP",
                url:"/signup",
                isActive:!status
            },
            {
                name:"All Post",
                url:"/all-post",
                isActive:status
            },
            {
                name:"Add Post",
                url:"/add-post",
                isActive:status
            },{
                name: "My Posts",
                url:"/my-posts",
                isActive:status
            }
        ]
    return (
        <div>
            <div className='flex flex-row justify-between bg-slate-300 mb-2 min-h-16 items-center rounded-md min-w-full'>
                
                {/* //first div */}
                <div>
                <Logo/>
                </div>
            {/* Second div */}

                <div>
                    <ul className='flex flex-row '>

                {
                    navData.map((item)=>(
                       
                      item.isActive ?  (<li key={item.name}>
                        <button
                        onClick={() => navigator(item.url)}
                        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                        >{item.name}</button>
                      </li>) : null
                      

                    ))
                }

                {
                    status && <Logoutbtn/>
                }
                </ul>

                </div>

                {/* THird div */}
                <div>

                </div>

            </div>
        </div>
    );
}

export default Header;