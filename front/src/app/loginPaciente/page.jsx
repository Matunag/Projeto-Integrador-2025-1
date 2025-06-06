"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPaciente() {

    const router = useRouter()

    return (
        <div className="max-w-screen-md mx-auto w-full h-screen flex justify-center items-center px-2">
            
            <div className="bg-white w-11/12 xs:w-3/4 xm:w-3/5 sm:w-2/4 flex flex-col items-center rounded-xl gap-7 px-5 py-7 shadow-2xl">
            
                

                <img 
                    src="/Logo_SobreVidas.png" 
                    alt="Logo ou imagem decorativa"
                    className="w-24 h-auto mb-4"
                />


                <p className="font-bold text-xl border-b-2 border-[#FFB8B8] pb-2">Paciente, faça o login!</p>
                <input 
                    type="number"
                    placeholder="SUS"
                    className="bg-[#F4EEEE] p-1 sm:p-2 rounded-md outline-none"
                />

                <input 
                    type="text"
                    placeholder="Senha"
                    className="bg-[#F4EEEE] p-1 sm:p-2 rounded-md outline-none"
                />

                <button 
                    className="text-center border-2 border-[#FFB8B8] px-4 py-2 rounded-2xl"
                    onClick={() => router.replace('/dashboardPaciente')}
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
                        className="border-b-2 border-[#FFB8B8] text-center pb-2"
                    >
                        <p>Cadastre-se</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}