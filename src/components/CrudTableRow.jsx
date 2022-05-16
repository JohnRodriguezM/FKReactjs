
function CrudTableRow({ name, powerlevel, id, eliminar, setDataToEdit }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{powerlevel}</td>
      <td>
        <button
        onClick={() => {setDataToEdit({name, powerlevel, id})}}>
        Edit
        </button>
        <button
        onClick={() => {eliminar(id); setDataToEdit(null)}}>
        Delete
        </button>
      </td>
    </tr>
  )
}

export default CrudTableRow