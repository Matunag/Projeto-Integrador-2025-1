"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const diasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];
const diasDoMes = Array.from({ length: 30 }, (_, i) => i + 1);

export default function AgendarConsulta() {
    const [mostrarPopup, setMostrarPopup] = useState(false);
    const [unidadeSelecionada, setUnidadeSelecionada] = useState("");
    const [horarioSelecionado, setHorarioSelecionado] = useState("");
    const [diaSelecionado, setDiaSelecionado] = useState(null);

    useEffect(() => {
        document.body.style.overflow = mostrarPopup ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [mostrarPopup]);

    return (
        <div className="w-full h-screen bg-[#FFF1F1] text-xl xs:text-2xl">
            <section className="bg-[#FFD8D8] w-full flex items-center justify-between px-5 py-3 font-semibold">
                <Link href={"/dashboardPaciente"} className="w-[60px]">
                    <FiArrowLeft className="w-10 h-fit" />
                </Link>
                <p>
                    Agendamento <br />
                    de consulta
                </p>
                <img
                    src="/Logo_SobreVidas_Sem_Fundo.png"
                    alt="Logo ou imagem decorativa"
                    className="w-24 h-auto"
                />
            </section>

            <div className="w-full flex flex-col mt-[25px] items-start gap-4">
                <label className="ml-[20px]">Unidade:</label>
                <select
                    className="bg-transparent border-[2px] border-[#6f6e6e] p-1 rounded-xl text-[#6f6e6e] outline-none ml-[25px] mb-[15px]"
                    value={unidadeSelecionada}
                    onChange={(e) => setUnidadeSelecionada(e.target.value)}
                >
                    <option value="">Selecione uma unidade</option>
                    <option value="Guapó, o fim dos tempos">Guapó, o fim dos tempos</option>
                    <option value="Maria das dores">Maria das dores</option>
                </select>

                <label className="ml-[20px]">Selecione o dia:</label>
                <div className="w-[80%] bg-[#e3e2e2] flex flex-col items-center py-3 rounded-xl shadow-md shadow-blue-600 self-center">
                    <div className="grid grid-cols-7 w-[90%] text-center font-semibold">
                        {diasDaSemana.map((dia, idx) => (
                            <div key={idx} className="text-[#B56AAA] py-1">
                                {dia}
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-7 w-[90%] text-center text-gray-700">
                        {diasDoMes.map((dia) => (
                            <div
                                key={dia}
                                className={`py-1 hover:bg-[#E3C7EB] cursor-pointer rounded ${
                                    diaSelecionado === dia ? "bg-[#E3C7EB]" : ""
                                }`}
                                onClick={() => setDiaSelecionado(dia)}
                            >
                                {dia}
                            </div>
                        ))}
                    </div>
                </div>

                <label className="mt-[25px] ml-[20px]">Horários disponíveis:</label>
                <select
                    className="bg-transparent border-[2px] border-[#6f6e6e] p-1 rounded-xl text-[#6f6e6e] outline-none ml-[25px] mb-[20px]"
                    value={horarioSelecionado}
                    onChange={(e) => setHorarioSelecionado(e.target.value)}
                >
                    <option value="">Selecione um horário</option>
                    <option value="08:00">08:00</option>
                    <option value="09:30">09:30</option>
                    <option value="11:00">11:00</option>
                </select>

                <button
                    onClick={() => setMostrarPopup(true)}
                    className="self-center mt-[15px] p-2 bg-[#3550BD] text-white rounded-xl"
                    id="consulta"
                >
                    Marcar Consulta
                </button>

                {mostrarPopup && (
                    <div className="w-full h-screen bg-[#cfcfcf] bg-opacity-55 fixed top-0 left-0 flex justify-center items-center" id="fundo">
                        <div className="w-[75%] h-[50%] bg-[#FFF1F1] px-4 gap-6 flex flex-col justify-center rounded-2xl">
                            <p>
                                Data de realização: <br />
                                {diaSelecionado ? `${diaSelecionado.toString().padStart(2, "0")}/06/2025` : "Não selecionado"}
                            </p>

                            <p>
                                Horário de realização: <br />
                                {horarioSelecionado || "Não selecionado"}
                            </p>

                            <p>
                                Ubs para realização do exame: <br />
                                {unidadeSelecionada || "Não selecionada"}
                            </p>

                            <div className="w-[90%] flex justify-between self-center mt-[20px]">
                                <button
                                    onClick={() => setMostrarPopup(false)}
                                    className="bg-[#F03636] text-white rounded-xl py-1 px-4"
                                >
                                    Voltar
                                </button>
                                <Link href={"/dashboardPaciente"} className="bg-[#25943E] text-white rounded-xl py-1 px-4">
                                    Confirmar
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
