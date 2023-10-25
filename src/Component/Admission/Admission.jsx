import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admission = () => {

    const { user } = useContext(AuthContext)

    const [data, setData] = useState([]);

    const [singleData, setSingleData] = useState({})


    const name = useRef();
    const email = useRef();
    const birth = useRef();
    const address = useRef();
    const subject = useRef();
    const number = useRef();
    const image = useRef();

    useEffect(() => {

        fetch('https://booking-college-server-side.vercel.app/allCollages')
            .then(a => a.json())
            .then(a => setData(a))
            .catch(error => console.log(error))
    }, [])

    console.log(singleData)

    const submitForm = () => {


        if (!name.current.value) {

            return toast.error("Name in missing")
        }
        else if (!email.current.value) {
            return toast.error("email in missing")
        }
        else if (!birth.current.value) {
            return toast.error("birth in missing")
        }
        else if (!address.current.value) {
            return toast.error("address in missing")
        }
        else if (!subject.current.value) {
            return toast.error("subject in missing")
        }
        else if (!number.current.value) {
            return toast.error("number in missing")
        }
        else if (!image.current.value) {
            return toast.error("image in missing")
        }

        const info = {
            name: name.current.value,
            email: email.current.value,
            birth: birth.current.value,
            address: address.current.value,
            subject: subject.current.value,
            number: number.current.value,
            image: image.current.value,
            collegeDetails: singleData,
            loginEmail: user?.email
        }



        fetch("https://booking-college-server-side.vercel.app/admissionData", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then((res) => {

                if (res) {

                    toast.success("submit done")

                    console.log(res)

                }


            })
            .catch(error => {
                console.log(error)
                toast.error(error.message)
            })

        console.log(info)
    }


    const singleDataHandler = (d) => {

        if (!user?.email) {
            return toast.error("please login")
        }

        window.my_modal_4.showModal()

        setSingleData(d)

    }

    return (
        <div className=" w-[90%] mx-auto">
            <section className=" py-[100px]">
                <h2 className=" text-[40px] font-[500] text-center my-[50px] ">Admission colleges</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-10 ">



                    {
                        data.map((a, index) => <div key={index} >



                           

                            <div className="absolute inset-0 bg-center dark:bg-black"></div>
                            <div onClick={() => {


                                singleDataHandler(a)

                            }} className="group relative m-0 flex h-72 cursor-pointer  rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                                <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                                    <img
                                        src={a?.img}
                                        className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                                        alt=""
                                    />
                                </div>
                                <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                                    <h1 className="font-serif text-2xl font-bold text-white shadow-xl">{a?.name}</h1>
                                    <h1 className="text-sm font-light text-gray-200 shadow-xl">Click it</h1>
                                </div>
                            </div>


                        </div>)
                    }

                </div>
                <ToastContainer />
            </section>


            {/* You can open the modal using ID.showModal() method */}

            <dialog  id="my_modal_4" className="modal ">
                <form  method="dialog" className="modal-box w-11/12 max-w-5xl  bg-slate-700 border border-white  ">

                    <section className="grid md:grid-cols-3 lg:grid-cols-3 ">

                        <div className=" text-center my-5">
                            <p className="text-center my-2">
                                <span className="font-[500] text-[17px] ">Candidate name</span>
                            </p>
                            <input type="text" placeholder="name" ref={name} className="input input-bordered text-black" />
                        </div>

                        <div className="text-center my-5">
                            <p className=" text-center my-2">
                                <span className="font-[500] text-[17px]  ">Candidate email</span>
                            </p>
                            <input type="text" placeholder="email" ref={email} className="input input-bordered text-black" />
                        </div>

                        <div className="text-center my-5">
                            <p className=" text-center my-2">
                                <span className="font-[500] text-[17px]  ">Candidate date of birth</span>
                            </p>
                            <input type="text" placeholder="date of birth" ref={birth} className="input input-bordered text-black" />
                        </div>


                        <div className="text-center my-5">
                            <p className=" text-center my-2">
                                <span className="font-[500] text-[17px]  ">Candidate address</span>
                            </p>
                            <input type="text" placeholder="address" ref={address} className="input input-bordered text-black" />
                        </div>

                        <div className="text-center my-5">
                            <p className=" text-center my-2">
                                <span className="font-[500] text-[17px]  ">Candidate subject</span>
                            </p>
                            <input type="text" placeholder="subject" ref={subject} className="input input-bordered text-black" />
                        </div>

                        <div className="text-center my-5">
                            <p className=" text-center my-2">
                                <span className="font-[500] text-[17px] ">Candidate number</span>
                            </p>
                            <input type="text" placeholder="number" ref={number} className="input input-bordered text-black" />
                        </div>

                        <div className="text-center my-5">
                            <p className=" text-center my-2">
                                <span className="font-[500] text-[17px]  ">Candidate image</span>
                            </p>
                            <input type="text" placeholder="image" ref={image} className="input input-bordered text-black" />
                        </div>


                    </section>


                    <div className="modal-action">
                        {/* if there is a button, it will close the modal */}
                        <button onClick={submitForm} className="p-3 rounded-md bg-blue-500 text-white">Submit</button>

                        <button className=" p-3 rounded-md bg-red-500 text-white">Close</button>

                    </div>

                    <div>

                    </div>
                </form>
            </dialog>

        </div>
    );
};

export default Admission;