import "./App.css";
import MovieList from "./components/MovieList";
import { useState } from "react";
import MovieNav from "./components/MovieNav";
import AddMovie from "./components/AddMovie";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./components/Details";

function App() {
  const [movieList, setMovieList] = useState([
    {
      id: 1,
      image: "https://i.ebayimg.com/images/g/RScAAOSwsJpfCgYB/s-l300.jpg",

      title: "The Green Mile",
      rating: 2,
      year: "1999",
      trailer: "https://www.youtube.com/embed/Ki4haFrqSrw",
      description: `The Green Mile is a 1996 serial novel by American writer Stephen King. It tells the story of death row supervisor
         Paul Edgecombe's encounter with John Coffey, an unusual inmate who displays inexplicable healing and empathetic abilities.`,
    },
    {
      id: 2,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81luv8TaKlL._AC_SY879_.jpg",

      title: "The Revenant",
      rating: 4,
      year: "2015",
      trailer: "https://www.youtube.com/embed/LoebZZ8K5N0",
      description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for 
      dead by members of his own hunting team. While exploring uncharted wilderness in 1823, legendary frontiersman Hugh Glass 
      sustains injuries from a brutal bear attack.`,
    },
    {
      id: 3,
      image:
        "https://i.egycdn.com/pic/WmFwZndlY21FbW1tYm1ibXVjbWptVElhY05md1A.jpg",
      title: "Dark Knight",
      rating: 3,
      year: "2008",
      trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
      description: `A billionaire socialite who, after witnessing his parents' death in a mugging at age 8,
       travels the world for seven years before returning home to operate as a bat-masked vigilante hailed as Gotham City's "Dark Knight", 
       using fear against the city's criminal underworld at night.`,
    },
    {
      id: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/817O-vUusjL._AC_SL1500_.jpg",
      title: "Jurassic World",
      rating: 4,
      year: "2015",
      trailer: "https://www.youtube.com/embed/RFinNxS5KN4",
      description: `Set 22 years after the events of Jurassic Park, Jurassic World takes place on the same fictional island of Isla Nublar, located off the Pacific coast of Costa Rica. A successful theme park of cloned dinosaurs, dubbed Jurassic World, has operated on the island for years, bringing John Hammond's dream to fruition.
      `,
    },
    {
      id: 5,
      image:
        "https://i.egycdn.com/pic/RHNhSUNlY21IY21ibWJtRW1tbWVjbW1QbWptanhtQnd4.jpg",
      title: "Till Death",
      rating: 3,
      year: "2021",
      trailer: "https://www.youtube.com/embed/NuhAJwqbuOU",
      description: `A woman is left handcuffed to her dead husband as part of a sick revenge plot. A woman is left handcuffed to her dead husband as part of a sick revenge plot. ... Unable to unshackle, she has to survive as two killers arrive to finish her off.
      `,
    },
    {
      id: 6,
      image:
        "https://i.egycdn.com/pic/WmFwZndlY21MY212bWptdm1qbWFjY3d4bVRFbG1tbUh3.jpg",
      title: "Lion King",
      rating: 5,
      year: "2019",
      trailer: "https://www.youtube.com/embed/7TavVZMewpY",
      description: `The Lion King tells the story of Simba (Swahili for lion), a young lion who is to succeed his father, Mufasa, as King of the Pride Lands; however, after Simba's paternal uncle Scar murders Mufasa, Simba is manipulated into thinking he was responsible and flees into exile.
      `,
    },
    {
      id: 7,
      image:
        "https://i.egycdn.com/pic/WmFwZndlY21IY21FbW1tVGp2UmNtRW1Fdk5qbWp3VHZQ.jpg",
      title: "Luca",
      rating: 4,
      year: "2021",
      trailer: "https://www.youtube.com/embed/mYfJxlgR2jw",
      description: `Luca is a 2021 American computer-animated coming-of-age fantasy film produced by Pixar ... Some design details that carried through to the final film are things like the shapes of the fins of the sea monsters, how decorative their scales are, ...
      `,
    },
    {
      id: 8,
      image: "https://geeko.lesoir.be/wp-content/uploads/2020/10/monster.jpg",
      title: "Monster hunter",
      rating: 5,
      year: "2015",
      trailer: "https://www.youtube.com/embed/3od-kQMTZ9M",
      description: `The Monster Hunter games are hybrid action/role-playing games set in a fantasy world overrun by deadly monsters. Players begin as a low-ranking novice hunter before they can embark on deadly hunts to kill more ferocious beasts. After downing these creatures, players can craft new equipment from monster parts.19 juil. 2016
      `,
    },
  ]);
  const handleAdd = (title, image, rating, year) =>
    setMovieList([...movieList, { title, image, rating, year }]);
  console.log(movieList);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  const handleDelete = (idClick) => {
    setMovieList(movieList.filter((el) => el.id !== idClick));
  };
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState(0);
  const ratingChanged = (newRating) => {
    setRate(newRating);
  };

  return (
    <div className="movie">
      <MovieNav
        handleAdd={handleAdd}
        movies={movieList}
        handleShow={handleShow}
        handleHide={handleHide}
        search={search}
        setSearch={setSearch}
        ratingChanged={ratingChanged}
      />
      {show ? (
        <AddMovie
          handleShow={handleShow}
          handleAdd={handleAdd}
          handleHide={handleHide}
        />
      ) : null}
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <MovieList
                movies={movieList}
                handleDelete={handleDelete}
                search={search}
                rate={rate}
              />
            )}
          />
          <Route
            exact
            path="/movieList/:id"
            render={(props) => <Details {...props} movieList={movieList} />}
          />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;