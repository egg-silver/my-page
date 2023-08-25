import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Tab from 'Tab';
import Header from 'Header';

export default function Home() {
  return (
    <>
      <Header/>
      <Body>
        <img
          src='https://th.bing.com/th/id/OIG.obWkTMROmD4vRMuvIeWw?pid=ImgGn'
          alt=''
          style={{ width: '30rem', height: '30rem', margin: '10rem 0' }}
        />
        <Profile>
          <Tab />
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
  align-items: center;
  margin-left: 10rem;
`;

