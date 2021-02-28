import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1220px;
  margin: 0 auto;
  display: block;
  width: 90%;

  
  ul{
    list-style: none;
    margin-top: 40px;
   li{
    width: 100%;
    max-width: 300px;
    padding: 15px 10px;
    margin-bottom: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    background: #393942;

    @media(max-width: 768px){
      margin: 20px auto;
    }
    span{
      color: #fff;
      font-size: 20px;
    }
    button{
      background: #3B59C7;
      color: #fff;
      font-size: 18px;
      font-weight: bold;
      border: 0;
      width: 36px;
      height: 36px;
      border-radius: 100px;
      
    }
   }
  }

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
          margin: 20px auto;
      }
    }
  }
`;
