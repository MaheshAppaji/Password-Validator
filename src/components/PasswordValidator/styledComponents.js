import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  height: 100vh;
`

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  background-color: #475569;
  padding: 80px 50px 80px 50px;
  border-radius: 10px;
  width: 70%;
`
export const MainHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 400;
  color: #ffffff;

  text-align: center;
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  color: #edeeff;
  text-align: center;
`

export const PasswordInput = styled.input`
  width: 70%;
  background-color: #edeeff;
  color: #383a4e;
  outline: none;
  border: none;
  margin-top: 25px;
`

export const ErrMsg = styled.p`
  text-align: center;
  font-family: 'Roboto';
  color: #ef4444;
  font-size: 14px;
  font-weight: 500;
`
