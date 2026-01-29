function Chat() {
  return (
<div className="relative flex flex-col gap-2 max-w-lg mx-auto p-10 overflow-hidden md:rounded-lg shadow-lg text-white">
  {/* Capa de imagen con opacidad */}
  <div 
    className="absolute inset-0 bg-[url('footer.png')] bg-cover bg-center bg-no-repeat opacity-55 -z-10"
  ></div>

  {/* Capa de color para asegurar legibilidad (opcional) */}
  <div className="absolute inset-0 bg-black opacity-40 -z-10"></div>      
      {/* --- Mensaje de Juan (Izquierda) --- */}
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Avatar Juan"
              src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
            />
          </div>
        </div>
        <div className="chat-header">
          Juan <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">Estoy dispuesto a cambiar!</div>
        <div className="chat-footer opacity-50">Enviado</div>
      </div>

      {/* --- Mensaje 1 de Angel (Derecha) --- */}
      <div className="chat chat-end">
        <div className="w-10 chat-image avatar">
          {/* <div className="w-10 rounded-full">
            <img alt="Avatar Angel" src="angel.png" />
          </div> */}
        </div>
        <div className="chat-header">
          Angel <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble chat-bubble-primary">Perfecto!</div>
      </div>
      <div className="chat chat-end">
        <div className="w-10 chat-image avatar">
        </div>
      
        <div className="chat-bubble chat-bubble-primary">Evaluación Inicial 📖</div>
      </div>
      <div className="chat chat-end">
        <div className="w-10 chat-image avatar">
        </div>
      
        <div className="chat-bubble chat-bubble-primary">Plan personalizado 📏</div>
      </div>
      <div className="chat chat-end">
        <div className="w-10 chat-image avatar">
        </div>
      
        <div className="chat-bubble chat-bubble-primary">Acompañamiento 24/7 🕑</div>
      </div>

      {/* --- Mensaje 2 de Angel (Derecha - Seguido) --- */}
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Avatar Angel" src="angel.png" />
          </div>
        </div>
        {/* Puedes omitir el Header aquí si es el mismo minuto */}
        <div className="chat-bubble chat-bubble-primary">¿Empezamos hoy mismo?</div>        <div className="chat-footer opacity-50">Visto 12:46</div>
      </div>

    </div>
  );
}

export default Chat;