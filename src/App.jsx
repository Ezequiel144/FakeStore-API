import './App.css'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import PagesHome from './views/PagesHome/PageHome'
import Header from './components/Header/Header'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' Component={PagesHome} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
