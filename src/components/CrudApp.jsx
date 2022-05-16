import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
// se importa el arreglo de objetos que va a simular la FakeDb
import { dbFake } from '../helpers/FakeDb'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'

// importacion de components

const CrudApp = () => {
  const [dataB, setDataB] = useState(dbFake)
  const [dataToEdit, setDataToEdit] = useState(null)
  // * recibe el valor data del evento handleSubmit del crudForm
  const createData = ({name,powerlevel}) => {
    let objetoUodated = {name, powerlevel, id: uuidv4()}
    setDataB([...dataB,objetoUodated])
  }
  // * recibe el valor data del evento handleSubmit del crudForm
  const EditData = (data) => {
    // se hace reeemplazo entre obj
    const newData = dataB.map(el => el.id === data.id  ? data : el)
    setDataB(newData)
    console.log(newData)
  }
  return (
    <>
    <h2>Crud app</h2>
     <CrudForm
     creacion = {createData}
     dataToEdit={dataToEdit}
     setDataToEdit={setDataToEdit}
     EditarDatos = {EditData}/>
     <CrudTable
     data = {dataB}
     updateData = {setDataB}
     setDataToEdit = {setDataToEdit}
     dataToEdit={dataToEdit}/>
    </>
  )
}

export default CrudApp