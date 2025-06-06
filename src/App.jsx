import { useState } from "react"
import SearchBar from "./components/SearchBar"
import ImageList from "./components/imageList"
import searchImagenes from "./Api"

function App() {
  // searchImages('cars')
  const [images, setImages] = useState ([])

  const handleSubmit = async(term) => {
    console.log('Usted esta buscando con: ', term)
    const result = await searchImagenes(term)
    setImages(result)
  }
  return (
    <>
      <h1>Pictures App</h1>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList images={images}/>
    </>
  )
}

export default App