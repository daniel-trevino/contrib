import { usePanelbear } from "@panelbear/panelbear-nextjs"
import { AppProps } from "next/app"
import GlobalStyle from "./GlobalStyle"

const PANELBEAR_ID = "F7X24ptn9rp"

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  usePanelbear(PANELBEAR_ID)
  return (
    <>
      <GlobalStyle />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  )
}

export default App
