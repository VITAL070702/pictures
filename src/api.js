import axios from " axios";

const searchImages = async(term)=>{
    const url='https://api.unsplash.com/search/photos/?client_id=4TqZ2_Ck_2WuZmZMeZJD6KcXds9yrj_6q47mIYc_HR0'
    const response =await axios.get(url, {
        params:{
            query:'cars'
        }
    })
    console.log(response)
    return response.data.results
}
export default searchImages