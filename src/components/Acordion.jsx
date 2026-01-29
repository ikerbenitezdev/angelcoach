function Acordion() {
  return (
    <>
    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title font-semibold">¿Necesito dedicarle muchas horas al día para ver resultados?</div>
  <div className="collapse-content text-sm">Rotundamente no. Mi método se basa en la eficiencia, no en el agotamiento. Diseñaré para ti sesiones optimizadas que puedes completar en 45-60 minutos, adaptadas a tu disponibilidad real. Lo que importa no es cuánto tiempo pasas entrenando, sino la intensidad y la técnica de lo que haces. Si tienes 3 horas a la semana, tenemos un plan.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">¿Tendré que seguir una dieta estricta o dejar de comer lo que me gusta?</div>
  <div className="collapse-content text-sm">Olvídate de las dietas milagro y de comer solo pollo y brócoli. Mi enfoque es la nutrición flexible. Aprenderás a cuadrar tus alimentos favoritos dentro de tus objetivos para que el plan sea sostenible a largo plazo. Si no puedes disfrutar de una cena fuera de casa de vez en cuando, el plan no es para ti; mi meta es que el fitness se adapte a tu vida, no al revés.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">Nunca he entrenado o hace mucho que no lo hago, ¿este programa es demasiado avanzado para mí?</div>
  <div className="collapse-content text-sm">Al contrario, es el lugar perfecto para empezar. Cada ejercicio de tu plan viene con vídeos explicativos y progresiones específicas para tu nivel actual. Empezaremos desde tu base real para asegurar que cada movimiento sea seguro y efectivo, evitando lesiones y construyendo una técnica sólida desde el primer día. Estaré contigo en cada paso del proceso.</div>
</div>
</>
  );
}

export default Acordion;