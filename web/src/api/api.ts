import axios from 'axios'
const URL_API ='http://localhost:3000/api/gpt'

async function makeRequest(message:string) {
    const { data } = await axios.post(URL_API, message)
    return data
}
export default makeRequest