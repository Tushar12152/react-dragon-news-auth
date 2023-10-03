import logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto py-5' src={logo} alt="" />
            <p className='text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='py-5 text-[#706F6F]'>{moment().format("dddd, MMMM D YYYY")}</p>
        </div>
    );
};

export default Header;