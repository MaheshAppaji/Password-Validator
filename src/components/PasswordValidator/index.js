import {useState} from 'react'

import {
  BgContainer,
  PasswordContainer,
  MainHeading,
  Description,
  PasswordInput,
  ErrMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [passwordInput, setPassword] = useState('')

  const showErrMsg = passwordInput.length < 8

  const updatePassword = e => {
    setPassword(e.target.value)
  }

  //   const errorMsg = () => (

  //   )

  return (
    <>
      <BgContainer>
        <PasswordContainer>
          <MainHeading>Password Validator</MainHeading>
          <Description>
            Check how strong and secure is your password
          </Description>
          <PasswordInput
            type="password"
            onChange={updatePassword}
            value={passwordInput}
          />
          {showErrMsg && (
            <ErrMsg>Your Password must be at least 8 characters </ErrMsg>
          )}
        </PasswordContainer>
      </BgContainer>
    </>
  )
}

export default PasswordValidator
