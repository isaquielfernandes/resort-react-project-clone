import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import RoomsContainer from "../components/RoomContainer";
import { Link } from "react-router-dom";

const Rooms = () => {
    return(
       <>
         <Hero hero="roomsHero">
             <Banner title="ouro rooms">
                 <Link to="/" className="btn-primary">
                     return home
                 </Link>
             </Banner>
         </Hero>
         <RoomsContainer/>
       </>
    );
};

export default Rooms;
