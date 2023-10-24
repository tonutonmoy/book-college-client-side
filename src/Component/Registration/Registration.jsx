import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { BsGoogle, BsFacebook } from 'react-icons/bs';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const { createUser, updateUserProfile, googleLogin, facebookLogin } = useContext(AuthContext)

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

                                if (res) {

                                    toast.success("Registration done")

                                    console.log(res)
                                    reset()

                                    navigate('/')
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

                const name = a?.user?.displayName;
                const email = a?.user?.email;

                console.log(a)

                fetch("https://booking-college-server-side.vercel.app/allUsers", {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },

                    body: JSON.stringify({ name, email })
                })
                    .then(res => res.json())
                    .then((res) => {

                        if (res) {

                            toast.success("Registration done")

                            console.log(res)
                            navigate('/')

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

                const name = a?.user?.displayName;
                const email = a?.user?.email;

                console.log(a)

                fetch("https://booking-college-server-side.vercel.app/allUsers", {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },

                    body: JSON.stringify({ name, email })
                })
                    .then(res => res.json())
                    .then((res) => {

                        if (res) {

                            toast.success("Registration done")

                            console.log(res)
                            navigate('/')

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

            {/* <section style={{ boxShadow: '-10px 10px 10px black,10px -10px 10px black' }} className='  md:w-[50%] lg:w-[50%] mx-auto p-10 rounded-[30px] space-y-5'>
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

            </section> */}
            <section className="">
                <div className="w-full lg:w-4/12 px-4 mx-auto pt-6 ">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg  bg-gray-700/70  ">
                        <div className="rounded-t mb-0 px-6 py-6">
                            <div className="text-center mb-3">
                                <h6 className="text-blueGray-500 text-sm font-bold">Sign in with</h6>
                            </div>
                            <div className="btn-wrapper text-center">
                                <button onClick={facebookHandler} className="bg-red-500 active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">

                                    <BsFacebook className=' text-[20px]  ' />
                                </button>
                                <button onClick={googleHandler} className="bg-red-500 active-bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                                    <BsGoogle className=' text-[20px]  ' />
                                </button>
                            </div>
                            <hr className="mt-6 border-b-1 border-blueGray-300" />
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <div className="text-blueGray-400 text-center mb-3 font-bold">
                                <small>Or sign in with credentials</small>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}  >
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">Name</label>
                                    <input type="text" placeholder="name"  {...register("name", { required: true })} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-gray-900" />

                                    {errors.name && <p className=' text-red-500 my-3' >name is required</p>}

                                </div>
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">Email</label>
                                    <input type="email" placeholder="email" {...register("email", { required: true })} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-gray-900" />

                                    {errors.email && <p className=' text-red-500 my-3' >email is required</p>}

                                </div>
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">Password</label>
                                    <input type="password" placeholder="password" {...register("password", { required: true })} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-gray-900" />

                                    {errors.password && <p className=' text-red-500 my-3' >password is required</p>}

                                </div>
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">University</label>
                                    <input type="text" placeholder="date of birth" {...register("university", { required: true })} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-gray-900" />
                                    {errors.university && <p className=' text-red-500 my-3' >university is required</p>}

                                </div>
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">Address</label>

                                    <input type="text" placeholder="address" {...register("address", { required: true })} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-gray-900" />

                                    {errors.address && <p className=' text-red-500 my-3' >address is required</p>}



                                </div>
                                <div>

                                <p className='my-3 text-[12px] md:text-[12px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px]'> All ready account? <Link className=' text-orange-400' to='/login'>please login </Link> </p>
                                </div>
                                <div className="text-center mt-6">
                                    <button className="bg-red-500 text-white active-bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150">Sign In</button>
                                </div>
                            </form>
                         
                        </div>
                    </div>
                </div>

            </section>
            <ToastContainer />
        </div>
    );

};

export default Registration;