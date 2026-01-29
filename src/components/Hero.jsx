import { motion } from "framer-motion";

function Hero() {
    // Configuración para que el texto entre desde la izquierda
    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    };

    // Configuración para que la imagen entre desde la derecha
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, x: 50 },
        visible: { opacity: 1, scale: 1, x: 0 }
    };

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col gap-10 lg:flex-row-reverse lg:gap-24">
                
                {/* LADO DE LA IMAGEN Y NOMBRE */}
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center"
                >
                    <img
                        src="angel.jpg"
                        className="max-w-xs rounded-full object-cover shadow-2xl border-4 border-blue-400"
                        alt="Angel Taltavull"
                    />
                    <motion.h3 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 0.8 }}
                        className="font-bold mt-3 text-lg text-black"
                    >
                        Angel Taltavull
                    </motion.h3>
                    <motion.h3 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 1 }}
                        className="mt-1 text-md text-gray-700"
                    >
                        Entrenador & Dietista
                    </motion.h3>
                </motion.div>

                {/* LADO DEL TEXTO Y CTA */}
                <div className="flex-col md:text-left md:flex-col-reverse">
                    <motion.h1 
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        transition={{ duration: 0.6 }}
                        className="text-5xl font-bold"
                    >
                        Consigue tu <strong className="text-blue-400">cambio!</strong>
                    </motion.h1>

                    <motion.p 
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="py-6"
                    >
                        Sin dietas extremas ni entrenamientos imposibles
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <a 
                            href="https://cal.com/iker-benitez-soria-6ywfht/15min?overlayCalendar=true" 
                            target="_blank" 
                            className="relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-xl group hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:scale-105 active:scale-95"
                        >
                            <span className="absolute w-0 h-full transition-all duration-500 ease-out bg-white opacity-10 group-hover:w-full left-0"></span>
                            
                            <span className="relative flex items-center gap-2">
                                Reserva tu Asesoría Gratuita
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    strokeWidth={2.5} 
                                    stroke="currentColor" 
                                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );    
}

export default Hero;