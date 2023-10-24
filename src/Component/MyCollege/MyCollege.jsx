import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const MyCollege = () => {

    const { user } = useContext(AuthContext)

    const [data, setData] = useState([]);

    const [singleData, setSingleData] = useState({})

    useEffect(() => {

        fetch(`https://booking-college-server-side.vercel.app/admissionData?email=${user?.email}`)
            .then(a => a.json())
            .then(a => setData(a))
            .catch(error => console.log(error))
    }, [user])

    console.log(data)

    const onsubmit = (e) => {

        event.preventDefault();

        const rating = e.target.rating.value;
        const review = e.target.review.value;


        const info = {
            collegeInfo: singleData,
            rating,
            review
        }


        fetch("https://booking-college-server-side.vercel.app/reviewData", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then((res) => {

                if (res) {

                    toast.success("Review done")

                    console.log(res)
                    e.target.reset()
                }


            })
            .catch(error => {
                console.log(error)
                toast.error(error.message)
            })

        console.log(rating, review)

    }

    console.log(singleData)
    const reviewHandler = (a) => {

        setSingleData(a)

    }
    return (
        <div className=" w-[90%] mx-auto py-[150px]">
            {
                data.map((a) => <div key={a?._id} >




                    <div className="flex items-center justify-center relative my-10">
                        <div
                            id="bg-img"
                            className="flex h-[500px] md:h-[500px] lg:h-[520px] xl:h-[520px] 2xl:h-[520px] w-full "
                            style={{
                                backgroundImage: `url(${a?.collegeDetails?.img})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                            }}
                        >
                          
                          <div className=" bg-black/50  absolute h-full w-full top-0  ">
                          </div>
                                <section className=" space-y-2 my-10 z-10 w-[90%] md:w-[50%] lg:w-[50%]  xl:w-[50%]  2xl:w-[50%] p-5 md:p-8 lg:p-10 xl:p-10 2xl:p-10   mx-auto bg-slate-700/90  border  " >

                                    <p className=" text-[17px] font-[400]">
                                        <span className=" font-[500]">College name: </span>

                                        {a?.collegeDetails?.name}

                                    </p>
                                    <p className=" text-[17px] font-[400]">
                                        <span className=" font-[500]">Admission Date: </span>
                                        {a?.collegeDetails?.admission}

                                    </p>


                                   

                                    <p className=" text-[17px] font-[400]">
                                        <span className=" font-[500]">Research number : </span>

                                        {a?.collegeDetails.researchNumber}
                                    </p>

                                 


                                    <form className="" onSubmit={onsubmit}  >

                                        <div className="form-control w-[100%] my-1">
                                            <label className="label ">
                                                <span className="text-[17px] font-[500]">Rating</span>
                                            </label>
                                            <input type="number" placeholder="rating" name='rating' className="input input-bordered h-[35px] w-[50%] text-gray-900" required />
                                        </div>

                                        <div className="form-control w-[50%] my-1">
                                            <label className="label">
                                                <span className="text-[17px] font-[500]">Comment</span>
                                            </label>
                                            <textarea className="input input-bordered h-[100px] w-[100%] p-5 text-gray-900" name="review" id="" cols="30" rows="10" placeholder="text" required></textarea>
                                        </div>



                                        <button onClick={() => reviewHandler(a)} className=" font-[500] px-[10px] py-2 border rounded-2xl bg-red-500 text-white mt-2">
                                            Submit
                                        </button>
                                    </form>


                                </section>
                            
                        </div>
                    </div>



                </div>)
            }
            <ToastContainer />


        </div>
    );
};

export default MyCollege;