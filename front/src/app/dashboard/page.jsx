"use client"

import { FiMenu } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { CiMedicalClipboard } from "react-icons/ci";
import { MdScreenSearchDesktop } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";
import Chart from "react-google-charts";
import RecentPacient from "@/components/RecentPacient";
import { pacients } from "@/dados ficticios/dadosFicticios";

export default function Dashboard() {
    return (
        <div className="w-full h-screen bg-[#F9F5F5] flex flex-col">
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

            <section className="h-[90vh] grid gap-5 px-8 py-5">

                <div className="flex justify-between w-full">

                    <div className="w-[35%] flex flex-col justify-between">
                        <button className="hover:scale-110 transition w-full flex items-center px-5 py-3 gap-3 text-xl bg-white shadow-md shadow-gray-400 rounded-lg">
                            <CiMedicalClipboard className="w-12 h-fit" />
                            Preencher ficha citopatológica
                        </button>

                        <button className="hover:scale-110 transition w-full flex items-center px-5 py-3 gap-3 text-xl bg-white shadow-md shadow-gray-400 rounded-lg">
                            <MdScreenSearchDesktop className="w-12 h-fit" />
                            Consultar pacientes cadastrados
                        </button>

                        <button className="hover:scale-110 transition w-full flex items-center px-5 py-3 gap-3 text-xl bg-white shadow-md shadow-gray-400 rounded-lg">
                            <ImStatsDots className="w-12 h-fit" />
                            Estatística
                        </button>
                    </div>

                    <div className="w-[35%] flex flex-col justify-between px-5 py-3 text-xl bg-white shadow-md shadow-gray-400 rounded-lg">
                        <p>Pacientes recentes</p>

                        {
                            pacients.map((pacient, index) => (
                                <RecentPacient pacientData={pacient} key={index} />
                            ))
                        }
                    </div>

                    <div className="w-[20%] flex flex-col p-5 gap-3 items-center text-xl bg-white shadow-md shadow-gray-400 rounded-lg">
                        <p>Exames pendentes</p>
                        <div className="h-full flex justify-center items-center aspect-square border-4 border-[#D9D9D9] rounded-full">
                            <p className="text-[#D9D9D9] text-8xl">10</p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-between">

                    <div className="w-[35%] px-5 pt-3 flex flex-col gap-3 text-xl bg-white shadow-md shadow-gray-400 rounded-lg">
                        <p>Pacientes por nível de risco</p>
                        <div className="flex justify-evenly text-lg">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-3 bg-[#4CAF50]" />
                                Baixo
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-3 bg-[#FFC107]" />
                                Médio
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-3 bg-[#F44236]" />
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

                    <div className="w-[60%] flex flex-col px-5 pt-3 text-xl bg-white shadow-md shadow-gray-400 rounded-lg">
                        <p>Número de consultas por mês</p>
                        <Chart
                            chartType="ColumnChart"
                            data={[
                                ["Mês", "Número de consultas"],
                                ["Jan", 19],
                                ["Fev", 20],
                                ["Mar", 23],
                                ["Abr", 33],
                                ["Mai", 27],
                                ["Jun", 36],
                                ["Jul", 30],
                                ["Ago", 39],
                                ["Set", 26],
                                ["Out", 40],
                                ["Nov", 21],
                                ["Dez", 29]
                            ]}
                            options={{
                                legend: "none",
                                
                            }}
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}