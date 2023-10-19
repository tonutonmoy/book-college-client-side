import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseSingleUser from "../../Hooks/useSingleUser";


const Navbar = () => {


   
    const { user, setCollegeData, logOut } = useContext(AuthContext);

    const navigate = useNavigate()
    const [data,profileRefetch]=UseSingleUser(user?.email)

    profileRefetch()
  


    const search = (e) => {
        event.preventDefault();
        const value = e.target.search.value;

        console.log(value)


        fetch(`https://booking-college-server-side.vercel.app/singleCollage/${value}`)
            .then(a => a.json())
            .then(a => {
                console.log(a)
                setCollegeData(a)
            })
            .catch(error => console.log(error))


    };


    const loginHandler = () => {
        navigate('/login')
    }

    const logOutHandler = () => {
        logOut()
            .then(() => {

                window.location.reload()
                toast.success("logOut done")
            })
            .catch((error) => console.log(error))
    }




    const listItem = <>

        <Link className="md:mx-5 font-[500] text-[17px] mt-3 md:text-white" to='/'>Home</Link>
        <Link className="md:mx-5 font-[500] text-[17px] mt-3 md:text-white" to='college'>College</Link>
        <Link className="md:mx-5 font-[500] text-[17px] mt-3 md:text-white" to='admission'>Admission</Link>
       {
        user &&  <Link className="mx-10 font-[500] text-[17px] mt-3 text-white " to='myCollege'>My College</Link>
       }
       { user &&  <Link className="mx-10 font-[500] text-[17px] mt-3 text-white " to='profile'>My Profile</Link>
       }

        {

            user?.email ? <button onClick={logOutHandler} className=" p-[10px]   md:mr-10 rounded-[10px] text-[15px] text-white bg-red-900 font-semibold ml-2  
            ">logout</button>

                : <button onClick={loginHandler} className="p-[10px] md:mr-10 mt-5 md:mt-0 rounded-[10px] text-[15px] text-white bg-blue-500 font-semibold ml-2 " to='login'>login</button>



        }


        <form className="md:my-0 my-10" onSubmit={search}>
            <input type="text" placeholder="Search" name="search" required className="input input-bordered w-24 md:w-auto" />
            <button className=" p-[10px] rounded-[10px] text-[15px] text-white font-semibold ml-2 
            bg-gradient-to-r from-gray-700 via-gray-900 to-black">Search</button>
        </form>

    </>
    return (
        <div className="navbar   mx-auto  fixed bg-black/50 z-10 ">
            <div className="navbar-start w-[90%] ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>



                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex  items-center
      
      ">
                        {
                            listItem
                        }



                    </ul>
                </div>


                <Link  to='/profile' >
                    <span className="text-[20px] md:ml-[50px] font-[500] 
                  text-transparent  bg-clip-text bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900
                    ">{data?.name}</span>
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 ">
                    {
                        listItem
                    }

                </ul>




            </div>
            <div className="navbar-end">

                <ToastContainer />



            </div>
        </div>
    );
};

export default Navbar;