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
                url:"/allPost",
                isActive:status
            },
            {
                name:"Add Post",
                url:"/addPost",
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
                    navData.map((nav)=>(
                       
                           nav.isActive === true ? <button
                           onClick={()=>navigator(nav.url)}
                           className='bg-green-200 text-black p-4'
                           >{nav.name}</button> : null
                      

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