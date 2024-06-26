import './App.css'
import Jessica from '../src/assets/avatar-jessica.jpeg'
import { MdVerified } from "react-icons/md";

function App() {

  return (

<div className='m-auto text-center px-4 h-screen grid place-content-center place-items-center '>

<div>
<div className='px-20 pt-10 pb-10 bg-blue-700 rounded-t-2xl'>
  <p className='text-white text-center text-xl font-semibold pb-5'>Driver Profile</p> 
  <img className=' relative z-50 rounded-full border-4 h-28 mx-auto -mb-20' src={Jessica}  alt='Jessica Image' />

  </div>
<div className='bg-white py-10 relative z.-30 rounded-b-2xl px-20'>

  <p className='text-2xl font-semibold pt-6 pb-2 text-blue-700'>Ojo Taye Marcus </p>
<button className='text-blue-700 font-medium border py-1 px-3 rounded-xl flex items-center gap-2 m-auto bg-gray-50 hover:bg-gray-200'>Verified <MdVerified />
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
