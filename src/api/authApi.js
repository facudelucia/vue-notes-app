import axios from 'axios'

const authApi = axios.create({
    baseURL: `https://identitytoolkit.googleapis.com/v1/accounts`,
    params: {
        key: 'AIzaSyDL3DQUH5SpB7rnMeLUJDOWU347Sfj26_o'
    }
})

export default authApi