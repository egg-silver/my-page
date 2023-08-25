import styled from 'styled-components';
import Header from 'Header';

export default function Skill() {
  return (
    <>
      <Header />
      <Body>
        <img
          src='https://i.namu.wiki/i/WhcJiAdwNimn8b55zI_inqG0F83BetDTWAi8kU_xJTreWFx6nRYBvaZw9-Ad7RFseS1O9YeH19Xh4bQBIDJSaKojTcbqhPCoRs-eMVj3D5P7SY9vWHEQtOwBWckek3op3X6fvwVb0fCK0PXOZo3GXQ.svg'
          alt=''
          style={{ width: '30rem', height: '30rem', margin: '10rem 0' }}
        />
        <Profile>
          <h2>React</h2><br/>
          <p>리액트는 사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리</p>
        </Profile>
      </Body>
    </>
  );
}
const Body = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10rem;
`;

const Profile = styled.div`
  width: 60rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 3rem;
  white-space: pre-line;
  padding-top: 20rem;
`;
