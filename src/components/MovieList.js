import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";


const MovieList = ({ movies,handleDelete,search,rate }) => {
  
  return (
    <div className="movieList">
      {movies.filter((el)=>el.title.toUpperCase().includes(search.toUpperCase()) && el.rating>=rate).map((el, index) => (
          <div className="movie">
            <Card   key={el.id} id="Card" style={{ width: "18rem" , marginTop :"30px"}}>
              <Card.Img className="img"
                variant="top"
                src={el.image}
                style={{ height: "300px" }}
              ></Card.Img>
              <Card.Body style={{}}>
                <Card.Title id="title" > {el.title} </Card.Title>
                <Card.Text id="year"> {el.year} </Card.Text>
                <StarRatingComponent value={el.rating} />
              </Card.Body>
              <div id="btncont">
              <Link to={`/movieList/${el.id}`}><i class="far fa-play-circle fa-2x" id='play'></i></Link>
              <i class="fas fa-trash-restore-alt fa-2x" onClick={()=>handleDelete(el.id)} id='delete'></i>
              
              </div>
            </Card>{" "}
            
          </div>
        ))}
    </div>
  );
};

export default MovieList;