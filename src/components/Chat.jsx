function Chat() {
  return (
    <div className="relative flex flex-col gap-2 max-w-lg mx-auto p-10 overflow-hidden md:rounded-lg shadow-lg text-white">
      {/* Capa de imagen con opacidad - Usamos z-0 y ruta absoluta */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-55"
        style={{ 
          backgroundImage: "url('/footer.png')",
          zIndex: 0 
        }}
      ></div>

      {/* Capa de color para asegurar legibilidad */}
      <div className="absolute inset-0 bg-black opacity-40" style={{ zIndex: 1 }}></div>      
      
      {/* Contenedor de los mensajes - z-10 para estar sobre el fondo */}
      <div className="relative z-10 w-full">
        
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
          <div className="chat-header text-white">
            Juan <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble bg-white text-black">¡Estoy dispuesto a cambiar!</div>
          <div className="chat-footer opacity-50">Enviado</div>
        </div>

        {/* --- Mensajes de Angel (Derecha) --- */}
        <div className="chat chat-end">
          <div className="w-10 chat-image avatar">
            {/* Espacio reservado con w-10 */}
          </div>
          <div className="chat-header text-white">
            Angel <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble chat-bubble-primary">Perfecto!</div>
        </div>

        <div className="chat chat-end">
          <div className="w-10 chat-image avatar"></div>
          <div className="chat-bubble chat-bubble-primary">Evaluación Inicial 📖</div>
        </div>

        <div className="chat chat-end">
          <div className="w-10 chat-image avatar"></div>
          <div className="chat-bubble chat-bubble-primary">Plan personalizado 📏</div>
        </div>

        <div className="chat chat-end">
          <div className="w-10 chat-image avatar"></div>
          <div className="chat-bubble chat-bubble-primary">Acompañamiento 24/7 🕑</div>
        </div>

        {/* --- Mensaje Final de Angel (Con Avatar) --- */}
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Avatar Angel" src="/angel.png" />
            </div>
          </div>
          <div className="chat-bubble chat-bubble-primary font-bold">
            ¿Empezamos <span className="text-black">hoy?</span>
          </div>
          <div className="chat-footer opacity-50">Visto 12:46</div>
        </div>

      </div>
    </div>
  );
}

export default Chat;