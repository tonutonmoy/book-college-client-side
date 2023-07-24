import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';


const HomeReview = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('https://booking-college-server-side.vercel.app/reviewdata')
            .then(a => a.json())
            .then(a => setData(a))
            .catch(error => console.log(error))
    }, [])

    console.log(data)
    return (
        <div className='my-[150px]'>
            <h2 className=" text-[40px] font-[500] text-center my-[50px] ">Top Review</h2>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper  h-[500px] md:h-[700px] lg:h-[700px] my-[50px]  
                "
                style={{boxShadow:'-10px 10px 20px black,10px 10px 20px black'}}
            >
                {data.map(a => <SwiperSlide key={a?._id}>



                    <div style={{boxShadow:'10px 10px 20px black'}}
                        className="card card-compact w-[90%] mx-auto h-[90%] bg-base-100 mt-[20px] shadow-xl hover:scale-105
                         duration-[1s] overflow-scroll  ">
                        <img className='h-[200px] md:h-[300px]' src={a?.collegeInfo?.collegeDetails?.img} alt="Shoes" />
                        <div className="card-body">

                            <p className=" text-[13px] md:text-[17px] lg:text-[17px] mt-5 font-[400]">
                                <span className=" font-[500]">College name: </span>

                                {a?.collegeInfo?.collegeDetails?.name}

                            </p>

                            <p className=" text-[13px] md:text-[17px] lg:text-[17px]  font-[400]">
                                <span className=" font-[500]">Name: </span>

                                {a?.collegeInfo?.name}


                            </p>

                            <p className=" text-[13px] md:text-[17px] lg:text-[17px]  font-[400]">
                                <span className=" font-[500]">Email: </span>

                                {a?.collegeInfo?.email}

                            </p>
                            <p className=" text-[13px] md:text-[17px] lg:text-[17px] font-[400]">
                                <span className=" font-[500]">Rating: </span>

                                {a?.rating}

                            </p>
                            <p className=" text-[13px] md:text-[17px] lg:text-[17px]  font-[400] ">
                                <span className=" font-[500]">Review: </span>

                                {a?.review}...

                            </p>
                        </div>
                    </div>






                </SwiperSlide>)

                }

            </Swiper>
        </div>
    );
};

export default HomeReview;