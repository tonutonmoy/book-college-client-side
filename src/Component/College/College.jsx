import { useEffect, useState } from "react";



const College = () => {

    const [data, setData] = useState([]);

    const [moreData,setMoreData]=useState({})


    const detailHandler=(event,sports)=>{

        setMoreData({event,sports})

    }

    useEffect(() => {

        // fetch('https://booking-college-server-side.vercel.app/allCollages')
        
        fetch('https://booking-college-server-side.vercel.app/allCollages')
            .then(a => a.json())
            .then(a => setData(a))
            .catch(error => console.log(error))
    }, [])
    console.log(data)



    return (
        <section className=" py-[100px] w-[90%] mx-auto">
            <h2 className=" text-[40px] font-[500] text-center my-[50px] ">All Colleges</h2>

            <div className="md:grid-cols-3 gap-10 ">



                {
                    data.map((a, index) => <div key={index} >



                        <div style={{boxShadow:'-10px 10px 20px black,10px 10px 20px black'}} className="card card-compact  bg-base-100 shadow-xl my-10">
                            <img className="h-[500px]" src={a?.img} alt="Shoes" />
                            <div className="card-body">

                                <section className=" space-y-5 my-10">

                                    <p className=" text-[17px] font-[400]">
                                        <span className=" font-[500]">College name: </span>

                                        {a?.name}

                                    </p>
                                    <p className=" text-[17px] font-[400]">
                                        <span className=" font-[500]">Admission Date: </span>
                                        {a?.admission}

                                    </p>
                                    <p className=" text-[17px] font-[400]">
                                        <span className=" font-[500]">Rating: </span>
                                        {a?.rating}

                                    </p>

                                    <p className=" text-[17px] font-[400]">
                                        <span className=" font-[500]">Research history : </span>

                                        {a?.researchHistory}
                                    </p>

                                    <p className=" text-[17px] font-[400]">
                                        <span className=" font-[500]">Research number : </span>

                                        {a?.researchNumber}
                                    </p>

                                 

                                </section>





                                <section onClick={()=>detailHandler(a?.event,a?.sports)} className =" rounded-[10px]  text-[17px] font-[500] bg-red-500  text-white
                                md:w-[10%] lg:w-[10%]  mx-auto 
                                ">
                                    <button className="w-full p-[20px] h-full" onClick={() => window.my_modal_2.showModal()} >
                                    Details
                                    </button>
                                </section>




                            </div>
                        </div>
             

                    </div>)
                }



            </div>

            <dialog id="my_modal_2" className="modal">
                <form method="dialog" className="modal-box">
                    <div className=" space-y-5">
                        <p className=" text-[17px] font-[400]">
                            <span className=" font-[500]">Events: </span>

                            {moreData?.event}
                        </p>

                        <p className=" text-[17px] font-[400]">
                            <span className=" font-[500]">Sports: </span>

                            {moreData?.sports}
                        </p>
                    </div>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </section>
    );
};

export default College;