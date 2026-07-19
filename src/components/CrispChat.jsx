import { useEffect } from 'react'

// VITE_CRISP_WEBSITE_ID a fournir par le client (dashboard.crisp.chat -> Settings -> Website ID)
export default function CrispChat() {
  useEffect(() => {
    const websiteId = import.meta.env.VITE_CRISP_WEBSITE_ID
    if (!websiteId || document.getElementById('crisp-chat-script')) return

    window.$crisp = []
    window.CRISP_WEBSITE_ID = websiteId

    const script = document.createElement('script')
    script.id = 'crisp-chat-script'
    script.src = 'https://client.crisp.chat/l.js'
    script.async = true
    document.head.appendChild(script)
  }, [])

  return null
}
