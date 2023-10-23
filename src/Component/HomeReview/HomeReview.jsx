import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Rating , ThinStar,Heart,Star} from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'



// import required modules
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const HomeReview = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('https://booking-college-server-side.vercel.app/reviewdata')
            .then(a => a.json())
            .then(a => setData(a))
            .catch(error => console.log(error))
    }, []);

  


    console.log(data,'d')

    const windowWidth = window.innerWidth;

   

    let width=1;

    if(425<windowWidth){
        width=2
    }
    else if(768<windowWidth){
        width=5
    }
    const myStyles = {
        itemShapes: Star,

    activeFillColor: "#b91c1c",

    inactiveFillColor: "#d6d3d1",
      }
    
    return (
        <div className='my-[150px]'>
            <h2 className=" text-[40px] font-[500] text-center my-[50px] ">Top Review</h2>
            <Swiper
                slidesPerView={width}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper   
                "
               
            >
                {data.map(a => <SwiperSlide key={a?._id}>



      <card className="w-full  bg-red-500  ">
        <div className="relative">

        
         <div className=''>

        
            <img src={a?.collegeInfo?.collegeDetails?.img} className="w-full h-[200px] " />
            </div>

          <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">1:15</p>
        </div>

        <div className="flex flex-row mt-2 gap-2">
          
     
          
            <img src={a?.collegeInfo?.image} className="rounded-full max-h-10 w-10 md:w-10 lg:w-10 xl:w-12 2xl:w-12" />
         

        
          <div className="flex flex-col  overflow-x-auto w-full">
            <Link >
              <p className=" text-sm font-semibold">{a?.collegeInfo?.collegeDetails?.name}</p>
            </Link>
            
            <p className="text-gray-200 text-xs mt-1"> {a?.collegeInfo?.name}</p>
            <p className="text-gray-400 text-xs mt-1 "> 
            <Rating
                  readOnly
                  value={a?.rating}
                  style={{ maxWidth: 100 }}
                  itemStyles={myStyles}
                /> </p>
            <p className="text-gray-200 text-xs mt-1  "> {a?.review}</p>
           
          </div>
          
        </div>
      </card>
   




                </SwiperSlide>)

                }

            </Swiper>
        </div>
    );
};

export default HomeReview;