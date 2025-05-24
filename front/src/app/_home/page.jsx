export default function HomePage() {
    return (
        <div className="max-w-screen-md mx-auto w-full h-screen flex justify-center items-center px-2">
            <div className="bg-white w-full sm:w-2/4 flex flex-col items-center border border-black rounded-xl gap-5 py-7 px-5">
                <p className="font-bold bg-[#FFB8B8] mb-8 p-2 rounded-2xl">Estou entrando como:</p>

                <a 
                    href="/loginMedico"
                    className="w-32 text-center bg-[#FFB8B8] p-2 rounded-2xl"
                >
                    Médico(a)
                </a>

                <a 
                    href=""
                    className="w-32 text-center bg-[#FFB8B8] p-2 rounded-2xl"
                >
                    Enfermeiro(a)
                </a>
            </div>
        </div>
    )
}