import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function ExamResult({ exam }) {
    return (
        <div className="bg-[#FFF1F1] w-4/5 p-4 rounded-xl flex justify-between shadow-md shadow-blue-500">
                    <div>
                        <p>{exam.name}</p>
                        <p>{exam.date} - {exam.hour} </p>
                    </div>

                    <Link href={""}  className="self-center">
                        <FaArrowRight className="w-8 h-fit" />
                    </Link>
                </div>
    )
}