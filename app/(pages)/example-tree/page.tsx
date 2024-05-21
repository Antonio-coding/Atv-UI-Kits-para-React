import ImgPath from "@/app/constants/ImgPath";
import Image from "next/image";

export default function ExempleTree() {

    return (
        <>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                <div className="bg-gray-100 rounded-lg shadow-md p-4">
                    <Image height={200} width={200} src={ImgPath.imgTwo} alt="Imagem 1" className="rounded-lg w-full mb-4" />
                    <p className="text-gray-700 font-bold">Título da Imagem 1</p>
                </div>
                <div className="bg-gray-100 rounded-lg shadow-md p-4">
                    <Image height={200} width={200} src={ImgPath.imgTwo} alt="Imagem 2" className="rounded-lg w-full mb-4" />
                    <p className="text-gray-700 font-bold">Título da Imagem 2</p>
                </div>
                <div className="bg-gray-100 rounded-lg shadow-md p-4">
                    <Image height={200} width={200} src={ImgPath.imgTwo} alt="Imagem 3" className="rounded-lg w-full mb-4" />
                    <p className="text-gray-700 font-bold">Título da Imagem 3</p>
                </div>
                <div className="bg-gray-100 rounded-lg shadow-md p-4">
                    <Image height={200} width={200} src={ImgPath.imgTwo} alt="Imagem 4" className="rounded-lg w-full mb-4" />
                    <p className="text-gray-700 font-bold">Título da Imagem 4 </p>
                </div>
            </div>

        </>

    )
}