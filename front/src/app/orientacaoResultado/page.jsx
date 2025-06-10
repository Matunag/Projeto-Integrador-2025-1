import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import ExamOrientation from "@/components/ExamOrientation"
import { exames } from "@/dados ficticios/dadosFicticios";

export default function OrientacaoResultado() {
    return (
        <div className="w-full h-screen text-xl xs:text-2xl">
            <section className="bg-[#FFD8D8] w-full flex items-center justify-between px-5 py-3 font-semibold">
                <Link
                        href={"/dashboardPaciente"} className="w-[60px]"
                    >
                        <FiArrowLeft className="w-10 h-fit"/>
                    </Link>

                <p className="text-center">
                    Orientação <br />
                    pós-resultado
                </p>

                <img
                    src="/Logo_SobreVidas_Sem_Fundo.png"
                    alt="Logo ou imagem decorativa"
                    className="w-24 h-auto"
                />
            </section>

            <div className="w-full flex flex-col items-center mt-7 gap-6 ">

                {
                    exames.map((exames, index) =>(
                    <ExamOrientation exam={exames} key={index} />
                    ))
                }
                
            <div>


            </div>
            </div>

        </div>
    )
}