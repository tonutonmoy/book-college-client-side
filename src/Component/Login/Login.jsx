
import { Link, useNavigate } from 'react-router-dom';
import { BsGoogle, BsFacebook } from 'react-icons/bs';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useRef } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

  const navigate=useNavigate()
    
    const { login, googleLogin,resetPassword,facebookLogin } = useContext(AuthContext);

    const email = useRef();
    const onSubmit = (e) => {
console.log('hello')
        event.preventDefault()

        const email=e.target.email.value
        const password=e.target.password.value

        console.log(email,password)

        login(email,password)
            .then(a => {
                toast.success("Login done")
                console.log(a)

                e.target.reset()
                navigate('/')
               

            })
            .catch(error => {
                console.log(error)
                toast.error(error.message)
            })


    }





    const googleHandler = () => {

        googleLogin()
            .then((a) => {
                const name=a?.user?.displayName;
                const email=a?.user?.email;

                console.log(a)

                fetch("https://booking-college-server-side.vercel.app/allUsers", {
                   method: 'POST',
                   headers: {
                       'content-type': 'application/json'
                   },

                   body: JSON.stringify({name,email})
               })
                   .then(res => res.json())
                   .then((res) => {

                       if (res) {

                           toast.success("login done")

                           console.log(res)
                           navigate('/')
                           
                       }
                       else if (res?.message) {

                           toast.success('login done')

                           console.log(res.message)
                           
                       }


                   })
                   .catch(error => {
                       console.log(error)
                       toast.error(error?.message)
                   })


            })
            .catch(error => {
                console.log(error)
                toast.error(error.message)
            })

    }

    const facebookHandler = () => {


        facebookLogin()
        .then((a) => {

            const name=a?.user?.displayName;
            const email=a?.user?.email;

            console.log(a)

            fetch("https://booking-college-server-side.vercel.app/allUsers", {
               method: 'POST',
               headers: {
                   'content-type': 'application/json'
               },

               body: JSON.stringify({name,email})
           })
               .then(res => res.json())
               .then((res) => {

                   if (res) {

                       toast.success("login done")

                       console.log(res)
                       navigate('/')
                       
                   }
                   else if (res?.message) {

                       toast.success('login done')

                       console.log(res?.message)
                       
                   }


               })
               .catch(error => {
                   console.log(error)
                   toast.error(error.message)
               })


           

       })
       .catch(error => {
           console.log(error)
           toast.error(error.message)
       })
        
    }

    const resetPasswordHandler = () => {

       console.log()
        resetPassword(email.current.value)
        .then(() => {
            toast.success("Please check your Email")
            

        })
        .catch(error => {
            console.log(error)
            toast.error(error.message)
        })



    }


    return (
        <div className='w-[90%] mx-auto py-[150px]'>

    
                <section className="">
      <div className="w-full lg:w-4/12 px-4 mx-auto pt-6 ">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg  bg-gray-700/70  ">
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center mb-3">
              <h6 className="text-blueGray-500 text-sm font-bold">Sign in with</h6>
            </div>
            <div className="btn-wrapper text-center">
              <button onClick={facebookHandler}  className="bg-red-500 active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                
                <BsFacebook className=' text-[20px]  ' />
              </button>
              <button onClick={googleHandler}  className="bg-red-500 active-bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
              <BsGoogle className=' text-[20px]  ' />
              </button>
            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div className="text-blueGray-400 text-center mb-3 font-bold">
              <small>Or sign in with credentials</small>
            </div>
            <form onSubmit={onSubmit} >
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">Email</label>
                
                <input type="email" ref={email} name='email' placeholder="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-gray-900" required />
              </div>
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">Password</label>
               
                <input type="password" placeholder="password" name='password' className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-gray-900" required />
              </div>
              <div>
             
              <p className='my-3 text-[12px] md:text-[12px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px]'> All ready account? <Link className=' text-orange-400' to='/registration'>please register </Link> </p>
              </div>
              <div className="text-center mt-6">
                <button className="bg-red-500 text-white active-bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150">Sign In</button>
              </div>
            </form>
            <button onClick={resetPasswordHandler} className='my-3 text-red-500 text-[13px] md:text-[13px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]'> Reset password</button>
          </div>
        </div>
      </div>
     
    </section>
            <ToastContainer />

        </div>
    );
};

export default Login;