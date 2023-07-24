import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Profile = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const { user } = useContext(AuthContext);

     const [data,setData]=useState()

    useEffect(() => {


        fetch(`https://booking-college-server-side.vercel.app/allUsers?email=${user?.email}`)
            .then(a => a.json())
            .then(a => setData(a))
            .catch(error => console.log(error))
    }, [user]);


    console.log(data)

    const onSubmit = data => {

        console.log(data)

        fetch(`https://booking-college-server-side.vercel.app/updateUser?email=${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((res) => {

                

                if (res?.modifiedCount >0) {

                    

                    console.log(res)
                    reset();
                    window.location.reload()

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

            <section style={{ boxShadow: '-10px 10px 10px black,10px -10px 10px black' }} className=' lg:w-[50%] md:w-[50%] mx-auto p-10 rounded-[30px] space-y-5'>
                <form onSubmit={handleSubmit(onSubmit)}  >

                    <h2 className=" text-[40px] font-[500] text-center my-[50px]  ">Profile</h2>


                    <div className="  my-5">
                        <p className="my-2">
                            <span className="font-[500] text-[17px] ">Name</span>
                        </p>
                        <input type="text" placeholder={data?.name}  {...register("name", { required: true })} className="input input-bordered w-full" />

                        {errors.name && <p className=' text-red-500 my-3' >name is required</p>}
                    </div>

                    <div className=" my-5">
                        <p className="  my-2">
                            <span className="font-[500] text-[17px]  ">Email</span>
                        </p>
                        <input type="email" placeholder="email" value={data?.email} {...register("email")} className="input input-bordered w-full" />

                        {errors.email && <p className=' text-red-500 my-3' >email is required</p>}
                    </div>



                    <div className="t my-5">
                        <p className="  my-2">
                            <span className="font-[500] text-[17px]  ">University</span>
                        </p>
                        <input type="text" placeholder={data?.university}  {...register("university", { required: true })} className="input input-bordered w-full" />
                        {errors.university && <p className=' text-red-500 my-3' >university is required</p>}
                    </div>


                    <div className=" my-5">
                        <p className=" my-2">
                            <span className="font-[500] text-[17px]  ">Address</span>
                        </p>
                        <input type="text" placeholder={data?.address} {...register("address", { required: true })} className="input input-bordered w-full" />

                        {errors.address && <p className=' text-red-500 my-3' >address is required</p>}
                    </div>








                    <input className='btn bg-red-500 text-white' type="submit" />
                </form>

                <ToastContainer />

            </section>

        </div>
    );
};

export default Profile;