import './App.css';
import Row from './Components/Row'
import request from './Assets/requests'
function App() {
  return (
    <div className="App">
      <Row title = "NeFlex original" fetchUrl = {request.fetchNetflixOriginals}/>
      <Row title = "Trending Now"/>
        
     
    </div>
  );
}

export default App;
