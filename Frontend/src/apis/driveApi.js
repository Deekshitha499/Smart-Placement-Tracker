import API from './axios'

export const getDrives = async () => {
  const response = await API.get('/drives')
  return response.data
}