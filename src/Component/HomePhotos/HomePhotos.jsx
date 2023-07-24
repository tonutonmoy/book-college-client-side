import img1 from '../../assets/homePhotos/pexels-arif-syuhada-5227311.jpg'
import img2 from '../../assets/homePhotos/pexels-feedyourvision-1184580.jpg'
import img3 from '../../assets/homePhotos/pexels-george-pak-7972744.jpg'
import img4 from '../../assets/homePhotos/pexels-hai-nguyen-1699414.jpg'
import img5 from '../../assets/homePhotos/pexels-king-cyrus-studios-6371893.jpg'
import img6 from '../../assets/homePhotos/pexels-saiful-haizad-5508486.jpg'

const HomePhotos = () => {
    return (
        <div className=' my-[100px] '>


            <h2 className=" text-[40px] font-[500] text-center my-[50px] ">Graduate groups</h2>

            <div className='grid  md:grid-cols-3 lg:grid-cols-3 gap-10'>
                <section style={{boxShadow:'-10px 10px 20px black,10px 10px 10px black'}}
                className=' hover:scale-110 duration-[1s]'>
                    <img className='w-full h-[300px]' src={img1} alt="" />
                </section>
                <section style={{boxShadow:'-10px 10px 20px black,10px 10px 10px black'}}
                className=' hover:scale-110 duration-[1s]'>
                    <img className='w-full h-[300px]' src={img2} alt="" />
                </section>
                <section style={{boxShadow:'-10px 10px 20px black,10px 10px 10px black'}}
                className=' hover:scale-110 duration-[1s]'>
                    <img className='w-full h-[300px]' src={img3} alt="" />
                </section>
                <section style={{boxShadow:'-10px 10px 20px black,10px 10px 10px black'}}
                className=' hover:scale-110 duration-[1s]'>
                    <img className='w-full h-[300px]' src={img4} alt="" />
                </section>
                <section style={{boxShadow:'-10px 10px 20px black,10px 10px 10px black'}}
                className=' hover:scale-110 duration-[1s]'>
                    <img className='w-full h-[300px]' src={img5} alt="" />
                </section>
                <section style={{boxShadow:'-10px 10px 20px black,10px 10px 10px black'}}
                className=' hover:scale-110 duration-[1s]'>
                    <img className='w-full h-[300px]' src={img6} alt="" />
                </section>
            </div>

            
        </div>
    );
};

export default HomePhotos;