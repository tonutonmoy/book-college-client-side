import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const HomeTopCollage = () => {


    

      const {user,collegeData,setCollegeData}=useContext(AuthContext)

    useEffect(() => {

        fetch('https://booking-college-server-side.vercel.app/allCollages')
            .then(a => a.json())
            .then(a => setCollegeData(a))
            .catch(error => console.log(error))
    }, []);


    console.log(collegeData)
    const navigate = useNavigate()

    const detailsHandler = (id) => {

        if(!user?.email){

            return toast.error("Please Login")
        }

        navigate(`/detailsPage/${id}`)
    }
    return (
        <section className=" my-[100px]">
                 <h2 className=" text-[40px] font-[500] text-center my-[50px] ">Top College</h2>

                 <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-10 ">
       


       {
          collegeData.slice(0,3).map((a)=>    <div key={a?._id} >
          


          <div style={{boxShadow:'10px 10px 10px black'}}
           className="card card-compact  bg-base-100 shadow-xl my-10 md:hover:scale-110 lg:hover:scale-110 hover:scale-105 duration-[2s] ">
              <img  className="h-[300px]  " src={a?.img} alt="Shoes" />
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
                          <span className=" font-[500]">Events: </span>
                          
                          {a?.event}
                      </p>
                      <p className=" text-[17px] font-[400]">
                          <span className=" font-[500]">Research history: </span>
                          
                          {a?.researchHistory.slice(0,100)}...
                      </p>
                      <p className=" text-[17px] font-[400]">
                          <span className=" font-[500]">Sports: </span>
                          
                          {a?.sports}
                      </p>


                  </section>

                  <ToastContainer />


                  <section className=" w-full">
                      <button onClick={()=>detailsHandler(a?._id)} className=" btn bg-red-500  w-full text-white">Details</button>
                  </section>
              </div>
          </div>


      </div>)
       }

      </div>
        </section>
       
    );
};

export default HomeTopCollage;