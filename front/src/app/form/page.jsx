"use client"

import Input from "@/components/FormInput";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

export default function Form() {

    const router = useRouter()

    return (
        <div className="w-full min-h-screen px-20 py-5 bg-[#F9F5F5] flex flex-col gap-10">
            <div className="flex justify-between">
                <button onClick={() => router.back()}>
                    <FiArrowLeft className="w-12 h-fit"/>
                </button>

                <p className="text-center text-3xl font-bold">
                    REQUISIÇÃO DE EXAME CITOPATOLÓGICO - COLO DE ÚTERO
                </p>

                <div className="w-12"/>
            </div>

            <form className="flex flex-col gap-10 mb-12">

                {/* Dados iniciais */}
                <section className="flex flex-col gap-5">
                    <div className="flex justify-between gap-5">
                        <Input name="UF" className="w-1/4" />
                        <Input name="CNES" type="number" className="w-1/4" />
                        <Input name="Nº Protocolo" type="number" className="w-1/4" />
                    </div>
                    <Input name="Unidade de Saúde" />
                    <div className="flex gap-5">
                        <Input name="Município" className="w-1/2" />
                        <Input name="Prontuário" className="w-1/2" />
                    </div>
                </section>

                {/* Informações pessoais */}
                <section className="flex flex-col gap-5">
                    <h2 className="text-xl font-bold text-center">INFORMAÇÕES PESSOAIS</h2>
                    <Input name="Cartão do SUS" className="w-1/3" />
                    <Input name="Nome Completo da Mulher" />
                    <Input name="Nome Completo da Mãe" />
                    <div className="flex gap-5">
                        <Input name="Apelido da Mulher" className="w-1/2" />
                        <Input name="CPF" className="w-1/2" />
                    </div>
                    <div className="flex gap-5">
                        <Input name="Nacionalidade" className="w-1/3" />
                        <Input name="Data de nascimento" type="date" className="w-1/3" />
                        <Input name="Idade" className="w-1/3" />
                    </div>
                </section>

                {/* Raça/cor */}
                <section>
                    <h3 className="font-medium mb-2">Raça/cor</h3>
                    <div className="flex gap-5 flex-wrap">
                        {["Branca", "Preta", "Parda", "Amarela", "Indígena/Etnia"].map((item) => (
                            <label key={item} className="flex items-center gap-1">
                                <input type="radio" name="cor" />
                                {item}
                            </label>
                        ))}
                        <input
                            type="text"
                            className="border-b border-black focus:outline-none"
                        />
                    </div>
                </section>

                {/* Dados residenciais */}
                <section className="flex flex-col gap-5">
                    <h2 className="text-xl font-bold text-center">DADOS RESIDENCIAIS</h2>
                    <Input name="Logradouro" />
                    <div className="flex gap-5">
                        <Input name="Número" className="w-1/4" />
                        <Input name="Complemento" className="w-3/4" />
                    </div>
                    <div className="flex gap-5">
                        <Input name="Bairro" />
                        <Input name="UF" className="w-1/4" />
                    </div>
                    <div className="flex gap-5">
                        <Input name="CEP" className="w-1/3" />
                        <Input name="DDD" className="w-1/3" />
                        <Input name="Telefone" className="w-1/3" />
                    </div>
                    <Input name="Ponto de Referência" />
                </section>

                {/* Escolaridade */}
                <section>
                    <h3 className="font-medium mb-2">Escolaridade:</h3>
                    <div className="flex gap-5 flex-wrap">
                        {[
                            "Analfabeta",
                            "Ensino fundamental incompleto",
                            "Ensino fundamental completo",
                            "Ensino médio incompleto",
                            "Ensino médio completo",
                            "Ensino superior completo",
                        ].map((item) => (
                            <label key={item} className="flex items-center gap-1">
                                <input type="radio" name="escolaridade" />
                                {item}
                            </label>
                        ))}
                    </div>
                </section>

                {/* DADOS DA ANAMNESE */}
                <section className="flex flex-col gap-7">
                    <h2 className="text-xl font-bold text-center border-2 border-black">DADOS DA ANAMNESE</h2>
                    <div className="flex gap-10">
                        <div className="w-1/2 flex flex-col gap-2">
                            <p>1. Motivo do exame*</p>
                            {["Rastreamento", "Repetição (exame alterado ASCUS/Baixo grau)", "Seguimento (pós diagnóstico colposcópico/tratamento)"].map((item) => (
                                <label key={item} className="flex items-center gap-2">
                                    <input type="radio" name="motivo_exame" /> {item}
                                </label>
                            ))}

                            <p>2. Fez o exame preventivo (Papanicolau) alguma vez?*</p>
                            <label className="flex items-center gap-2">
                                <input type="radio" name="fez_preventivo" value="sim" /> Sim. Quando fez o último exame?
                                <input type="text" className="border-b border-black w-20" placeholder="ano" />
                            </label>
                            {["Não", "Não sabe"].map((item) => (
                                <label key={item} className="flex items-center gap-2">
                                    <input type="radio" name="fez_preventivo" value={item} /> {item}
                                </label>
                            ))}

                            {[
                                { q: "3. Usa DIU?*", name: "usa_diu" },
                                { q: "4. Está grávida?", name: "esta_gravida" },
                                { q: "5. Usa pílula anticoncepcional?*", name: "usa_pilula" },
                                { q: "6. Usa hormônio/remédio para tratar a menopausa?*", name: "usa_hormonio" },
                                { q: "7. Já fez tratamento por radioterapia?*", name: "radioterapia" },
                            ].map(({ q, name }) => (
                                <div key={name}>
                                    <p>{q}</p>
                                    {["Sim", "Não", "Não sabe"].map((option) => (
                                        <label key={option} className="mr-4">
                                            <input type="radio" name={name} /> {option}
                                        </label>
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div className="w-1/2 flex flex-col gap-2">
                            <p>8. Data da última menstruação/regra*</p>
                            {["Não sabe", "Não lembra"].map((option) => (
                                <label key={option} className="mr-4">
                                    <input type="radio" name="ultima_menstruacao" /> {option}
                                </label>
                            ))}

                            <p>9. Tem ou teve algum sangramento após relações sexuais?*</p>
                            {["Sim", "Não", "Não sabe", "Não lembra"].map((option) => (
                                <label key={option} className="mr-4">
                                    <input type="radio" name="sangramento_pos_relacao" /> {option}
                                </label>
                            ))}

                            <p>10. Tem ou teve algum sangramento após a menopausa?*</p>
                            {["Sim", "Não", "Não sabe/Não lembra", "Não está na menopausa"].map((option) => (
                                <label key={option} className="mr-4">
                                    <input type="radio" name="sangramento_pos_menopausa" /> {option}
                                </label>
                            ))}
                        </div>
                    </div>
                </section>

                {/* EXAME CLÍNICO */}
                <section className="flex flex-col gap-5">
                    <h2 className="text-xl font-bold text-center border-2 border-black">EXAME CLÍNICO</h2>
                    <div className="flex gap-10">
                        <div className="w-1/2">
                            <p>11. Inspeção do colo*</p>
                            {["Normal", "Ausente (anomalias congênitas ou retirado cirurgicamente", "Alterado", "Colo não visualizado"].map((option) => (
                                <label key={option} className="block">
                                    <input type="radio" name="inspecao_colo" className="mr-1" /> {option}
                                </label>
                            ))}
                        </div>

                        <div className="w-1/2">
                            <p>12. Sinais sugestivos de doenças sexualmente transmissíveis?</p>
                            {["Sim", "Não"].map((option) => (
                                <label key={option} className="mr-4">
                                    <input type="radio" name="dst" /> {option}
                                </label>
                            ))}

                            <div className="bg-[#D9D9D9] px-3 py-2 mt-3">
                                NOTA: Na presença de colo alterado, com lesão sugestiva de câncer, não aguardar <br /> o resultado do exame citopatológico para encaminhar a mulher para colposcopia.
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <Input name="Data da coleta*" type="date" className="w-1/4" />
                        <Input name="Responsável*" className="w-2/3" />
                    </div>
                </section>

                {/* RESULTADO DO EXAME */}
                <section className="flex flex-col gap-5">
                    <h2 className="text-xl font-bold text-center border-2 border-black">RESULTADO DO EXAME CITOPATOLÓGICO – COLO DE ÚTERO</h2>

                    <div className="grid grid-cols-2 gap-10">
                        <div>
                            <h2 className="font-semibold">AVALIAÇÃO PRÉ-ANALÍTICA</h2>
                            <p>Amostra rejeitada por:</p>
                            {["Ausência ou erro na identificação da lâmina, frasco ou formulário", "Lâmina danificada ou ausente"].map((option) => (
                                <label key={option} className="block">
                                    <input type="checkbox" className="mr-1" /> {option}
                                </label>
                            ))}
                            <label><input type="checkbox" /> Causas alheias ao laboratório; especificar: <br /> <input type="text" className="w-full border-b border-black ml-1" /></label>
                            <label><input type="checkbox" /> Outras causas; especificar: <br /> <input type="text" className="w-full border-b border-black ml-1" /></label>
                            <p className="mt-3">Epitélios representados na amostra*:</p>
                            {["Escamoso", "Glandular", "Metaplásico"].map((option) => (
                                <label key={option} className="block">
                                    <input type="checkbox" className="mr-1" /> {option}
                                </label>
                            ))}
                        </div>

                        <div>
                            <h2 className="font-semibold">ADEQUABILIDADE DO MATERIAL*</h2>
                            {["Satisfatória", "Material acelular ou hipocelular em menos de 10% do esfregaço", "Sangue em mais de 75% do esfregaço", "Picócitos em mais de 75% do esfregaço", "Artefatos de dessecamento em mais de 75% do esfregaço", "Contaminantes externos em mais de 75% do esfregaço", "Intensa superposição celular em mais de 75% do esfregaço"].map((option) => (
                                <label key={option} className="block">
                                    <input type="checkbox" className="mr-1" /> {option}
                                </label>
                            ))}
                            <label><input type="checkbox" /> Outros; especificar: <input type="text" className="border-b border-black ml-1" /></label>
                        </div>
                    </div>
                </section>

                {/* DIAGNÓSTICO DESCRITIVO */}
                <section className="flex flex-col gap-3">
                    <h2 className="text-xl font-bold text-center border-b-2 border-black">DIAGNÓSTICO DESCRITIVO</h2>

                    <div className="flex gap-10">
                        <div className="w-1/2 flex flex-col gap-2">
                            <label className="font-medium">DENTRO DOS LIMITES DA NORMALIDADE NO MATERIAL EXAMINADO?</label>
                            <label><input type="checkbox" /> Sim</label>
                            <label><input type="checkbox" /> Não</label>

                            <label className="font-medium mt-2">ALTERAÇÕES CELULARES BENIGNAS REATIVAS OU REPARATIVAS</label>
                            {[
                                "Inflamação",
                                "Metaplasia escamosa imatura",
                                "Reparação",
                                "Atrofia com inflamação",
                                "Radiação"
                            ].map(label => (
                                <label key={label}><input type="checkbox" /> {label}</label>
                            ))}
                            <label><input type="checkbox" /> Outros; especificar: <input type="text" className="border-b border-black ml-1" /></label>

                            <label className="font-medium mt-2">MICROBIOLOGIA</label>
                            {[
                                "Lactobacillus sp",
                                "Cocos",
                                "Sugestivo de Chlamydia sp",
                                "Actinomyces sp",
                                "Candida sp",
                                "Trichomonas vaginalis",
                                "Efeito citopático compatível com vírus do grupo Herpes",
                                "Bacilos supracitoplasmáticos (sugestivos de Gardnerella/ Mobiluncus)",
                                "Outros bacilos"
                            ].map(label => (
                                <label key={label}><input type="checkbox" /> {label}</label>
                            ))}
                            <label><input type="checkbox" /> Outros; especificar: <input type="text" className="border-b border-black ml-1" /></label>
                        </div>

                        <div className="w-1/2 flex flex-col gap-2">
                            <label className="font-medium">CÉLULAS ATÍPICAS DE SIGNIFICADO INDETERMINADO</label>
                            <label><input type="checkbox" /> Escamosas: Possivelmente não neoplásicas</label>
                            <label><input type="checkbox" /> Escamosas: Não se pode afastar lesão de alto grau (ASC-H)</label>
                            <label><input type="checkbox" /> Glandulares: Possivelmente não neoplásicas</label>
                            <label><input type="checkbox" /> Glandulares: Não se pode afastar lesão de alto grau</label>
                            <label><input type="checkbox" /> De origem indefinida: Possivelmente não neoplásicas</label>
                            <label><input type="checkbox" /> De origem indefinida: Não se pode afastar lesão de alto grau</label>

                            <label className="font-medium mt-2">ATIPIAS EM CÉLULAS ESCAMOSAS</label>
                            {[
                                "Lesão intra-epitelial de baixo grau (compreendendo efeito citopático pelo HPV e neoplasia intra-epitelial cervical grau I)",
                                "Lesão intra-epitelial de alto grau (compreendendo neoplasias intraepiteliais cervicais graus II e III)",
                                "Lesão intra-epitelial de alto grau,não podendo excluir micro-invasão",
                                "Carcinoma epidermóide invasor"
                            ].map(label => (
                                <label key={label}><input type="checkbox" /> {label}</label>
                            ))}

                            <label className="font-medium mt-2">ATIPIAS EM CÉLULAS GLANDULARES</label>
                            <label><input type="checkbox" /> Adenocarcinoma "in situ"</label>
                            <label>Adenocarcinoma invasor:</label>
                            <div className="pl-4">
                                <label><input type="checkbox" /> Cervical</label>
                                <label><input type="checkbox" /> Endometrial</label>
                                <label><input type="checkbox" /> Sem outras especificações</label>
                            </div>

                            <label className="font-medium mt-2">OUTRAS NEOPLASIAS MALIGNAS:</label>
                            <input type="text" className="border-b border-black" />

                            <label><input type="checkbox" /> PRESENÇA DE CÉLULAS ENDOMETRIAIS (NA PÓS-MENOPAUSA OU ACIMA DE 40 ANOS, FORA DO PERÍODO MENSTRUAL)</label>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-4">
                        <label>Observações Gerais:</label>
                        <input type="text" className="w-full border-b border-black" />
                    </div>

                    <div className="flex gap-5 mt-4">
                        <Input name="Screening pelo citotécnico" className="w-1/3" />
                        <Input name="Responsável" className="w-1/3" />
                        <Input name="Data do Resultado" type="date" className="w-1/3" />
                    </div>
                </section>

                <div className="w-full fixed bottom-2 -mx-20 px-10 flex justify-center">
                    <button
                        type="button"
                        className="w-full px-10 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
                    >
                        Salvar informações
                    </button>
                </div>
            </form>
        </div>
    );
}
