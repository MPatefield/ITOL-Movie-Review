import './App.css'
import Header from './assets/components/Header/Header.jsx'
import Footer from './assets/components/Footer/Footer.jsx'
import Movies from './assets/components/Movies/Movies.jsx'


function App() {


  return (
    <>
      <div className="app">

        <Header />

        <main>
          <Movies />
        </main>

        <Footer/>

      </div>
    </>
  )
}

export default App
