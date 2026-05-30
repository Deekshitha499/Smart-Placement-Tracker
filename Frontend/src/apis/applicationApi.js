import API from './axios'

export const getApplications = async () => {
  const response = await API.get('/applications')
  return response.data
}