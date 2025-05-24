import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function LoginMedico() {
    return (
        <div className="max-w-screen-md mx-auto w-full h-screen flex justify-center items-center px-2">
            <div className="bg-white w-full sm:w-2/4 flex flex-col items-center border border-black rounded-xl gap-7 px-5 py-7">
            
                <div className="w-full flex items-center justify-between">
                    <Link
                        href={"/"}
                    >
                        <FiArrowLeft className="w-8 h-fit"/>
                    </Link>

                    <p className="font-bold text-xl border-b-2 border-[#FFB8B8] pb-2">Médico, faça o login!</p>

                    <div className="w-8"/>
                </div>

                <input 
                    type="number"
                    placeholder="CRM"
                    className="bg-[#F4EEEE] py-2 px-2 rounded-md"
                />

                <input 
                    type="text"
                    placeholder="Senha"
                    className="bg-[#F4EEEE] py-2 px-2 rounded-md"
                />

                <button 
                    className="text-center bg-[#FFB8B8] px-4 py-2 rounded-2xl"
                >
                    Entrar
                </button>

                <div className="flex w-full justify-around items-center">
                    <Link 
                        href=""
                        className="border-b-2 border-[#FFB8B8] pb-2"
                    >
                        <p>Esqueceu a senha?</p>
                    </Link>

                    <Link 
                        href=""
                        className=" text-center border-b-2 border-[#FFB8B8] pb-2"
                    >
                        <p>Não possui conta?</p>
                        <p>Cadastre-se</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}