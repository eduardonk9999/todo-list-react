import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin-top: 40px;

  li {
    width: 100%;
    max-width: 300px;
    padding: 15px 10px;
    margin-bottom: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #393942;

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
`;
