import styled from 'styled-components';

export const Container = styled.header`
  img {
    max-width: 400px;
    width: 100%;
    margin: 50px auto;
    display: block;

    @media(max-width: 768px){
      max-width: 250px;
    }
  }
`;