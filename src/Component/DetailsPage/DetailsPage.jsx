import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const DetailsPage = () => {

    const {id}=useParams();

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch(`https://booking-college-server-side.vercel.app/allCollages/${id}`)
            .then(a => a.json())
            .then(a => setData(a))
            .catch(error => console.log(error))
    }, [])

    console.log(data)
    return (
        <div className=" w-[90%] mx-auto py-[150px]">
       


        <div style={{boxShadow:'-10px 10px 20px black,10px 10px 20px black'}} className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={data?.img} alt="Shoes" /></figure>
            <div className="card-body">

                <section className=" space-y-10 my-10">

                    <p className=" text-[17px] font-[400]">
                        <span className=" font-[500]">College name: </span>
                        {data?.name}
                    </p>
                    <p className=" text-[17px] font-[400]">
                        <span className=" font-[500]">Admission Process: </span>
                        {data?.admissionProcess}
                    </p>
                    <p className=" text-[17px] font-[400]">
                        <span className=" font-[500]">Event Details: </span>
                        {data?.event}
                    </p>
                    <p className=" text-[17px] font-[400]">
                        <span className=" font-[500]">Research Work: </span>
                        {data?.researchHistory}
                    </p>
                    <p className=" text-[17px] font-[400]">
                        <span className=" font-[500]">Research Number: </span>
                        {data?.researchNumber}
                    </p>
                    <p className=" text-[17px] font-[400]">
                        <span className=" font-[500]">Sports Categories: </span>
                        {data?.sports}
                    </p>
                  

                </section>




            </div>
        </div>


    </div>
    );
};

export default DetailsPage;