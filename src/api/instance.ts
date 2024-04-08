import axios from 'axios'

const baseURL = 'any'

export const instanceApi = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})
