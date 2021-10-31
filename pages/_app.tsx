import { AppProps } from "next/app"
import GlobalStyle from "./GlobalStyle"

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <>
      <GlobalStyle />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  )
}

export default App
