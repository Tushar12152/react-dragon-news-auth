import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNAv from "../Shared/RightSideNAv/RightSideNAv";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
           

              <div className="grid gap-6 grid-cols-4 ">
                   <div className="border-2">
                       <LeftSideNav></LeftSideNav>
                   </div>
                   <div className="border-2 col-span-2">
                        <h1 className="text-center"> news comming soon </h1>
                   </div>
                   <div  className="border-2">
                        <RightSideNAv></RightSideNAv>
                   </div>

              </div>
        </div>
    );
};

export default Home;