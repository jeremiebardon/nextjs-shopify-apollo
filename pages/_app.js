// Apollo
import { withApollo } from '../libs/withApollo';

// Style
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './../styles/global';
import { theme } from './../styles/theme';

import Header from '../components/Header/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default withApollo(MyApp)
