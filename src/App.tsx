import { ThemeProvider } from "styled-components"
import { theme } from "./styles/Theme"
import { GlobalStyle } from "./types/GlobalStyle"
import { Header } from "./components/header"
import { Hero } from "./components/hero"

function App() {
  return (
    <ThemeProvider theme = {theme}>
       <GlobalStyle />
       <Header />
       <Hero />
    </ThemeProvider>
  )
}

export default App