import styled from 'styled-components';
import breakpoints from '../../styles/utils/breakpoints';

export const Container = styled.div`
  max-width: 1480px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  @media screen and ${breakpoints.device.sm}{
    padding: 0 40px;
  }
`;