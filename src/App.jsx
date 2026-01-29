import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Landing from './components/Landing'
import Chat from './components/Chat'
import Acordion from './components/Acordion'
import Footer from './components/Footer'
import Mobile from './components/Mobile'
import { motion } from "motion/react"
import Timeline from './components/Timeline'

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1, 
    x: 0,
    transition: {
      delay: i * 0.3, // i es el índice: el primero espera 0s, el segundo 0.3s, el tercero 0.6s
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

function App() {

  return (
    <>
      {/* <Header /> */}
      <div className='mt-10 mb-20'>
      <Hero />
      </div>
      <h1 className="text-3xl font-bold px-5 mt-30 mb-10">Lo que puedes <strong className="text-blue-400">lograr</strong> tan solo en <strong className="text-blue-400">90 dias</strong></h1>
      <section className='py-10  flex flex-col align-center justify-center gap-20 md:flex-row'>
        <div>

        {/* <h1 className="my-10 text-3xl font-bold">En tan solo en <strong className="text-blue-400">90</strong> dias</h1> */}
          <section className='h-full mx-auto'>

              {/* 1. aspect-[9/16]: Formato vertical de móvil (el contrario a 16/9) */}
            {/* 2. max-w-xs: Limita el ancho para que parezca un móvil real */}
            {/* 3. mx-auto: Lo centra en la pantalla */}
            {/* USAMOS UN ANCHO FIJO (w-80) PARA EVITAR QUE SE DEFORMEN AL MOVER LA BARRA */}
            <figure className="diff aspect-[9/16] w-80 mx-auto h-90 rounded-xl shadow-2xl" tabIndex={0}>
              
              <div className="diff-item-1" role="img" tabIndex={0}>
                <img 
                  alt="antes" 
                  src="antes.jpg" 
                  className="w-80 h-90 object-cover object-left" 
                />
              </div>
              
              <div className="diff-item-2" role="img">
                <img 
                  alt="despues" 
                  src="despues.jpg" 
                  className="w-80 h-90 object-cover object-left" 
                />
              </div>
              
              <div className="diff-resizer"></div>
            </figure>
          </section>
          </div>
          <div>
            <Timeline />
{/* <ul className="timeline timeline-vertical font-bold w-full p-5" style={{ "--timeline-col-start": "0px" }}>
  {/* PASO 1 */}
  {/* <li className='min-h-[120px]'>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-8 w-8 text-black">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end timeline-box text-lg shadow-md w-full ml-2">Análisis de metabolismo y objetivos.</div>
    <hr className="bg-black" />
  </li> */}

  {/* PASO 2 */}
  {/* <li className='min-h-[120px]'>
    <hr className="bg-black" />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-8 w-8 text-black">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end timeline-box text-lg shadow-md w-full ml-2">Nutrición y entrenamiento a medida.</div>
    <hr className="bg-black"/>
  </li> */}

  {/* PASO 3 */}
  {/* <li className='min-h-[120px]'>
    <hr className="bg-black" />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-8 w-8 text-black">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end timeline-box text-lg shadow-md w-full ml-2">Feedback constante para evitar el abandono.</div>
      <hr className="bg-black" />
  </li> */}

{/* </ul> */}
      </div>
      </section>
      <section className='py-10'>
        <h1 className="my-10 text-3xl font-bold">Asesoramiento personalizado <strong className="text-blue-400">24/7</strong></h1>
        <Chat />
      </section>
      {/* <Mobile /> */}
      <section className='py-20 px-5 bg-white'>
        <h1 className="mt-10 text-5xl font-bold max-w-lg mx-auto"><strong>¿Tu esfuerzo no se refleja en tus resultados?</strong></h1>
        <p className='text-xl pt-10 max-w-3xl mx-auto'><strong>¿Has trabajado duro para alcanzar tus metas sin ver los resultados que esperabas?</strong> Yo también lo he vivido y sé lo frustrante que es. Pero no te preocupes, ¡tiene <strong>solución</strong>! Lo clave es enfocarse en lo que realmente importa. Ellos lo <strong>lograron</strong>, y tú puedes ser el siguiente.</p>
      </section>
      <section className='text-xl bg-white pt-20'>
        <h1 className="mb-10 text-5xl font-bold max-w-lg mx-auto">Preguntas frecuentes</h1>
        <Acordion />
      </section>
      <Footer />
    </>
  )
}

export default App
