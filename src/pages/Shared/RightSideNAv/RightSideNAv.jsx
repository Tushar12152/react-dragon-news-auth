import {AiOutlineGoogle,AiFillGithub,AiOutlineTwitter,AiOutlineInstagram} from 'react-icons/ai'
import {BiLogoFacebook } from 'react-icons/bi'
import Qzone1 from '../../../assets/qZone1.png'
import Qzone2 from '../../../assets/qZone2.png'
import Qzone3 from '../../../assets/qZone3.png'


const RightSideNAv = () => {
    return (
        <div>
           <div  className="p-4">
           <h1 className="font-bold text-xl pb-2">Log In With</h1>
       
       <button className="btn w-full">
       <AiOutlineGoogle></AiOutlineGoogle>
       Log In With Google
       </button>
       <button className="btn w-full mt-4">
       <AiFillGithub></AiFillGithub>
       Log In With GitHub
       </button>
          
           </div>
          

           <div  className="p-4">
           <h1 className="font-bold text-xl pb-2">Find Us On</h1>
       
       <a  href='' className="btn w-full ">
       <span className='text-blue-95000 text-2xl'><BiLogoFacebook></BiLogoFacebook></span>
      Facebook
       </a>

       <a href='' className="btn w-full mt-4">
      <span className='text-blue-600 text-2xl'> <AiOutlineTwitter></AiOutlineTwitter></span>
     Twitter
       </a>
       <a href='' className="btn w-full mt-4">
      <span className='text-red-400 text-2xl'> <AiOutlineInstagram/></span>
     Instagram
       </a>
          
           </div>

           {/* Q-zone */}

           <div  className="p-4">
           <h1 className="font-bold text-xl pb-2">Q-Zone</h1>
                <img src={Qzone1} alt="" />
               
                <img src={Qzone2} alt="" />
               
                <img src={Qzone3} alt="" />
               
                
           </div>
          
        </div>






    );
};

export default RightSideNAv;