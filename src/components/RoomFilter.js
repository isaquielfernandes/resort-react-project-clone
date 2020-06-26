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
       pets 
    } = context;

    //get uinque types
    let types = getUnique(rooms, "type");

    //add all
    types = ["all", ...types];

    //map to jsx
    types = types.map((item, index) => {
        return (
            <option key={index} value={item}>
                {item}
            </option>
        );
    });

    //get unique capacity
    let people = getUnique(rooms, "capacity");
    people.map((item , index) => {
        return (
            <option key={index} value={item}>
                {item}
            </option>
        );
    })

    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">Room type</label>
                    <select name="type" id="type" className="form-control" onChange={handleChange} value={type}>
                        {types}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" className="form-control" onChange={handleChange} value={capacity}>
                        {people}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Room price ${price}</label>
                    <input type="range" name="price" className="form-control" min={minPrice} max={maxPrice} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="size">Room size</label>
                    <div className="sizee-inputs">
                        <input type="number" name="minSize" className="size-input" value={minSize} onChange={handleChange} />
                        <input type="number" name="maxSize" className="size-input" value={maxSize} onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast}  onChange={handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" checked={pets} onChange={handleChange}/>
                        <label htmlFor="breakfast">pets</label>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default RoomFilter;
