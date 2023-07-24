import './HomeHeader.css'

const HomeHeader = () => {
    return (
        <div className='home-header relative h-[800px] md:h-[700px]  lg:h-[700px]  ' style={{boxShadow:'-10px 10px 20px black,10px 10px 20px black'}}>

            <div style={{boxShadow:'-10px 10px 20px black,10px 10px 20px black'}} className=' w-[90%] mx-auto absolute 
            top-[20%] left-[5%]  p-[30px]  hover:scale-105 duration-[1s]'>
                <h2 className='md:text-[60px] lg:text-[60px]  text-[30px] font-[500] text-center w-[50%] mx-auto text-white mb-3 
                text-transparent  bg-clip-text 
                bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900'>The Best College Websites</h2>

                <p className=' text-white text-[17px] md:text-[20px] font-[400] md:w-[50%] lg:w-[50%] mx-auto'>When prospective students navigate to your college’s website, what type of experience are they met with? Do they land on a generic site that feels disconnected from your college’s brand and is complicated to navigate? Or, are they met with an authentic digital experience that immediately welcomes them into your college’s community and makes it easy to learn more?</p>
            </div>

            <div className=' bg-gradient-to-r from-black to-black/30  w-full h-full'>

            </div>
            
        </div>
    );
};

export default HomeHeader;