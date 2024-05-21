import Image from "next/image";

export default function ExampleTwo() {

    return (
        <>
            <form className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-4">Entre em Contato</h2>
                <label htmlFor="nome" className="block text-gray-700 mb-2">Nome:</label>
                <input type="text" id="nome" name="nome" className="w-full rounded-md border border-gray-300 px-2 py-2" required />

                <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
                <input type="email" id="email" name="email" className="w-full rounded-md border border-gray-300 px-2 py-2" required />

                <label htmlFor="mensagem" className="block text-gray-700 mb-2">Mensagem:</label>
                <textarea id="mensagem" name="mensagem" rows={5} className="w-full rounded-md border border-gray-300 px-2 py-2" required></textarea>

                <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 mt-4">Enviar</button>
            </form>

        </>

    )
}