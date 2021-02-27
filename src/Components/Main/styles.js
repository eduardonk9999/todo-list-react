import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1220px;
  margin: 0 auto;
  display: block;
  width: 90%;
  

  form{
    
    margin: auto;

    display: flex;
    justify-content: space-between;
    
    @media(max-width: 768px){
      flex-direction: column;

      button{
        margin-left: 0px;
      }
    }

    input{
      max-width: 795px;
      width: 100%;
      height: 44px;
      border-radius: 40px;

      background: #3D3D3D;
      border: 0;
      padding: 0 30px;
      color: #ffffff69;
      font-size: 20px;
    }

    button{
      max-width: 230px;
      width: 100%;
      height: 44px;
      border-radius: 40px;
      background: #3B59C7;
      color: #fff;
      font-size: 20px;
      text-transform: uppercase;
      border: 0;
      margin-left: 20px;

      transition: .2s;

      &:hover{
        background: #2a3f8c;
      }

      @media(max-width: 768px){
          margin-left: 0px;
          margin-top: 15px;
      }
    }
  }
`;
