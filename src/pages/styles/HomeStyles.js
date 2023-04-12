import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 10px;

  button {
    border: none;
    justify-content: center;
    align-items: center;
    background: #33a4f5;
    border-radius: 8px;
    font-style: normal;
    padding: 8px 10px;
    font-size: 1.1rem;
    color: #fff;
    cursor: pointer;
  }
`;
export const PageNumber = styled.span`
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  :hover {
    text-decoration: underline;
  }
`;
export const SelectedPage = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #fff;
  background-color: #33a4f5;
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;
