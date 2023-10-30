import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MyCard from './components/MyCard';
import MiImagen1 from './assets/img/dog-1.jpg'
import MiImagen2 from './assets/img/dog-2.jpg'
import MiImagen3 from './assets/img/dog-3.jpg'
import MiImagen4 from './assets/img/dog-4.jpg'
import Footer from './components/Footer';

function App() {

  return (
    <>
    <Header titulo="Adopta Un Perrito"/>
    <main className='my-doggies'>
    <MyCard image={MiImagen1} 
            name="Kim"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            tag="Amistoso"
            colorTag="danger"    
    />

<MyCard image={MiImagen2} 
            name="Matt"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            tag="Regalon"
            colorTag="success"    
    />

<MyCard image={MiImagen3} 
            name="Ringo"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            tag="Inteligente"
            colorTag="warning"    
    />

<MyCard image={MiImagen4} 
            name="Spike"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            tag="Pelosón"
            colorTag="info"    
    />

    </main>

    <footer>
      <Footer texto={<p className='mi-footer' >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>} />
    </footer>

    </>
  )
}

export default App
