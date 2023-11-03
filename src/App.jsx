import './App.css'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import PagesHome from './views/PagesHome/PageHome'
import Header from './components/Header/Header'
import PagesIdProd from './views/PagesIdProd/PagesIdProd'
import Sidebar from './components/Sidebar/Sidebar'
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer/Footer'
import PageLogin from './views/PageLogin/PageLogin'
import PageRegister from './views/PageRegister/PageRegiste'

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Sidebar />
        <Routes>
          <Route path='/register' Component={PageRegister} />
          <Route path='/login' Component={PageLogin} />
          <Route path='/' Component={PagesHome} />
          <Route path='/:prod' Component={PagesIdProd}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
