import './App.css'
/* import useFetch from './hook/useFetch'; */
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import PagesHome from './views/PagesHome/PageHome'
import Header from './components/Header/Header'

function App() {
  
  /* const { data,loading,error } = useFetch('https://fakestoreapi.com/products'); */

  return (
    <>
      {/* <h1>Lista De Productos Por Fetch</h1>
      <ul>
        {error && <li>{error}</li>}
        {loading && <li>Loading...</li>}
        {
          data?.map(d => {
            return (
                <li key={d.id}>
                  {d.title}
                </li>
              )
          })
        }
      </ul> */}
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
