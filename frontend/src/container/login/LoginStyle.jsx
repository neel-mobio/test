import styled from 'styled-components';

const Container = styled.div`
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  & > p {
    color: white;
    margin-top: 20px;
    & > a {
      color: red;
    }
  }
`;
const Wrapper = styled.div`
  background-color: #f6f6f6;
  border-radius: 1px;
  width: 400px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #0000ff;
  }
`;

const WrapperImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 22px;
  width: 360px;
  height: 284px;
  left: calc(50% - 360px / 2);
  top: calc(50% - 284px / 2 - 46px);
`;

const FormControl = styled.div`
  padding-bottom: 22px;
  position: relative;
  label {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
  }
  input {
    border: 2px solid #f0f0f0;
    border-radius: 4px;
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 14px;
    &:focus {
      outline: 0;
      border-color: #777;
    }
  }
`;

export { Container, Wrapper, FormControl, WrapperImg };
