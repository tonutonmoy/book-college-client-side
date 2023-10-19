
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

            <section style={{ boxShadow: '-10px 10px 10px black,10px -10px 10px black' }} className='  md:w-[50%] lg:w-[50%] mx-auto p-10 rounded-[30px] space-y-5'>
                <form onSubmit={onSubmit}  >

                    <h2 className=" text-[40px] font-[500] text-center my-[50px]  ">Login</h2>




                    <div className=" my-5">
                        <p className="  my-2">
                            <span className="font-[500] text-[17px]  ">Email</span>
                        </p>
                        <input type="email" ref={email} name='email' placeholder="email"className="input input-bordered w-full" required />

                       
                    </div>

                    <div className="my-5">
                        <p className="  my-2">
                            <span className="font-[500] text-[17px]  ">Password</span>
                        </p>
                        <input type="password" placeholder="password" name='password' className="input input-bordered w-full" required />

                       
                    </div>


                 


                    <p className='my-3'> All ready account? <Link className=' text-orange-400' to='/registration'>please register </Link> </p>





                    <input className='btn bg-red-500 text-white' type="submit" />
                </form>

                <div className="divider my-8 ">OR</div>

                <div className='mx-8'>
                    <button onClick={googleHandler} className='btn  from-white mb-10 w-full'>
                        <BsGoogle className=' text-[30px] ' />
                    </button>

                </div>

                <div className='mx-8'>
                    <button onClick={facebookHandler} className='btn  from-white mb-10 w-full'>
                        <BsFacebook className=' text-[30px] ' />
                    </button>

                </div>
                <button onClick={resetPasswordHandler} className='my-3 text-red-500'> Reset password</button>

            </section>
            <ToastContainer />

        </div>
    );
};

export default Login;