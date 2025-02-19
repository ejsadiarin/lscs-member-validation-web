import Layout from './layout/Layout'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Toaster } from '@/components/ui/sonner'

const App = () => {
  return (
    <>
      <GoogleOAuthProvider clientId="274365900184-jnvam3k9ce4o4i1bi00c0rmdrqcmtmf9.apps.googleusercontent.com">
        <BrowserRouter>
          <div className="font-(--font-inter)">
            <Layout></Layout>
            <Toaster />
          </div>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </>
  )
}

export default App
