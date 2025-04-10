import {useState} from "react"
import SearchBar from "./components/SearchBar"
import ImageList from "./components/ImageList"
import searchImages from "./Api"


function App() {
  //searchImages('cars')
  const [images, setImages] = useState ([])

  const handleSubmit  = async (term) => {
    console.log ('Ustedesta buscando cars ', term)
    const result = await searchImages (term)
  }
  return (
    <>
      <h1>Pictures App</h1>
      <SearchBar />
      <ImageList />
    </>
  )
}

export default App