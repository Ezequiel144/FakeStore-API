import './App.css'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import PagesHome from './views/PagesHome/PageHome'
import Header from './components/Header/Header'
import PagesIdProd from './views/PagesIdProd/PagesIdProd'
import Sidebar from './components/Sidebar/Sidebar'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Sidebar />
        <Routes>
          <Route path='/' Component={PagesHome} />
          <Route path='/:prod' Component={PagesIdProd}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
