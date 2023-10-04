import {  FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"
const RightSideNav = () => {
    return (
        <div className='mb-6'>
            <div className='p-4'>
                <h3 className="text-xl font-bold">Login With</h3>

                <div>
                <button className="btn btn-outline  mt-5 w-full">
                    <FaGoogle></FaGoogle>
                     Login With Google
                     </button>
                     <button className="btn btn-outline  mt-5 w-full">
                    <FaGithub></FaGithub>
                     Login With GitHub
                     </button>
                </div>
            </div>
            <div className='p-4'>
            <h3 className="text-xl font-bold">Find Us On</h3>
           <div className='border mt-5 rounded-t'>
           <a className='p-4 flex items-center gap-2'>
               <p className='text-blue-700'> <FaFacebook></FaFacebook></p>
                Facebook
            </a>
            <p className='bg-[#E7E7E7] w-full h-[1px]'></p>
            <a className='p-4 flex items-center gap-2'>
               <p className=''> <FaTwitter></FaTwitter></p>
                Twitter
            </a>
            <p className='bg-[#E7E7E7] w-full h-[1px]'></p>

            <a className='p-4 flex items-center gap-2'>
               <p className=''> <FaInstagram></FaInstagram></p>
                Instagram
            </a>
          
           </div>
            </div>
            <div className=' p-4 mt-5'>
            <h3 className="text-xl  font-semibold">Q-Zone</h3>
            <img  src={qZone}></img>
            <img className='mt-8' src={qZone2}></img>
            <img className='mt-8' src={qZone3}></img>
            </div>
        </div>
    );
};

export default RightSideNav;