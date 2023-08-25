import styled from 'styled-components';
import Header from 'Header';

export default function Skill() {
  return (
    <>
      <Header />
      <Body>
        <img
          src='https://avatars.githubusercontent.com/u/133847649?v=4'
          alt=''
          style={{ width: '30rem', height: '30rem', margin: '10rem 0' }}
        />
        <Profile>
          <h2>GitHub</h2>
          <br />
          <br />
          <br />
          <a
            href='https://github.com/egg-silver'
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <p>
              제 깃허브 주소는 <br />
              <br />
              <b>https://github.com/egg-silver</b>
              <br />
              <br />
              입니다.
            </p>
          </a>
          <br />
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
  text-align: center;
  padding-top: 15rem;
`;
