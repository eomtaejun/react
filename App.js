import { useState } from 'react';
import './App.css';

function App() {
  // state는 적용된 부분만 랜더링되서 속도가 빠름 (변수는 한 부분만 변경되어도 전체가 랜더링되서 속도가 크게 느려짐)
  let [title, setTitle] = useState(["남자 코트 추천", "대전 빵집 추천", "돈치치 수비 상향 필요"]);
  let [like, setLike] = useState(10);
  return (
    <>

      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <div className="list">
        <h4>글제목: {title[0]} <span onClick={() => {
          // JSX onclick 방법
          // 1. Click C가 대문자
          // 2. {} 사용
          // 3. 코드가 아닌 함수 사용

          // state 변경 함수 (새로운 state)
          setLike(like + 1);

        }}>👍</span> {like}</h4>
        <p>발행 날짜: 2024. 11. 17.</p>
        <button onClick={() => {
          let copy = [...title]; // copy는 state가 아닌 변수, title을 주소값까지 변경하면 원본까지 훼손, 값만 따와서 하기 위해 분해조립
          // 깊은 복사 deep copy (원본을 건드리지 않는 것)
          // 주소값을 넘겨서 원본에 영향을 미치게 하는 게 얕은 복사 shallow copy
          copy[0] = "여자 코트 추천";
          setTitle(copy);
        }}>글제목 변경</button>
      </div>

      <div className="list">
        <h4>글제목: {title[1]}</h4>
        <p>발행 날짜: 2024. 11. 17.</p>
      </div>


      <div className="list">
        <h4>글제목: {title[2]}</h4>
        <p>발행 날짜: 2024. 11. 17.</p>
      </div>


    </>
  );
}

export default App;
