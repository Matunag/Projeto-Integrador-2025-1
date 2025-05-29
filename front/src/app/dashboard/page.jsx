"use client"

import { FiMenu } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { CiMedicalClipboard } from "react-icons/ci";
import { MdScreenSearchDesktop } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";
import Chart from "react-google-charts";

export default function Dashboard() {
    return (
        <div className="w-full h-screen bg-[#F9F5F5] flex flex-col gap-7">
            <section className="bg-[#FFD8D8] w-full flex items-center justify-between px-5 py-3">
                <FiMenu 
                    className="w-10 lg:w-12 h-fit lg:mr-16"
                />

                <div className="flex flex-col items-center">
                    <img
                        src="/Logo_SobreVidas_Sem_Fundo.png"
                        alt="Logo ou imagem decorativa"
                        className="w-24 h-auto"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <p className="text-xl hidden lg:block">Perfil</p>
                    <HiOutlineUserCircle 
                        className="w-12 lg:w-16 h-fit"
                    />
                </div>
            </section>

            <section className="flex px-8">
                <div className="flex flex-col justify-between w-1/3 h-[80vh]">
                    <button className="flex items-center px-5 py-3 gap-3 text-xl bg-white shadow-md shadow-gray-400 rounded-lg">
                        <CiMedicalClipboard className="w-12 h-fit"/>
                        Preencher ficha citopatológica
                    </button>

                    <button className="flex items-center px-5 py-3 gap-3 text-xl bg-white shadow-md shadow-gray-400 rounded-lg">
                        <MdScreenSearchDesktop className="w-12 h-fit"/>
                        Consultar pacientes cadastrados
                    </button>

                    <button className="flex items-center px-5 py-3 gap-3 text-xl bg-white shadow-md shadow-gray-400 rounded-lg">
                        <ImStatsDots className="w-12 h-fit"/>
                        Estatística
                    </button>
                    
                    <div className="h-[55%] px-5 flex flex-col justify-center gap-3 text-xl bg-white shadow-md shadow-gray-400 rounded-lg">
                        <p>Pacientes por nível de risco</p>
                        <div className="flex justify-evenly text-lg">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-3 bg-[#4CAF50]"/>
                                Baixo
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-3 bg-[#FFC107]"/>
                                Médio
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-3 bg-[#F44236]"/>
                                Alto
                            </div>
                        </div>
                        <Chart
                            chartType="PieChart"
                            data={[
                                ["Nível de risco", "Número de pacientes"],
                                ["Alto", 4],
                                ["Médio", 8],
                                ["Baixo", 11]
                            ]}
                            options={{
                                pieHole: 0.6,
                                pieSliceText: "none",
                                legend: "none",
                                chartArea: {
                                    width: "100%",
                                    height: "100%"
                                },
                                colors: ["#F44236", "#FFC107", "#4CAF50"]
                            }}
                            width={"100%"}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}