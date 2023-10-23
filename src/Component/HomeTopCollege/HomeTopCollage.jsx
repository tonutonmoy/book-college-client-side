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

                 <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-20  ">
       


       {
          collegeData.slice(0,3).map((a)=>    <div key={a?._id} >
          


          <div 
           className="card card-compact shadow-xl hover:shadow-md  my-10  bg-slate-700 border  border-white rounded-[10px] 
             ">
            <div className="bg-red-500 ">
            <img  className="h-[200px] md:h-[200px] lg:h-[250px]  xl:h-[250px]  2xl:h-[250px]  w-full  rounded-b-[50%] border-b-2  " src={a?.img} alt="Shoes" />
            </div>
              <div className="card-body   text-white  border-t-[1px]">

                  <section className=" space-y-2 my-2  ">

                      <p className=" text-[14px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[16px] font-[400]">
                          <span className=" font-[500]">College name: </span>

                          {a?.name}
                         
                      </p>
                      <p className=" text-[14px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[16px] font-[400]">
                          <span className=" font-[500]">Admission Date: </span>
                          {a?.admission}

                      </p>
                      <p className=" text-[14px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[16px] font-[400]">
                          <span className=" font-[500]">Events: </span>
                          
                          {a?.event}
                      </p>
                      <p className=" text-[14px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[16px] font-[400]">
                          <span className=" font-[500]">Research history: </span>
                          
                          {a?.researchHistory.slice(0,100)}...
                      </p>
                      <p className=" text-[14px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[16px] font-[400]">
                          <span className=" font-[500]">Sports: </span>
                          
                          {a?.sports}
                      </p>


                  </section>

                  <ToastContainer />


           
                   <div className="w-[50%] mx-auto">
                   <button onClick={()=>detailsHandler(a?._id)} className="  p-[5px]  md:[5px]  lg:p-[6px]  xl:p-2  2xl:p-2   bg-red-500 rounded-full w-full  text-white
                      text-[14px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[16px] font-[500]">Details</button>
                   </div>
                  
              </div>
          </div>


      </div>)
       }

      </div>
        </section>
       
    );
};

export default HomeTopCollage;