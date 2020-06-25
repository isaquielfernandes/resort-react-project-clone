import React, { Component } from "react";
import Title from "./Title";
import Room from "./Room";
import Loading from "./Loading";
import { RoomContext } from "../context";

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
   
    render() {
        let { loading, featuredRooms: rooms } = this.context;

        rooms = rooms.map(item => {
            return <Room key={room.id} room={room} />;
        });

        return(
            <section className="featured-rooms">
               <Title title="featured rooms" />
               <div className="featured-rooms-center">
                  {loading ? <Loading />: rooms}
               </div>
            </section>
        );
    }
}
