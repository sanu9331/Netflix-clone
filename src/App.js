import './App.css';
import Nav from './components/Nav';
import Banner from './components/body/Banner';
import MovieCat from './components/body/MovieCat';
import Footer from './components/body/Footer';
import { popular, action, horror, comedy } from '../src/constants/constants';
import helloWorld from './components/body/helloWorld';





function App() {
  return (
    <>
      <Nav />
      <Banner />
      <MovieCat title='popular' url={popular} />
      <MovieCat title='action' isSmall url={action} />
      <MovieCat title='horror' isSmall url={horror} />
      <MovieCat title='top-rated' url={popular} />
      <MovieCat title='comedy' isSmall url={comedy} />

      <Footer />

    </>
  );
}

export default App;
