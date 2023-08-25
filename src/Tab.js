import React, { useState } from 'react';
import styled from 'styled-components';

export default function Tab() {
  const [currentTab, setCurrentTab] = useState(0);

  const tabMenuArr = [
    { name: '자기소개', content: '안녕하세요! \n \n이지은입니다. 잘부탁해요!' },
    { name: '취미', content: '영화보기' },
    { name: 'MBTI', content: 'ISTP' },
  ];

  return (
    <TabLayout>
      <TabMenusContainer>
        {tabMenuArr.map((tab, index) => (
          <TabMenu
            key={index}
            onClick={() => setCurrentTab(index)}
            active={currentTab === index}
          >
            {tab.name}
          </TabMenu>
        ))}
      </TabMenusContainer>
      <Body>{tabMenuArr[currentTab].content}</Body>
    </TabLayout>
  );
}

const TabLayout = styled.div`
  width: 30rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  border-right: 2px solid #ffb6c1; 
  border-bottom: 2px solid #ffb6c1; 
  border-left: 2px solid #ffb6c1; 
`;


const TabMenusContainer = styled.div`
  display: flex;
  border-bottom: 2px solid #ffb6c1;
`;

const TabMenu = styled.button`
  cursor: pointer;
  padding: 10px;
  border: none;
  background: none;
  outline: none;
  transition: background-color 0.3s, color 0.3s;
  font-size: 1rem;
  text-align: center;
  color: ${({ active }) =>
    active
      ? 'white'
      : '#ffb6c1'}; 
  background-color: ${({ active }) =>
    active ? '#ffb6c1' : 'transparent'};
  flex-grow: 1;

  &:hover {
    background-color: #ffdae5; 
    color: white; 
  }
`;

const Body = styled.div`
  flex-grow: 1;
  padding: 20px;
  border-top: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  white-space: pre-line;
  text-align: center;
`;
