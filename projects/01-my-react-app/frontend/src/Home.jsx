import React, {useState} from 'react'
import Create from './Create'

function Home() {
    const [extintors, setExtintors] = useState([])
  return (
    <div className='flex flex-col items-center'>
        <h2 >Extintores</h2>
        <Create />
        {
            extintors.length == 0
            ? 
            <p>No hay extintores</p>
            :
            extintors.map(extintor => (
                <div>
                    {extintor}
                </div>
            ))
        }
    </div>
  )
}

export default Home