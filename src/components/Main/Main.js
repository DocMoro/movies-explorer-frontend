import './Main.scss';

import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';

export default function Main({loggedIn, cbNavPopup}) {
  return (
    <>
      <Header 
        loggedIn={loggedIn}
        cbNavPopup={cbNavPopup}
      />
      <main className='main'>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
} 