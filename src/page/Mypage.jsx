import React from "react";

function Mypage() {
  return (
    <>
      <form action="">
        <label for="id">아이디</label>
        <input type="text" name="" id="id" placeholder="아이디입력" />
        <label for="email">이메일</label>
        <input type="email" name="" id="email" placeholder="이메일주소" />
        <label for="password">비밀번호</label>
        <input
          type="password"
          name=""
          id="password"
          placeholder="비밀번호입력"
        />

        <input type="checkbox" name="" id="checkBox" />
        <label for="checkBox">check</label>

        <input type="radio" name="" id="radio" />
        <label for="radio">radio</label>

        <textarea name="" id="" cols="30" rows="10">
          입력글
        </textarea>
      </form>
    </>
  );
}

export default Mypage;
