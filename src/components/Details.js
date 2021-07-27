import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const Details = ({ match, movieList }) => {
  const search = movieList.find(
    (item) => item.id.toString() === match.params.id.toString()
  );
  return (
    <div>
      <div className="det-cont">
        <iframe
        className='col-md-8'
          id="vedio"
          width="853"
          height="480"
          src={search.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p className='desc'>{search.description}</p>
      </div>
      <Link to="/">
      <Button variant="outline-dark" id="retour">Go Back</Button>
      </Link>
    </div>
  );
};

export default Details;