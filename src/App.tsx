import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import AppRouter from "./libs/AppRouter"
import { SkeletonTheme } from "react-loading-skeleton"
import DrawerLayout from "./components/layouts/DrawerLayout"
import NavbarLayout from "./components/layouts/NavbarLayout"

const App = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <SkeletonTheme highlightColor="#444" baseColor="#202020">
        <div className="bg-dark selection:bg-primary selection:text-white overflow-hidden">
          <NavbarLayout />
          <DrawerLayout />
          <AppRouter />
        </div>
      </SkeletonTheme>
    </QueryClientProvider>
  )
}

export default App