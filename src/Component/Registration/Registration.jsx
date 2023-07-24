import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { BsGoogle, BsFacebook } from 'react-icons/bs';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const { createUser, updateUserProfile, googleLogin,facebookLogin } = useContext(AuthContext)

    const onSubmit = data => {

        console.log(data)


        createUser(data.email, data.password)
            .then(a => {


                updateUserProfile(data.name)
                    .then(() => {

                        fetch("https://booking-college-server-side.vercel.app/allUsers", {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },

                            body: JSON.stringify(data)
                        })
                            .then(res => res.json())
                            .then((res) => {

                                if (res?.insertedId) {

                                    toast.success("Registration done")

                                    console.log(res)
                                    reset()
                                    window.location.reload()
                                }


                            })
                            .catch(error => {
                                console.log(error)
                                toast.error(error.message)
                            })


                    })
                    .catch(error => {
                        toast.error(error.message)
                        console.log(error)
                    })


                console.log(a)
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

                        if (res?.insertedId) {

                            toast.success("Registration done")

                            console.log(res)
                            window.location.reload()
                            
                        }
                        else if (res?.message) {

                            toast.success('Registration done')

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

                   if (res?.insertedId) {

                       toast.success("Registration done")

                       console.log(res)
                       window.location.reload()
                       
                   }
                   else if (res?.message) {

                       toast.success('Registration done')

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



    return (
        <div className='w-[90%] mx-auto py-[150px]'>

            <section style={{ boxShadow: '-10px 10px 10px black,10px -10px 10px black' }} className='  md:w-[50%] lg:w-[50%] mx-auto p-10 rounded-[30px] space-y-5'>
                <form onSubmit={handleSubmit(onSubmit)}  >

                    <h2 className=" text-[40px] font-[500] text-center my-[50px]  ">Registration</h2>


                    <div className="  my-5">
                        <p className="my-2">
                            <span className="font-[500] text-[17px] ">Name</span>
                        </p>
                        <input type="text" placeholder="name"  {...register("name", { required: true })} className="input input-bordered w-full" />

                        {errors.name && <p className=' text-red-500 my-3' >name is required</p>}
                    </div>

                    <div className=" my-5">
                        <p className="  my-2">
                            <span className="font-[500] text-[17px]  ">Email</span>
                        </p>
                        <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered w-full" />

                        {errors.email && <p className=' text-red-500 my-3' >email is required</p>}
                    </div>

                    <div className="my-5">
                        <p className="  my-2">
                            <span className="font-[500] text-[17px]  ">Password</span>
                        </p>
                        <input type="password" placeholder="password" {...register("password", { required: true })} className="input input-bordered w-full" />

                        {errors.password && <p className=' text-red-500 my-3' >password is required</p>}
                    </div>

                    <div className="t my-5">
                        <p className="  my-2">
                            <span className="font-[500] text-[17px]  ">University</span>
                        </p>
                        <input type="text" placeholder="date of birth" {...register("university", { required: true })} className="input input-bordered w-full" />
                        {errors.university && <p className=' text-red-500 my-3' >university is required</p>}
                    </div>


                    <div className=" my-5">
                        <p className=" my-2">
                            <span className="font-[500] text-[17px]  ">Address</span>
                        </p>
                        <input type="text" placeholder="address" {...register("address", { required: true })} className="input input-bordered w-full" />

                        {errors.address && <p className=' text-red-500 my-3' >address is required</p>}
                    </div>





                    <p className='my-3'> All ready account? <Link className=' text-orange-400' to='/login'>please login </Link> </p>





                    <input className='btn bg-red-500 text-white' type="submit" />
                </form>

                <div className="divider my-8">OR</div>

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

            </section>
            <ToastContainer />
        </div>
    );

};

export default Registration;