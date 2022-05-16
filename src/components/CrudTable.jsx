import React from 'react'
// components
import CrudTableRow from './CrudTableRow'

const CrudTable = ({data,updateData,setDataToEdit,dataToEdit}) => {

  const eliminar = id  => {
    let isDelete = window.confirm('Are you sure wanna delete it?')
    const filtrados = data.filter(el => el.id !== id)
    if(isDelete) return updateData(filtrados)
  }

  return (
    <>
      <h3>Data table</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Power Level</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
        {data.length === 0 ? <tr>
          <td colSpan = '3'>Sin datos</td>
        </tr> : data.map(el => {
          return (
            <CrudTableRow
              key = {el.id}
              name = {el.name}
              powerlevel = {el.powerlevel}
              id = {el.id}
              eliminar = {eliminar}
              setDataToEdit = {setDataToEdit}
            />
          )
        })}
        </tbody>
      </table>
    </>
  )
}

export default CrudTable