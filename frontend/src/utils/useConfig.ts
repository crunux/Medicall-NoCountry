const HOST_BACKEND = import.meta.env.VITE_HOST_BACKEND || 'localhost'
const PORT_BACKEND = import.meta.env.VITE_PORT_BACKEND || null

interface URLPATH {
  BASE_URL: string
}

export interface Config { 
  getUrlPath: (endpoint: string) => URLPATH,
  HOST_BACKEND: string,
  PORT_BACKEND: string | null,
}

export const useConfig = (): Config => {
  
  return {
    getUrlPath,
    HOST_BACKEND,
    PORT_BACKEND
  }  
}

export const getUrlPath = (endpoint: string): URLPATH => {
    return {
      BASE_URL: !PORT_BACKEND ? `https://${HOST_BACKEND}${endpoint}` : `https://${HOST_BACKEND}:${PORT_BACKEND}${endpoint}`,
    }
}