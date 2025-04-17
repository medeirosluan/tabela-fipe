import { useState } from "react"
import api from "./api"
import Logo from './assets/endereco.png'
function App() {
  const [cep, setCep] = useState('')
  const [data,setData] = useState([])
  
 
  async function getCep(){
    const data = await api.get(`cep/v1/${cep}`)

    setData(data.data)
  }

  return (
   <div className="container">
      <img src={Logo}/>
      <input type="text" placeholder="Digite seu cep" onChange={(e)=>setCep(e.target.value)} />
      <button onClick={getCep}>Procurar</button>
      <div className="information">
        <p>Estado: {data.state}</p>
        <p>Cidade: {data.city}</p>
        <p>Bairro: {data.neighborhood}</p>
        <p>Rua: {data.street}</p>

      </div>
   </div>
        
  )
}

export default App
