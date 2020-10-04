import styled from 'styled-components';
import Link from 'next/link';

export const HeaderGeneral = styled.header`
  position: relative;
  background: ${props => props.theme.colors.black1};
  color: #fff;
  padding: .9em 0;
`;

export const HeaderInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled.h1`
  display: inline-block;
  vertical-align: middle;
  margin: 0 2em 0 0;
  flex: 1;
`;

export const LogoLink = styled(Link)`
  display: block;
`;

export const Logo = styled.img`
  display: block;
  vertical-align: middle;
  max-width: 160px;
  min-width: 120px;
`;


export const SearchWrapper = styled.div`
  position: relative;
  flex: 1 0 auto;
  height: 100%;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  justify-content: flex-end;
  flex: 1;
`;

