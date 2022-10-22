import './App.css'
import Charactes from './Characters'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1>Rick and Morty</h1>
        <QueryClientProvider client={queryClient}>
          <Charactes />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </div>
    </div>
  )
}

export default App
