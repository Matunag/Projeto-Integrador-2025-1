import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-screen-md mx-auto w-full h-screen flex justify-center items-center px-2">
      <div className="bg-white w-full sm:w-2/4 flex flex-col items-center rounded-xl gap-7 py-10 px-8 shadow-2xl text-xl">
        <img
          src="/Logo_SobreVidas.png"
          alt="Logo ou imagem decorativa"
          className="w-24 h-auto mb-4"
        />

        <p className="font-bold border-2 border-[#FFB8B8] mb-6 p-4 rounded-2xl ">
          Estou entrando como:
        </p>

        <Link
          href={"/loginMedico"}
          className="w-40 text-center p-3 rounded-2xl border-2 border-[#FFB8B8]"
        >
          Médico(a)
        </Link>

        <Link
          href={""}
          className="w-40 text-center p-3 rounded-2xl border-2 border-[#FFB8B8]"
        >
          Enfermeiro(a)
        </Link>
      </div>
    </div>
  );
}
