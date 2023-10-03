import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreakingNews = () => {
    return (
        <div className="w-[80%] mx-auto bg-slate-400 rounded-md flex my-5">
             <button className="btn btn-secondary">Breaking News</button>
             <Marquee pauseOnHover={true} speed={100}>
                <Link to="/">  sit amet consectetur, adipisicing elit. Laudantium earum libero mollitia.....</Link>
             </Marquee>
        </div>
    );
};

export default BreakingNews;