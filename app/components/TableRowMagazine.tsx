export default function TableRowMagazine({magazine}:any){
    return(
        <tr className="border-b hover:bg-muted">
          <td className="px-4 py-2 font-medium">{magazine.autor}</td>
          <td className="px-4 py-2">{magazine.titulo}</td>
          <td className="px-4 py-2">{magazine.paginas}</td>
          <td className="px-4 py-2">
            <a
              href={`/magazine/delete?_id=${magazine._id}`}
              className="text-destructive hover:underline"
            >
              Deletar
            </a>
          </td>
        </tr>
    )
}