export default function CadastroEnfermeiro() {
  return (
        <div className="max-w-screen-md mx-auto w-full h-screen flex justify-center items-center px-2">
        <div className="bg-white w-4/5 xm:w-3/4 sm:w-4/5 sm:flex sm:flex-col rounded-xl gap-3 px-5 py-7 shadow-2xl">
            <p className="text-xl font-bold border-b-2 border-[#B56AAA] w-fit mb-4">
            Cadastro de enfermeiro
            </p>

            <form className="sm:flex sm:flex-col gap-2">
            <div className="sm:grid sm:grid-cols-5 gap-5">
                <label className="col-span-3">
                Nome Completo:
                <input
                    className="bg-[#F4EEEE] rounded-md w-full h-6 my-1 outline-none px-1 shadow-md"
                    type="text"
                />
                </label>

                <label className="sm:col-span-2 mt-1">
                COREN:
                <input
                    className="bg-[#F4EEEE] rounded-md w-full my-1 outline-none px-1 shadow-md"
                    type="text"
                />
                </label>
            </div>

            <div className="sm:grid sm:grid-cols-5 gap-5">
                <label className="col-span-3">
                Email:
                <input
                    className="bg-[#F4EEEE] rounded-md w-full my-1 outline-none px-1 shadow-md"
                    type="email"
                />
                </label>

                <label className="col-span-2 flex flex-col">
                CPF:
                <input
                    className="bg-[#F4EEEE] rounded-md w-full my-1 outline-none px-1 shadow-md"
                    type="text"
                />
                </label>
            </div>

            <label className="w-full sm:w-3/6">
                Senha:
                <input
                className="bg-[#F4EEEE] rounded-md w-full my-1 outline-none px-1 shadow-md"
                type="password"
                />
            </label>

            <div className="sm:flex sm:justify-between sm:items-end">
                <label className="w-full sm:w-3/6">
                Digite a senha novamente:
                <input
                    className="bg-[#F4EEEE] rounded-md w-full my-1 outline-none px-1 shadow-md"
                    type="password"
                />
                </label>

                <div className="flex justify-center sm:justify-start">
                <button
                    className="bg-[#FF3333] text-white p-1 px-2 rounded-xl shadow-lg mr-2 hover:bg-[#CC0000] mt-7 sm:mt-0"
                    type=""
                >
                    Cancelar
                </button>
                
                <button
                    className="bg-[#28a745] text-white p-1 px-2 rounded-xl shadow-lg hover:bg-[#1e7e34] ml-10 mt-7 sm:mt-0"
                    type="submit"
                >
                    Enviar
                </button>
                </div>
            </div>
            </form>
        </div>
        </div>
  );
}
