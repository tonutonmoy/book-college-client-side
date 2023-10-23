import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import UseSingleUser from '../../Hooks/useSingleUser';



const Profile = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const { user } = useContext(AuthContext);

   
    const [data,profileRefetch]=UseSingleUser(user?.email)

    

    const onSubmit = info => {

        console.log(info)

        const {address,email,university,name}=info;

        
      const allInfo ={
        name:name|| data?.name,
        email:email||data?.email,
        address:address|| data?.address,
        university:university || data?.university
      }
        fetch(`https://booking-college-server-side.vercel.app/updateUser?email=${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(allInfo)
        })
            .then(res => res.json())
            .then((res) => {

                

                if (res.modifiedCount>0) {

                    

                    console.log(res)
                    reset();
                    profileRefetch()

                    toast.success("Update done")
                }


            })
            .catch(error => {
                console.log(error)
                toast.error(error.message)
            })



        reset()
    }

    return (
        <div className='w-[90%] mx-auto py-[150px]'>

            <section  className=' lg:w-[50%] md:w-[50%] mx-auto p-10 rounded-[30px] bg-gray-700/50 border space-y-5 shadow-md shadow-gray-700'>
                <form onSubmit={handleSubmit(onSubmit)}  >

                    <h2 className=" text-[40px] font-[500] text-center my-[50px]  ">Profile</h2>


                    <div className="  my-5">
                        <p className="my-2">
                            <span className="font-[500] text-[17px] ">Name</span>
                        </p>
                        <input type="text" placeholder={data?.name}  {...register("name", )} className="input input-bordered w-full text-gray-900" />

                        {errors.name && <p className=' text-red-500 my-3' >name is required</p>}
                    </div>

                    <div className=" my-5">
                        <p className="  my-2">
                            <span className="font-[500] text-[17px]  ">Email</span>
                        </p>
                        <input type="email" placeholder="email" value={data?.email} {...register("email")} className="input input-bordered w-full text-gray-900" />

                        {errors.email && <p className=' text-red-500 my-3' >email is required</p>}
                    </div>



                    <div className="t my-5">
                        <p className="  my-2">
                            <span className="font-[500] text-[17px]  ">University</span>
                        </p>
                        <input type="text" placeholder={data?.university}  {...register("university", )} className="input input-bordered w-full text-gray-900" />
                        {errors.university && <p className=' text-red-500 my-3' >university is required</p>}
                    </div>


                    <div className=" my-5">
                        <p className=" my-2">
                            <span className="font-[500] text-[17px]  ">Address</span>
                        </p>
                        <input type="text" placeholder={data?.address} {...register("address", )} className="input input-bordered w-full text-gray-900" />

                        {errors.address && <p className=' text-red-500 my-3' >address is required</p>}
                    </div>








                    <button className=' font-[500] px-[10px] py-2 border rounded-2xl bg-red-500 text-white' type="submit" > Submit</button>
                </form>

                <ToastContainer />

            </section>

        </div>
        
    );
};

export default Profile;