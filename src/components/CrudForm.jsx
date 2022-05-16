import { useState, useEffect, useRef } from 'react'


const CrudForm = ({ dataToEdit, setDataToEdit, creacion, EditarDatos }) => {
  const [form, setForm] = useState({})

  useEffect(() => {
    dataToEdit ? setForm(dataToEdit) : setForm({})
    return () => {
      setForm({})
    }
  }, [dataToEdit])




  const handleChange = e => {
    let objetoChange = {
      ...form,
      [e.target.name]: e.target.value,
    }
    setForm(objetoChange)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.name || !form.powerlevel) return alert('agrega texto a los elementos')
    // condicional para decidir si editar o crear
    !form.id ? creacion(form) : EditarDatos(form)
    // se reinicia el formulario
    handleReset()
    e.target.name.focus()
  }

  const handleReset = () => {
    setForm({ name: '', powerlevel: '', id: null })
    setDataToEdit(null)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>{!dataToEdit ? 'Add character' : 'Edit character'}</h3>
        <input
          onInput={handleChange}
          autoFocus
          type="text" autofocus name="name" id="name" placeholder="Name character"
          defaultValue={''} value={form.name}
        />
        <input
          onInput={handleChange}
          type="number"
          name="powerlevel"
          placeholder="powerlevel"
          value={form.powerlevel}
        />
        <input
          type="submit"
          value={!dataToEdit ? 'Add character' : 'Edit character'} />
        <input
          onClick={handleReset}
          type="reset" value="Clean Form" />
      </form>
    </>
  )
}

export default CrudForm