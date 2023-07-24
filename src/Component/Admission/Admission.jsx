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

                if (res?.insertedId) {

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

                <div className="grid md:grid-cols-3 gap-10 ">



                    {
                        data.map((a, index) => <div key={index} >



                            <div className="card card-compact  bg-base-100 shadow-xl my-10 hover:scale-110 duration-[1s]
                            hover:bg-gradient-to-r from-gray-700 via-gray-900 to-black hover:text-white">

                                <div className="card-body">



                                    <button onClick={() => {


                                        singleDataHandler(a)

                                    }} className=" text-[17px] font-[500]">
                                        {a?.name}



                                    </button>




                                </div>
                            </div>


                        </div>)
                    }

                </div>
                <ToastContainer />
            </section>


            {/* You can open the modal using ID.showModal() method */}

            <dialog id="my_modal_4" className="modal">
                <form method="dialog" className="modal-box w-11/12 max-w-5xl  ">

                    <section className="grid md:grid-cols-3 lg:grid-cols-3 ">

                        <div className=" text-center my-5">
                            <p className="text-center my-2">
                                <span className="font-[500] text-[17px] ">Candidate name</span>
                            </p>
                            <input type="text" placeholder="name" ref={name} className="input input-bordered" />
                        </div>

                        <div className="text-center my-5">
                            <p className=" text-center my-2">
                                <span className="font-[500] text-[17px]  ">Candidate email</span>
                            </p>
                            <input type="text" placeholder="email" ref={email} className="input input-bordered" />
                        </div>

                        <div className="text-center my-5">
                            <p className=" text-center my-2">
                                <span className="font-[500] text-[17px]  ">Candidate date of birth</span>
                            </p>
                            <input type="text" placeholder="date of birth" ref={birth} className="input input-bordered" />
                        </div>


                        <div className="text-center my-5">
                            <p className=" text-center my-2">
                                <span className="font-[500] text-[17px]  ">Candidate address</span>
                            </p>
                            <input type="text" placeholder="address" ref={address} className="input input-bordered" />
                        </div>

                        <div className="text-center my-5">
                            <p className=" text-center my-2">
                                <span className="font-[500] text-[17px]  ">Candidate subject</span>
                            </p>
                            <input type="text" placeholder="subject" ref={subject} className="input input-bordered" />
                        </div>

                        <div className="text-center my-5">
                            <p className=" text-center my-2">
                                <span className="font-[500] text-[17px] ">Candidate number</span>
                            </p>
                            <input type="text" placeholder="number" ref={number} className="input input-bordered" />
                        </div>

                        <div className="text-center my-5">
                            <p className=" text-center my-2">
                                <span className="font-[500] text-[17px]  ">Candidate image</span>
                            </p>
                            <input type="text" placeholder="image" ref={image} className="input input-bordered" />
                        </div>


                    </section>


                    <div className="modal-action">
                        {/* if there is a button, it will close the modal */}
                        <button onClick={submitForm} className="btn bg-green-500 text-white">Submit</button>

                        <button className="btn bg-red-500 text-white">Close</button>

                    </div>

                    <div>

                    </div>
                </form>
            </dialog>

        </div>
    );
};

export default Admission;