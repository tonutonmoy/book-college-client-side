
import { useParams } from "react-router-dom";
import UseCollageDetails from "../../Hooks/useCollageDetails";


const DetailsPage = () => {

    const {id}=useParams();

   

    const [data]=UseCollageDetails(id)

    console.log(data)
    return (
 
    <div className="py-[150px] md:py-[150px] lg:py-[120px] xl:py-[100px] 2xl:py-[150px]  w-[90%] mx-auto">
    <div className="flex items-center justify-center relative ">
    <div
        id="bg-img"
        className="flex h-[600px] md:h-[600px] lg:h-[650px] xl:h-[670px] 2xl:h-[700px] w-full "
        style={{
            backgroundImage: `url(${data?.img})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}
    >
      
      <div className=" bg-black/50  absolute h-full w-full top-0  ">
      </div>
            <section className=" overflow-y-auto space-y-2 md:space-y-2 lg:space-y-2 xl:space-y-2 2xl:space-y-4 my-10 z-10 w-[90%] md:w-[90%] lg:w-[90%]  xl:w-[90%]  2xl:w-[70%] p-5 md:p-8 lg:p-10 xl:p-10 2xl:p-10   mx-auto bg-slate-700/90  border  " >

                <p className=" text-[17px] font-[400]">
                    <span className=" font-[500]">College name: </span>

                    {data?.name}

                </p>
                <p className=" text-[17px] font-[400]">
                    <span className=" font-[500]">Admission Date: </span>
                    {data?.admissionProcess}

                </p>


               

                <p className=" text-[17px] font-[400]">
                    <span className=" font-[500]">Research number : </span>

                    {data?.event}
                </p>
                <p className=" text-[17px] font-[400]">
                    <span className=" font-[500]">Research number : </span>
                    {data?.researchHistory}
                </p>
                <p className=" text-[17px] font-[400]">
                    <span className=" font-[500]">Research number : </span>
                    {data?.researchNumber}
                </p>
                <p className=" text-[17px] font-[400]">
                    <span className=" font-[500]">Research number : </span>
                    {data?.sports}
                </p>

             


            


            </section>
        
    </div>
</div>
</div>
 
    );
};

export default DetailsPage;