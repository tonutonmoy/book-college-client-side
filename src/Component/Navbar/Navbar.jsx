import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseSingleUser from "../../Hooks/useSingleUser";


import './Navbar.css'
import SearchBar from "./SearchBar";

const Navbar = () => {
    const { user, logOut, mode,handleCheckboxChange } = useContext(AuthContext);
    const navigate = useNavigate();
    const [data, profileRefetch] = UseSingleUser(user?.email);

    profileRefetch();




    const loginHandler = () => {
        navigate("/login");
    };

    const logOutHandler = () => {
        logOut()
            .then(() => {
                window.location.reload();
                toast.success("Logout done");
            })
            .catch((error) => console.log(error));
    };

    


    const listItem = (
        <>
            <div className="autosuggest-container mt-2">

                <SearchBar />










            </div>
            <Link className="md:mx-5 font-[500] text-[17px] mt-3 md:text-white" to='/'>Home</Link>
            <Link className="md:mx-5 font-[500] text-[17px] mt-3 md:text-white" to='college'>College</Link>
            <Link className="md:mx-5 font-[500] text-[17px] mt-3 md:text-white" to='admission'>Admission</Link>
            {user && (
                <>
                    <Link className="mx-10 font-[500] text-[17px] mt-3 text-white" to='myCollege'>My College</Link>
                    <Link className="mx-10 font-[500] text-[17px] mt-3 text-white" to='profile'>My Profile</Link>
                </>
            )}
            {user?.email ? (
                <button onClick={logOutHandler} className=" px-[20px]  hover:bg-red-600 bg-red-500 font-[500] rounded-md">Logout</button>
            ) : (
                <button onClick={loginHandler} className="p-[10px] md:mr-10 mt-5 md:mt-0 rounded-[10px] text-[15px] text-white bg-gray-900 font-semibold ml-2" to='login'>Login</button>
            )}

           {/* ---------------------------------- */}
    <div className=" flex  items-center ml-10">
        
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer mt-10"
        checked={mode}
        onChange={handleCheckboxChange}
      />
      <div className="w-11 h-6 bg-gray-500 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-500">
      </div>
     
    </label>
    </div>

        </>
    );

    return (
        <div className={`navbar mx-auto fixed ${mode?'bg-black/30 border-b-[1px]': 'bg-slate-700'}  z-30   `}>
            <div className="navbar-start w-[90%] ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 flex items-center bg-slate-700 space-y-4  ">
                        {listItem}
                    </ul>
                </div>
                <Link to='/profile'>
                    <span className="text-[20px] md:ml-[50px] font-[500] text-transparent bg-clip-text bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900">{data?.name}</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    {listItem}
                </ul>
            </div>
            <div className="navbar-end">


                <ToastContainer />
            </div>
        </div>
    );
};

export default Navbar;


