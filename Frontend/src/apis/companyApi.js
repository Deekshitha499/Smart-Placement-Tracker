import API from './axios'

export const getCompanies = async () => {
  const response = await API.get('/companies')
  return response.data
}