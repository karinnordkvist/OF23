import React from 'react';
import { Navigation } from '../components/Navigation';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Start = () => {
  return (
    <div>
      <StartNavWrapper>
        <Link to={'/cv'}>Cv</Link>
        <Link to={'/portfolio'}>Portfolio</Link>
        <Link to={'/about'}>About</Link>
      </StartNavWrapper>
    </div>
  );
};

const StartNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  a {
    font-size: 180px;
    font-family: var(--font-primary);
    color: #000;
    text-decoration: none;
    font-weight: 700;
    letter-spacing: -2px;
    line-height: 1;

    &:hover {
      font-family: var(--font-secondary);
      font-style: italic;
      font-size: 210px;
      font-weight: 400;
      letter-spacing: -10px;
      line-height: 180px;
    }

    @media (max-width: 890px) {
      font-size: 142px;
      &:hover {
        font-size: 160px;
        line-height: 0.9;
      }
    }

    @media (max-width: 690px) {
      font-size: 92px;
      &:hover {
        font-size: 109px;
        line-height: 0.9;
        letter-spacing: -5px;
      }
    }

    @media (max-width: 390px) {
      font-size: 86px;
      &:hover {
        font-size: 100px;
        line-height: 0.9;
      }
    }
  }
`;
