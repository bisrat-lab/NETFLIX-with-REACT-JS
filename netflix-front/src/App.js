import './App.css';
import Row from './Components/Row'
import Banner from './Components/Banner/Banner';
import Nav from './Components/Nav/Nav'
import request from './Assets/requests'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title = "NeFlex original" fetchUrl = {request.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title = "Trending Now" fetchUrl={request.fetchTrending}/>
      <Row title = "Top Rated" fetchUrl={request.fetchTopRatedMovies}/>
     
      <Row title = "Action Movies" fetchUrl={request.fetchActionMovies}/>
      <Row title = "Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
      <Row title = "Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
      <Row title = "Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
      
        
     
    </div>
  );
}

export default App;
