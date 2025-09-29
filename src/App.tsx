import { ThemeProvider } from "styled-components"
import { theme } from "./styles/Theme"
import { GlobalStyle } from "./types/GlobalStyle"
import { Header } from "./components/header"
import { Hero } from "./components/hero"
import { FAQ } from "./components/faq"

function App() {
  return (
    <ThemeProvider theme = {theme}>
       <GlobalStyle />
       <Header />
       <Hero />
       <FAQ />
    </ThemeProvider>
  )
}

export default App