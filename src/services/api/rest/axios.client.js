import axios from 'axios'
import { interceptorSuccess as responseSuccess, interceptorError as responseError } from '../../../helpers/response'

const client = axios.create({
  baseURL: process.env.REACT_APP_API,
})

client.interceptors.response.use(responseSuccess, responseError);

export default client