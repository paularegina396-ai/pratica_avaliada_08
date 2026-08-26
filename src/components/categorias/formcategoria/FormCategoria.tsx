function FormCategoria() {
  return (
    <div className="container flex flex-col items-center justify-center px-2 pt-4 mx-auto">
      <h1 className="my-8 text-3xl text-center md:text-4xl">
        Cadastrar Categoria
      </h1>

      <form className="flex flex-col w-full max-w-md gap-4 px-2 md:max-w-1/2">
        <div className="flex flex-col gap-2 ">
          <label htmlFor="tipo">Categoria</label>
          <input
            type="text"
            placeholder="Categoria"
            id='tipo'
            name='tipo'
            className="p-2 text-base bg-white border-2 rounded border-slate-700 utral-800 md:text-lg"
            required
          />
        </div>
        <button
          className="flex justify-center w-full py-2 mx-auto text-base rounded text-slate-100 bg-slate-400 hover:bg-slate-800 md:w-1/2 md:text-lg"
          type="submit"
        >
          <span>Cadastrar</span>
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
