import { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";
import p1 from '../../../assets/1.png'
import p2 from '../../../assets/2.png'
import p3 from '../../../assets/3.png'

const LeftSideNav = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
           const loadData=async()=>{
               const res =await fetch('categories.json')
               const data =await res.json()
               setCategories(data)
           }
           loadData()
    },[])
    return (
        <div>
          <h1 className="font-bold text-xl p-5">All Categories:{categories.length}</h1>
          {
            categories.map(category=><NavLink className={ ( { isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-800 underline" : "block ml-8 mb-4 text-xl font-semibold" } to={`/catagory/${category.id}`}  key={category.id}>
                    {category.name}
                </NavLink>
            )
          }

      <div className="flex flex-col gap-10 mt-5">
        <div>
        <img  src={p1} alt="" />
        </div>
        
          <div>
          <img src={p2} alt="" />
          </div>

          <div>
         <img src={p3} alt="" />
      </div>
      </div>

     

        </div>
    );
};

export default LeftSideNav;