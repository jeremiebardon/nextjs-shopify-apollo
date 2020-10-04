import React from 'react';

import { 
  HeaderGeneral, 
  HeaderInner, 
  HeaderLogo, 
  LogoLink, 
  Logo,
  SearchWrapper,
  ActionsWrapper
} from './Header.style';
import { Layout } from './../Layout/Layout';

export default function Header() {
  return (
    <HeaderGeneral role="banner">
      <Layout>
        <HeaderInner>
          <HeaderLogo>
            <LogoLink href="/" passHref>
              <a>
                <Logo src="/logo-desktop.svg" alt="Indoor growing Logo" />
              </a>
            </LogoLink>
          </HeaderLogo>

          <SearchWrapper>
          </SearchWrapper>

          <ActionsWrapper>
          </ActionsWrapper>
        </HeaderInner>
      </Layout>
    </HeaderGeneral>
  )
}
