import { FunctionComponent } from 'react';
import { TextField, Button } from '@mui/material';

import styled from 'styled-components';
import SignupUpperComponent from './SignupUpperComponent';
import { NavLink } from 'react-router-dom';

const VectorChild = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  flex-shrink: 0;
`;
const B = styled.b`
  position: relative;
  @media screen and (max-width: 950px) {
    font-size: 1.625rem;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const Emailinputframe = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0.188rem;
`;
const B1 = styled.b`
  width: 5.188rem;
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  padding-right: var(--padding-xl);
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const EmailInput = styled(TextField)`
  border: none;
  background-color: transparent;
  height: 4.063rem;
  flex: 1;
  font-family: var(--font-pretendard);
  font-weight: 500;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
  min-width: 15.188rem;
  max-width: 100%;
`;
const EmailButton = styled(Button)`
  height: 4.063rem;
  width: 8.5rem;
`;
const EmailInputLabel = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0rem 0.75rem;
  max-width: 100%;
`;
const Passwordconfirminputlabel = styled(TextField)`
  border: none;
  background-color: transparent;
  align-self: stretch;
  height: 4.063rem;
  font-family: var(--font-pretendard);
  font-weight: 500;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
`;
const Passwordinputframe = styled.form`
  margin: 0;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem 0rem;
  max-width: 100%;
`;
const Emailfield = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25rem 0rem;
  max-width: 100%;
  font-size: var(--font-size-5xl);
`;
const PasswordInput = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 0rem var(--padding-8xs);
  box-sizing: border-box;
  gap: 1.75rem 0rem;
  max-width: 100%;
`;
const B2 = styled.b`
  width: 6.5rem;
  position: relative;
  font-size: var(--font-size-5xl);
  display: inline-block;
  font-family: var(--font-pretendard);
  color: var(--color-black);
  text-align: center;
  box-sizing: border-box;
  padding-right: var(--padding-xl);
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const Div = styled.div`
  width: 23.563rem;
  position: relative;
  font-size: var(--font-size-base);
  font-weight: 500;
  font-family: var(--font-pretendard);
  color: var(--color-gray-100);
  text-align: left;
  display: inline-block;
  max-width: 100%;
  box-sizing: border-box;
  padding-right: var(--padding-xl);
`;
const PasswordText = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 0rem var(--padding-8xs);
  box-sizing: border-box;
  gap: 1rem 0rem;
  max-width: 100%;
`;
const B3 = styled.b`
  width: 5.188rem;
  position: relative;
  font-size: var(--font-size-5xl);
  display: inline-block;
  font-family: var(--font-pretendard);
  color: var(--color-black);
  text-align: center;
  box-sizing: border-box;
  padding-right: var(--padding-xl);
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const NicknameInput = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.188rem 0rem;
`;
const Existingmemberwarning = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 1.188rem var(--padding-8xs);
  gap: 3rem 0rem;
  @media screen and (max-width: 700px) {
    gap: 3rem 0rem;
  }
`;
const SignUpButton = styled(Button)`
  align-self: stretch;
  flex: 1;
  max-width: 100%;
`;
const SignupButtonFrame = styled.div`
  align-self: stretch;
  height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-8xs) 0rem 0rem;
  box-sizing: border-box;
  max-width: 100%;
`;
const Signupbutton = styled.form`
  margin: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 2.938rem 0rem;
  max-width: 100%;
  @media screen and (max-width: 700px) {
    gap: 2.938rem 0rem;
  }
`;
const Nicknameinputlabel = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-11xs) var(--padding-2xl) 0rem;
  box-sizing: border-box;
  max-width: 100%;
`;
const Div1 = styled.div`
  position: relative;
  font-weight: 500;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const B4 = styled.b`
  position: relative;
  text-decoration: underline;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const InputValidationMessage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0rem 1.688rem;
`;
const LogoFrame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem 2.75rem 0rem var(--padding-xl);
  text-align: left;
  font-size: var(--font-size-xl);
  @media screen and (max-width: 450px) {
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const EmailValidation = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 4.125rem 0rem;
  max-width: 100%;
  @media screen and (max-width: 700px) {
    gap: 4.125rem 0rem;
  }
  @media screen and (max-width: 450px) {
    gap: 4.125rem 0rem;
  }
`;
const EmailFrame = styled.div`
  width: 33.625rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0.688rem 0rem 0rem;
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  @media screen and (max-width: 700px) {
    max-width: calc(100% - 11px);
  }
`;
const Vector = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 3.125rem 0rem;
  max-width: 100%;
  @media screen and (max-width: 700px) {
    gap: 3.125rem 0rem;
  }
`;
const PasswordInputFrame1 = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 0rem var(--padding-11xs);
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-13xl);
  color: var(--color-black);
  font-family: var(--font-pretendard);
`;
const SignupRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0rem 0rem 6.625rem;
  box-sizing: border-box;
  gap: 6.313rem 0rem;
  letter-spacing: normal;
  @media screen and (max-width: 975px) {
    gap: 6.313rem 0rem;
  }
  @media screen and (max-width: 700px) {
    gap: 6.313rem 0rem;
  }
`;

const Signup: FunctionComponent = () => {
  return (
    <SignupRoot>
      <SignupUpperComponent />
      <PasswordInputFrame1>
        <Vector>
          <VectorChild loading="eager" alt="" src="/vector-1.svg" />
          <EmailFrame>
            <EmailValidation>
              <PasswordInput>
                <Emailinputframe>
                  <B>이메일로 가입하기</B>
                </Emailinputframe>
                <Emailfield>
                  <B1>이메일</B1>
                  <Passwordinputframe>
                    <EmailInputLabel>
                      <EmailInput
                        placeholder="이메일 입력"
                        variant="outlined"
                        sx={{
                          '& fieldset': { borderColor: '#8f8f8f' },
                          '& .MuiInputBase-root': {
                            height: '65px',
                            backgroundColor: '#fff',
                            borderRadius: '10px',
                            fontSize: '24px',
                          },
                          '& .MuiInputBase-input': { color: '#8f8f8f' },
                        }}
                      />
                      <EmailButton
                        disableElevation={true}
                        variant="contained"
                        sx={{
                          textTransform: 'none',
                          color: '#fff',
                          fontSize: '24',
                          background: '#2e83f2',
                          borderRadius: '10px',
                          '&:hover': { background: '#2e83f2' },
                          width: 136,
                          height: 65,
                        }}
                      >
                        인증하기
                      </EmailButton>
                    </EmailInputLabel>
                    <EmailInputLabel>
                      <EmailInput
                        placeholder="인증번호 입력"
                        variant="outlined"
                        sx={{
                          '& fieldset': { borderColor: '#8f8f8f' },
                          '& .MuiInputBase-root': {
                            height: '65px',
                            backgroundColor: '#fff',
                            borderRadius: '10px',
                            fontSize: '24px',
                          },
                          '& .MuiInputBase-input': { color: '#8f8f8f' },
                        }}
                      />
                      <EmailButton
                        disableElevation={true}
                        variant="contained"
                        sx={{
                          textTransform: 'none',
                          color: '#fff',
                          fontSize: '24',
                          background: '#2e83f2',
                          borderRadius: '10px',
                          '&:hover': { background: '#2e83f2' },
                          width: 136,
                          height: 65,
                        }}
                      >
                        확인
                      </EmailButton>
                    </EmailInputLabel>
                  </Passwordinputframe>
                </Emailfield>
              </PasswordInput>
              <Nicknameinputlabel>
                <Signupbutton>
                  <PasswordText>
                    <B2>비밀번호</B2>
                    <Div>
                      영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요
                    </Div>
                    <Passwordconfirminputlabel
                      placeholder="비밀번호 입력"
                      variant="outlined"
                      sx={{
                        '& fieldset': { borderColor: '#8f8f8f' },
                        '& .MuiInputBase-root': {
                          height: '65px',
                          backgroundColor: '#fff',
                          borderRadius: '10px',
                          fontSize: '24px',
                        },
                        '& .MuiInputBase-input': { color: '#8f8f8f' },
                      }}
                    />
                  </PasswordText>
                  <Existingmemberwarning>
                    <Passwordconfirminputlabel
                      placeholder="비밀번호 확인"
                      variant="outlined"
                      sx={{
                        '& fieldset': { borderColor: '#8f8f8f' },
                        '& .MuiInputBase-root': {
                          height: '65px',
                          backgroundColor: '#fff',
                          borderRadius: '10px',
                          fontSize: '24px',
                        },
                        '& .MuiInputBase-input': { color: '#8f8f8f' },
                      }}
                    />
                    <NicknameInput>
                      <B3>닉네임</B3>
                      <Passwordconfirminputlabel
                        placeholder="닉네임 입력"
                        variant="outlined"
                        sx={{
                          '& fieldset': { borderColor: '#8f8f8f' },
                          '& .MuiInputBase-root': {
                            height: '65px',
                            backgroundColor: '#fff',
                            borderRadius: '10px',
                            fontSize: '24px',
                          },
                          '& .MuiInputBase-input': { color: '#8f8f8f' },
                        }}
                      />
                    </NicknameInput>
                  </Existingmemberwarning>
                  <SignupButtonFrame>
                    <SignUpButton
                      disableElevation={true}
                      variant="contained"
                      sx={{
                        textTransform: 'none',
                        color: '#fff',
                        fontSize: '24',
                        background: '#2e83f2',
                        borderRadius: '10px',
                        '&:hover': { background: '#2e83f2' },
                      }}
                    >
                      회원가입하기
                    </SignUpButton>
                  </SignupButtonFrame>
                </Signupbutton>
              </Nicknameinputlabel>
              <LogoFrame>
                <InputValidationMessage>
                  <Div1>이미 회원이신가요?</Div1>
                  <NavLink
                    to={'/auth/login'}
                    style={{ textDecoration: 'none' }}
                  >
                    <B4>로그인</B4>
                  </NavLink>
                </InputValidationMessage>
              </LogoFrame>
            </EmailValidation>
          </EmailFrame>
        </Vector>
      </PasswordInputFrame1>
    </SignupRoot>
  );
};

export default Signup;
