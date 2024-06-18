import { computed } from "vue"

const useConfig = () => {
  const HOST_BACKEND = import.meta.env.VITE_HOST_BACKEND || 'localhost'
  const PORT_BACKEND = import.meta.env.VITE_PORT_BACKEND || null

  const getUrlPath = (endpoint: string): { BASE_URL : string } =>{
    return {
    BASE_URL: !PORT_BACKEND ? `https://${HOST_BACKEND}${endpoint}`: `https://${HOST_BACKEND}:${PORT_BACKEND}${endpoint}`,
    }
  }

  return {
    getUrlPath
  }  
}

export default useConfig