import React, { useState } from 'react';
import axios from 'axios';

function Create() {
  const [object, setObject] = useState({
    // Inicializa tu objeto aquí
    name: 'Example Object',
    location: { lat: 37.7749, lng: -122.4194 }
  });

  const saveObject = async () => {
    try {
      const response = await axios.post('http://localhost:3001/save-object', object);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('There was an error saving the object!', error);
    }
  };

  return (
    <div>
        <input type="text" placeholder='Agregar extintor' className='w-[300px] p-2 border-b-2 border-solid '/>
        <button onClick={saveObject} className='p-2 bg-black text-white cursor-pointer'>Add</button>
    </div>
  )
}

export default Create