import './App.css'
import Jessica from '../src/assets/avatar-jessica.jpeg'
import { MdVerified } from "react-icons/md";
import { LuPenLine } from "react-icons/lu";

function App() {

  return (

<div className='text-center px-2 mt-10 md:mt-0 grid place-content-center place-items-center '>

   <div>
      <div className='px-20 pt-10 pb-10 bg-blue-700 rounded-t-2xl'>
        <p className='text-white text-center text-xl font-semibold pb-5'>Driver Profile</p>  
        <div className='flex'>
        <img className=' relative z-40 rounded-full border-4 h-28 mx-auto -mb-20' src={Jessica}  alt='Jessica Image' />
        <LuPenLine className='text-red border h-8 w-8 p-1 bg-gray-50 rounded-full mt-20 ml-24 md:ml-28 absolute z-50'/>
     </div>
   </div> 


   <div className='bg-white py-10 relative z.-30 rounded-b-2xl px-20'>
     <p className='text-xl md:text-2xl font-semibold pt-6 pb-2 text-blue-700'>Ojo Taye Marcus </p>
     <button className='text-blue-700 text-sm font-medium border py-2 px-4 flex items-center gap-2 m-auto bg-gray-50 hover:bg-gray-200'>Verified
       <MdVerified />
     </button>

     <div className='pt-10 flex flex-col gap-y-3 text-blue-700  font-medium m-auto'>

     <button >Car Type</button>
     <button >Car Color</button>
     <button>Licence Plate</button>
     <button>Registered Park</button>
     <button>Share Button</button>

    </div>
  </div> 
</div>


</div>
  )
} 

export default App
