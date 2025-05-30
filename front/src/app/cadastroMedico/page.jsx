export default function cadastroMedico() {
  return (
        <div className="max-w-screen-md mx-auto w-full h-screen flex justify-center items-center px-2">
        <div className="bg-white w-full sm:w-4/5 flex flex-col rounded-xl gap-3 px-5 py-7 shadow-2xl">
            <p className="text-xl font-bold border-b-2 border-[#B56AAA] w-fit mb-4">
            Cadastro de médico
            </p>

            <form className="flex flex-col gap-2">
            <div className="grid grid-cols-5 gap-5">
                <label className="col-span-3 flex flex-col">
                Nome Completo:
                <input
                    className="bg-[#F4EEEE] rounded-md w-full mt-1 outline-none px-1 shadow-md"
                    type="text"
                />
                </label>

                <label className="col-span-2 flex flex-col">
                CRM:
                <input
                    className="bg-[#F4EEEE] rounded-md w-full mt-1 outline-none px-1 shadow-md"
                    type="text"
                />
                </label>
            </div>

            <div className="grid grid-cols-5 gap-4">
                <label className="col-span-3 flex flex-col">
                Email:
                <input
                    className="bg-[#F4EEEE] rounded-md w-full mt-1 outline-none px-1 shadow-md"
                    type="email"
                />
                </label>

                <label className="col-span-2 flex flex-col">
                CPF:
                <input
                    className="bg-[#F4EEEE] rounded-md w-full mt-1 outline-none px-1 shadow-md"
                    type="text"
                />
                </label>
            </div>

            <label className="flex flex-col w-3/6">
                Senha:
                <input
                className="bg-[#F4EEEE] rounded-md w-full mt-1 outline-none px-1 shadow-md"
                type="password"
                />
            </label>

            <div className="flex justify-between items-end">
                <label className="flex flex-col w-3/6">
                Digite a senha novamente:
                <input
                    className="bg-[#F4EEEE] rounded-md w-full mt-1 outline-none px-1 shadow-md"
                    type="password"
                />
                </label>

                <div className="flex">
                <button
                    className="bg-[#FF3333] text-white p-1 px-2 rounded-xl shadow-lg mr-2 hover:bg-[#CC0000]"
                    type=""
                >
                    Cancelar
                </button>
                
                <button
                    className="bg-[#28a745] text-white p-1 px-2 rounded-xl shadow-lg hover:bg-[#1e7e34]"
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
