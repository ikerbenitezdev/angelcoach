import { motion } from "framer-motion";

// Definimos una variante sencilla para reutilizar
const itemVariants = {
  hidden: { opacity: 0, x: 100 },
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

function Timeline() {
  const pasos = [
    "Análisis de metabolismo y objetivos.",
    "Nutrición y entrenamiento a medida.",
    "Feedback constante para evitar el abandono."
  ];

  return (
    <ul className="timeline timeline-vertical font-bold w-full p-5" style={{ "--timeline-col-start": "0px" }}>
      {pasos.map((texto, index) => (
        <motion.li 
          key={index}
          custom={index} // Pasamos el índice a la variante
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Se anima al ver el 50% del elemento
          variants={itemVariants}
          className='min-h-[100px]'
        >
          {index !== 0 && <hr className="bg-black" />} {/* El primer li no lleva hr arriba en DaisyUI */}
          
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-8 w-8 text-black">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
          
          <div className="timeline-end timeline-box text-lg shadow-md w-full ml-2 bg-white">
            {texto}
          </div>

          <hr className="bg-black" />
        </motion.li>
      ))}
    </ul>
  );
}
export default Timeline;