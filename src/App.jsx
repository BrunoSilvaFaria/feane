import Header from './components/Header/Header';
import './global.css'
// import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';

import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <Header />

      <Outlet />
      
      {/* <Footer /> */}
      
      <ScrollToTop />
    </>
  )
}

export default App;