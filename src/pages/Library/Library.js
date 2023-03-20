import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'

const Library = () => {
  const LOCAL_STORAGE_KEY = "dataKey"
  const [data, setData] = useState([])
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("key")))
  }, [])
  const remove = () => {

    localStorage.removeItem("key")
  }
  if (!data) {
    return (<div>
      <Navbar />
      No data
    </div>)
  }
  return (
    <div>
      <Navbar />

      <div className=' container'>
        {data.map((item) =>
          <div className='bg-gray-300 p-3 rounded-md my-2'>
            {item?.volumeInfo.title}
          </div>
        )}
      </div>
      <button onClick={() => remove()}>remove from local</button>
    </div>
  )
}

export default Library