const MessageForm = () => {

  return (
    <div>
      <p className="text-center">¿Tienes alguna pregunta?</p>
      <form className="flex flex-col gap-4 border w">
        <div>
          <p>Nombre</p>
          <input
            type="text"
            name="name"
            clas
            required
          />
        </div>
        <div>
          <p>Correo Electronico</p>
          <input
            type="email"
            name="name"
            
          />
        </div>
        <div>
          <p>Numero de telefono</p>
          <input
            type="number"
            name="number"
            placeholder="Opcional"
            required

          />
        </div>
        <div>
          
          <button>Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default MessageForm;