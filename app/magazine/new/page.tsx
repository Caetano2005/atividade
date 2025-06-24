"use client"

import { Button } from "@/components/ui/button";

export default function NewMagazine() {

    async function saveMagazine(event: React.FormEvent) {
        event.preventDefault(); // Impede o reload da página
        console.log("Enviado")
        const autor = document.getElementById("autor") as HTMLInputElement;
        const titulo = document.getElementById("titulo") as HTMLInputElement;
        const paginas = document.getElementById("paginas") as HTMLInputElement;

        const magazine = {
            autor: autor.value,
            titulo: titulo.value,
            paginas: paginas.value,
        }

        console.log(magazine)
        try {
            const response = await fetch("https://crudcrud.com/api/7a0e34fd3a114f80819580a68d175e51/magazines", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(magazine)
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Cadastrar Revista</h1>
            <form onSubmit={saveMagazine} className="space-y-5">
            <div>
                <label htmlFor="autor" className="block text-sm font-medium mb-1">
                Autor
                </label>
                <input
                type="text"
                placeholder="Autor da Revista"
                id="autor"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            <div>
                <label htmlFor="titulo" className="block text-sm font-medium mb-1">
                Titulo
                </label>
                <input
                type="text"
                placeholder="Titulo"
                id="titulo"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            <div>
                <label htmlFor="paginas" className="block text-sm font-medium mb-1">
                Paginas
                </label>
                <input
                type="text"
                placeholder="Paginas"
                id="paginas"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            <Button type="submit" className="w-full">
                Salvar
            </Button>
            </form>
        </div>

    )
}