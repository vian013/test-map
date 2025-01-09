import styled from 'styled-components';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Activities from './components/Activities/Activities';
import Experience from './components/Experience/Experience';
import Moments from './components/Moments/Moments';
import Footer from './components/Footer/Footer';
import Explorer from './components/Explorer/Explorer';
import Carousel from './components/Carousel/Carousel';
import Map from './components/Map/Map';

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Hero />
      <Activities />
      <Map />
      <Carousel />
      <Experience />
      <Moments />
      <Explorer />
      <Footer />
    </AppContainer>
  );
}

export default App;
