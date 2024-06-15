import { computed } from "vue"

const config = (endpoint: string) => {
  const HOST_BACKEND = import.meta.env.VITE_HOST_BACKEND || 'localhost'
  const PORT_BACKEND = import.meta.env.VITE_PORT_BACKEND || null

  return {
    BASE_URL: !PORT_BACKEND ? `https://${HOST_BACKEND}${endpoint}`: `https://${HOST_BACKEND}:${PORT_BACKEND}${endpoint}`,
  }
}

export default config