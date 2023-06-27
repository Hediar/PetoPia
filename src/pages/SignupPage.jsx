import React from 'react';

function SignupPage() {
  return (
    <>
      <div className="wrapper">
        <div className="title">
          <h1 style={{ fontSize: '21px' }}>회원가입</h1>
        </div>
        <div className="email">
          <input id="email" type="text" placeholder="이메일을 입력해 주세요." />
          <div id="emailError" className="error"></div>
        </div>
        <div className="name">
          <input id="name" type="text" placeholder="이름을 입력해 주세요." />
          <div id="nameError" className="error"></div>
        </div>
        <div className="password">
          <input id="password" type="password" placeholder="비밀번호를 입력해 주세요." />
          <div id="passwordError" className="error"></div>
        </div>
        <div className="passwordCheck">
          <input id="passwordCheck" type="password" placeholder="비밀번호를 다시 입력해 주세요." />
          <div id="passwordCheckError" className="error"></div>
        </div>
        <div className="phone">
          <input id="phone1" type="text" size="1" maxlength="3" oninput="changePhone1()" />
          <input id="phone2" type="text" size="3" maxlength="4" oninput="changePhone2()" />
          <input id="phone3" type="text" size="3" maxlength="4" oninput="changePhone3()" />
        </div>
        <div className="auth">
          <div id="certificationNumber">000000</div>
          <button disabled id="sendMessage" onclick="getToken()">
            인증번호 전송
          </button>
        </div>

        <div className="timer">
          <div id="timeLimit">03:00</div>
          <button disabled id="completion" onclick="checkCompletion()">
            인증확인
          </button>
        </div>
        <div className="area">
          <select id="area">
            <option selected disabled>
              지역을 선택하세요.
            </option>
            <option>서울</option>
            <option>인천</option>
            <option>경기</option>
          </select>
          <div id="areaError" className="error"></div>
        </div>
        <div className="gender">
          <input id="gender_man" type="radio" name="gender" />
          남성
          <input id="gender_woman" type="radio" name="gender" />
          여성
          <div id="genderError" className="error"></div>
        </div>
        <div className="line">
          <hr />
        </div>
        <div className="signUp">
          <button id="signUpButton" disabled onclick="signUpCheck()">
            가입하기
          </button>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
