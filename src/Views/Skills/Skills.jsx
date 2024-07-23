import './Skills.css'
import { HTML, GraphQL, JQuery, JavaScript, AWS, Bootstrap, Cloudinary, CSS, Express, Firebase, Framer, Git, MySql, Nodejs, PostgreSQL, Redux, Tailwind, ReactJS, Vite, Sequelize } from '../../components/svgs/svgs'

export default function Skills() {
  return (
    <section
      id='Skills'
      className='flex flex-col items-start justify-start ml-24 mt-44'
    >
      <h1 className='text-[40px] text-[#ffda9e] mb-5 text-[Quicksand, sans-serif]'>Skills</h1>

      <div className='grid items-center justify-center w-full grid-cols-3 gap-4 mt-5'>
        <div className='flex flex-col items-center justify-center'>
          <HTML />
          <p className='text-[#ffda9e] text-[20px]'>HTML5</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <CSS />
          <p className='text-[#ffda9e] text-[20px]'>CSS3</p>
        </div>

        <div className='flex flex-col items-center justify-center '>
          <JavaScript />
          <p className='text-[#ffda9e] text-[20px]'>JavaScript</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <Tailwind />
          <p className='text-[#ffda9e] text-[20px]'>Tailwind</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <Bootstrap />
          <p className='text-[#ffda9e] text-[20px]'>Bootstrap</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <JQuery />
          <p className='text-[#ffda9e] text-[20px]'>JQuery</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <Nodejs />
          <p className='text-[#ffda9e] text-[20px]'>Node.js</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <Express />
          <p className='text-[#ffda9e] text-[20px]'>Express</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <ReactJS />
          <p className='text-[#ffda9e] text-[20px]'>React</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <Redux />
          <p className='text-[#ffda9e] text-[20px]'>Redux</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <Vite />
          <p className='text-[#ffda9e] text-[20px]'>Vite</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <Framer />
          <p className='text-[#ffda9e] text-[20px]'>Framer</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <Git />
          <p className='text-[#ffda9e] text-[20px]'>Git</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <Cloudinary />
          <p className='text-[#ffda9e] text-[20px]'>Cloudinary</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <GraphQL />
          <p className='text-[#ffda9e] text-[20px]'>GraphQL</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <MySql />
          <p className='text-[#ffda9e] text-[20px]'>MySQL</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <PostgreSQL />
          <p className='text-[#ffda9e] text-[20px]'>PostgreSQL</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <Firebase />
          <p className='text-[#ffda9e] text-[20px]'>Firebase</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <AWS />
          <p className='text-[#ffda9e] text-[20px]'>AWS</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <Sequelize />
          <p className='text-[#ffda9e] text-[20px]'>Sequelize</p>
        </div>
      </div>
    </section>
  )
}
