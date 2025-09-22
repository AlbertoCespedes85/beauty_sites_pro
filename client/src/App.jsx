import './App.css'
import { Footer } from './components/footer/Footer'
import { AuthContextProvider } from './context/AuthContextProvider'
import { AppRoutes } from './routes/AppRoutes'

function App() {
  

  return (
    <>
    <AuthContextProvider>
    <AppRoutes/>
    <Footer/>
    </AuthContextProvider>
    </>
  )
}

export default App
