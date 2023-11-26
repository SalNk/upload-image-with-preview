import React, { useRef, useState } from 'react'
import Buttton from './components/Buttton'
import Input from './components/Input'
import Image from './components/Image'
import Title from './components/Title'
import defaultImage from './assets/upload.jpg'

export default function App() {

  const [file, setFile] = useState(defaultImage)
  const ref = useRef(null);
  function getFile(event) {
    setFile(URL.createObjectURL(event.target.files[0]))
  }
  const removeImage = () => {
    setFile(defaultImage);
  }

  return (
    <div className='container mx-auto align-items-center'>
      <div className='row d-flex justify-content-center align-items-center'>
        <div className='border mt-5 p-3 col-md-6 d-flex align-items-center justify-content-center flex-column'>
          <Title />
          <Input ref={ref} type={'file'} onChange={getFile} />
          <Image src={file} className={'w-50 mt-3'} />
          <Buttton onClick={removeImage} className={'w-50 mt-3 btn btn-danger'} />
        </div>
      </div>
    </div>

  )
}
