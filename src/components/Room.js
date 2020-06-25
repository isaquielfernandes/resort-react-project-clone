import React, { memo } from "react";
import { Link } from " react-router-dom";
import PropTypes from "prop-types";
import defaultImg from "../images/room-1.jpeg";

const Room = memo(({room}) => {
    const { name, slug, images, price } = room;

    return (
         <article className="room">
              <div className="img-container">
                 <img src={imagens[0] || defaultImg} alt="" />
                 <div className="price-top">
                     <h6>${price}</h6>
                     <p>per night</p>
                 </div>
                 <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                     Features
                 </Link>
              </div>
              <p className="room-info">{name}</p>
         </article>
    );
});

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired
    });
};

export default Room;
