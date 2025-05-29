import { HiOutlineUserCircle } from "react-icons/hi2";

export default function RecentPacient({pacientData}) {
    let color;

    if (pacientData.risk == "Baixo") {
        color = "#4CAF50"
    }else if (pacientData.risk == "Médio") {
        color = "#FFC107"
    }else {
        color = "#F44236"
    }

    return(
        <div className="flex justify-between items-center border-b-2 border-[#D9D9D9]">
            <div className="flex gap-3 items-center">
                <HiOutlineUserCircle className="w-10 h-fit"/>
                
                <div className="text-lg">
                    <p>{pacientData.name}</p>
                    <p className="text-sm">Última consulta: {pacientData.lastVisit}</p>
                </div>
            </div>

            <div className="size-6 rounded-full" style={{backgroundColor: color}}/>
        </div>
    )
}