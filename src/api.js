import axios from "axios";

const searchImagenes = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=q09fgnZ8-aVfK49kjrj6PTarVnXKIx83-Y7c3d8k0Lk'

    const response = await axios.get(url, {
        params:{
            query: term
        }
    })

    console.log(response)
    return response.data.results
}

export default searchImagenes
