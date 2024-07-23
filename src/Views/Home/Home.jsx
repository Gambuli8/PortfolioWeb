import Bienvenida from '../../components/Bienvenida/Bienvenida'
import './home.css'
import Proyectos from '../Proyectos/Proyectos'
import Skills from '../Skills/Skills'
import Experiencia from '../../components/Experiencia/Experiencia'
import Footer from '../../components/footer/Footer'

export default function Home() {
  return (
    <div className='min-h-screen pb-10'>
      <Bienvenida />
      <Experiencia />
      <Proyectos />
      <Skills />
      <Footer />
    </div>
  )
}
