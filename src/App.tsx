import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Home from "./components/pages/Home"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const App = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Home />
    </QueryClientProvider>
  )
}

export default App