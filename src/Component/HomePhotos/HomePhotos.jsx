import { useContext } from 'react'
import img1 from '../../assets/homePhotos/pexels-arif-syuhada-5227311.jpg'
import img2 from '../../assets/homePhotos/pexels-feedyourvision-1184580.jpg'
import img3 from '../../assets/homePhotos/pexels-george-pak-7972744.jpg'
import img4 from '../../assets/homePhotos/pexels-hai-nguyen-1699414.jpg'
import img5 from '../../assets/homePhotos/pexels-king-cyrus-studios-6371893.jpg'
import img6 from '../../assets/homePhotos/pexels-saiful-haizad-5508486.jpg'
import { AuthContext } from '../../Provider/AuthProvider'





const HomePhotos = () => {
  const {mode}=useContext(AuthContext)
  return (
  
    <div className="flex justify-center items-center ">
  <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto bg-gray-700   ">
    <div role="main" className="flex flex-col items-center justify-center bg-red-500 border rounded-md ">
    <h2 className=" text-[40px] font-[500] text-center my-[50px]  ">Graduate groups</h2>
    </div>
    <div className="lg:flex items-stretch md:mt-12 mt-8 ">
      <div className="lg:w-1/2 ">
        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
          <div className="sm:w-1/2 relative">
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <img src={img1} className="w-full border" alt="chair"  />
          </div>
          <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <img src={img2} className="w-full border" alt="wall design" />
          </div>
        </div>
        <div className="relative">
          <div>
            <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
            <div className="absolute bottom-0 left-0 md:p-10 p-6">
              <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
              <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
              <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <img src={img3} alt="sitting place " className="w-full mt-8 md:mt-6 hidden sm:block border h-[800px]" />
          <img className="w-full mt-4 sm:hidden border" src="https://i.ibb.co/6XYbN7f/Rectangle-29.png" alt="sitting place" />
        </div>
      </div>
      <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
        <div className="relative">
          <div>
            <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
            <div className="absolute bottom-0 left-0 md:p-10 p-6">
              <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
              <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
              <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <img src={img4} alt="sitting place" className="w-full sm:block hidden border  " />
          <img className="w-full sm:hidden border  " src="https://i.ibb.co/dpXStJk/Rectangle-29.png" alt="sitting place" />
        </div>
        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
          <div className="relative w-full">
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <img src={img5} className="w-full border " alt="chair border" />
          </div>
          <div className="relative w-full sm:mt-0 mt-4">
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <img src={img6} className="w-full border  " alt="wall design" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default HomePhotos;
