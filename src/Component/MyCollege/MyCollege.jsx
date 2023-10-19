import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const MyCollege = () => {

    const { user } = useContext(AuthContext)

    const [data, setData] = useState([]);

    const [singleData,setSingleData]=useState({})

    useEffect(() => {

        fetch(`https://booking-college-server-side.vercel.app/admissionData?email=${user?.email}`)
            .then(a => a.json())
            .then(a => setData(a))
            .catch(error => console.log(error))
    }, [user])

    console.log(data)

    const onsubmit=(e)=>{

        event.preventDefault();

        const rating=e.target.rating.value;
        const review=e.target.review.value;
        

        const info={
            collegeInfo:singleData,
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

        console.log(rating,review)

    }

    console.log(singleData)
    const reviewHandler=(a)=>{

        setSingleData(a)

    }
    return (
        <div className=" w-[90%] mx-auto py-[150px]">
            {
                data.map((a) => <div key={a?._id} >



                    <div style={{boxShadow:'-10px 10px 20px black,10px 10px 20px black'}} className="card card-compact  bg-base-100 shadow-xl my-10">
                        <img className="h-[500px]" src={a?.collegeDetails?.img} alt="Shoes" />
                        <div className="card-body">

                            <section className=" space-y-5 my-10">

                                <p className=" text-[17px] font-[400]">
                                    <span className=" font-[500]">College name: </span>

                                    {a?.collegeDetails?.name}

                                </p>
                                <p className=" text-[17px] font-[400]">
                                    <span className=" font-[500]">Admission Date: </span>
                                    {a?.collegeDetails?.admission}

                                </p>


                                <p className=" text-[17px] font-[400]">
                                    <span className=" font-[500]">Research history : </span>

                                    {a?.collegeDetails?.researchHistory}
                                </p>

                                <p className=" text-[17px] font-[400]">
                                    <span className=" font-[500]">Research number : </span>

                                    {a?.collegeDetails.researchNumber}
                                </p>

                                <p className=" text-[17px] font-[400]">
                                    <span className=" font-[500]">sports : </span>

                                    {a?.collegeDetails?.sports}
                                </p>

                                <p className=" text-[17px] font-[400]">
                                    <span className=" font-[500]">event : </span>

                                    {a?.collegeDetails?.event}
                                </p>


                                <form onSubmit={onsubmit}  >

                                    <div className="form-control w-[50%] my-5">
                                        <label className="label ">
                                            <span className="text-[17px] font-[500]">Rating</span>
                                        </label>
                                        <input type="number" placeholder="rating" name='rating' className="input input-bordered" required />
                                    </div>

                                    <div className="form-control w-[50%] my-5">
                                        <label className="label">
                                            <span className="text-[17px] font-[500]">Comment</span>
                                        </label>
                                     <textarea className="input input-bordered h-[300px] p-5" name="review" id="" cols="30" rows="10" placeholder="text" required></textarea>
                                    </div>

                                  

                                  <button  onClick={()=>reviewHandler(a)} className="btn bg-red-500 text-white text-[17px]
                                  font-[500] mt-5">
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