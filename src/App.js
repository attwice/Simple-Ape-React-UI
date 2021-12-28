import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/nabvar';
import Banner from './components/banner';
import Team from './components/team';
import Community from './components/community';
import FAQ from './components/faq';
import Gallery from './components/gallery';

import './styles/navbar.css';
import './styles/main.css';
import './styles/fontawesome.min.css'

function App() {
  return (
    <Fragment>
      <Navigation />
      <Banner />
      <Gallery />
      <Team />
      <FAQ />
      <Community />
    </Fragment>
  );
}

export default App;
