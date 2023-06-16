import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation, Link } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState('');
  const cv = useRef();
  const portfolio = useRef();
  const about = useRef();

  const checkIfActive = (ref) => {
    if (location.pathname === ref) {
    }
  };

  return (
    <NavigationWrapper>
      <Link
        to={'/cv'}
        location={location.pathname}
        style={{ textAlign: 'left' }}
        ref={cv}
        className="cv"
      >
        Cv
      </Link>
      <Link
        to={'/portfolio'}
        location={location.pathname}
        style={{ textAlign: 'center' }}
        ref={portfolio}
        className="portfolio"
      >
        Portfolio
      </Link>
      <Link
        to={'/about'}
        location={location.pathname}
        style={{ textAlign: 'right' }}
        ref={about}
        className="about"
      >
        About
      </Link>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;

  a {
    font-size: 40px;
    min-width: 10%;
    font-family: var(--font-primary);
    color: #000;
    text-decoration: none;
    font-weight: 700;
    letter-spacing: -2px;

    &:hover {
      font-family: var(--font-secondary);
      font-style: italic;
      font-size: 42px;
      font-weight: 400;
    }
  }

  @media (max-width: 690px) {
    a {
      font-size: 28px;
      min-width: 15%;

      &:hover {
        font-size: 30px;
      }
    }
  }
`;
