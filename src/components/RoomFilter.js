import React, { useContext } from "react";
import Title from "./Title";
import { RoomContext } from "../context";

const getUnique = (items, value) => {
   return [...new Set(items.map(item => item[value]))];
};

const RoomFilter = ({rooms}) => {
   //react hooks
   const context = useContext(RoomContext);
   const { 
       handleChange,
       type,
       capacity,
       price,
       minPrice,
       maxPrice,
       minSize,
       maxSize,
       breakfast,
       pets } = context;

   return (
       <section className="filter-container">
           <Title title="search rooms" />
           <form>
               <div className="form-group">
               </div>
               <div className="form-group">
               </div>
               <div className="form-group">
               </div>
               <div className="form-group">
               </div>
               <div className="form-group">
               </div>
           </form>
       </section>
   );
};

export default RoomFilter;
