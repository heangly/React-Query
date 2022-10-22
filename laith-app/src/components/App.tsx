import './App.css'
import Charactes from './Characters'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1>Rick and Morty</h1>
        <QueryClientProvider client={queryClient}>
          <Charactes />
        </QueryClientProvider>
      </div>
    </div>
  )
}

export default App
