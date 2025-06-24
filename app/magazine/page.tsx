import TableRowMagazine from "../components/TableRowMagazine";

export default async function Magazine(){
   
    const request = await fetch("https://crudcrud.com/api/7a0e34fd3a114f80819580a68d175e51/magazines")
    const listMagazine = await request.json();

    const magazines = [];
    for (const magazine of listMagazine){
        magazines.push(<TableRowMagazine key={magazine.id} magazine={magazine} />)
    }

    return (
        <div className="container mx-auto py-8 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6 text-center">Lista de Revistas</h1>
            <div className="rounded-lg border shadow-sm bg-background w-full max-w-3xl">
            <table className="w-full text-sm text-center">
                <thead>
                <tr>
                    <th className="py-2">Autor</th>
                    <th className="py-2">Titulo</th>
                    <th className="py-2">Paginas</th>
                    <th className="py-2">Ações</th>
                </tr>
                </thead>
                <tbody>
                {magazines}
                </tbody>
            </table>
            </div>
        </div>
    )
}