import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UseCollageDetails from '../../Hooks/useCollageDetails';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  
  const navigate=useNavigate()

  useEffect(() => {
    if (query) {
      handleSearch();
    } else {
      setResults([]); // Clear results if the query is empty
    }
  }, [query]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://booking-college-server-side.vercel.app/singleCollage/${query}`);
      setResults(response.data);
     
      
    } catch (error) {
      console.error(error);
      setResults([]); // Clear results on error
    }
  };


  const ClickHandler=(id)=>{
    setQuery('')
    navigate(`/detailsPage/${id}`)
    const [,refetch]=UseCollageDetails(id)
    refetch();
   
    
  

}
  const SearchHandler= async(e)=>{
    event.preventDefault()
    console.log(e.target.name.value,'name')

    try {
        const response = await axios.get(`https://booking-college-server-side.vercel.app/singleCollage/${query}`);
        console.log(response.data.length,'data')
        e.target.reset()
        if(response?.data?.length === 1){
          e.target.name.value='';
          setQuery('');
            console.log(response?.data[0]?._id,'data')
            
            navigate(`/detailsPage/${response?.data[0]?._id}`)
              
            const [,refetch]=UseCollageDetails(response?.data[0]?._id)

            refetch();
           
            
        }
    

       
        
      } catch (error) {
        console.error(error);
        setResults([]); // Clear results on error
      }
}


console.log(query,'q')

const buttonRef = useRef(null);

const handleClickOutside = (e) => {
  if (buttonRef.current && !buttonRef.current.contains(e.target)) {
    // Click occurred outside the button
    console.log('Clicked outside the button');
    setQuery('');
  }
};

useEffect(() => {
  document.addEventListener('click', handleClickOutside);

  return () => {
    document.removeEventListener('click', handleClickOutside);
  };
}, []);
  return (
    <div>
    <div className='border-none w-full md:w-full  lg:w-[150px]  xl:w-[250px]  2xl:w-[300px]   ' ref={buttonRef}>
        <form className=' flex items-center '  onSubmit={SearchHandler} >
      <input
        type="text"
        placeholder="Search..."
        value={query}
        name='name'
        className='bg-gray-700  focus:outline-none pl-2 w-[92%]  '
        onChange={(e) => setQuery(e.target.value)}

      />
     <div className=' w-[15%]  '>
     <button className=' bg-red-500 w-full h-full p-[3px] flex  justify-center' > <svg
              className="w-5 h-5  "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg></button>
     </div>
      </form>

      {results.length > 0 && (
        <div className=' bg-gray-700  border pl-2 py-2 rounded-b-md'>
         
          <ul >
            {results.map((result) => (
              <li  onClick={()=>ClickHandler(result?._id)} className=' hover:text-red-400' key={result?._id}>
                <a className='hover:text-red-400' href="#">{result.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

   
      
    </div>
  
  );
};

export default SearchBar;
