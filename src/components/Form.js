import React from 'react';
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;

// value는 input의 내용을 받아옴
// onCreate는 버튼이 클릭될 떄 실행될 함수
// onChange는 input내용이 변경될 때 실행되는 함수
// onKeyPress는 input에서 키를 입력할 때 실행되는 함수임
// 이 함수는 나중에 엔터가 눌렸을 때 onCreate를 한것과 동일한 작업을 하기 위해 사용

