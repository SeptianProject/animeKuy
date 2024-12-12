import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import AppRouter from "./libs/AppRouter"
import { SkeletonTheme } from "react-loading-skeleton"

const App = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <SkeletonTheme highlightColor="#444" baseColor="#202020">
        <div className="bg-primary selection:bg-white selection:text-primary overflow-hidden">
          <AppRouter />
        </div>
      </SkeletonTheme>
    </QueryClientProvider>
  )
}

export default App