import ImgPath from "@/app/constants/ImgPath";
import Image from "next/image";

export default function ExampleOne() {

    return (
        <>
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg p-4">
                <Image height={200} width={200} src={ImgPath.imgOne} alt="Imagem do Produto" className="rounded-lg w-full mb-4" />
                <h3 className="text-lg font-bold mb-2">Nome do Produto</h3>
                <p className="text-gray-600 mb-4">Descrição breve do produto.</p>
                <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-bold">R$ 120,00</span>
                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">Comprar</button>
                </div>
            </div>
        </>

    )
}