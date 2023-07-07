import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation, Link } from 'react-router-dom';

export const Navigation = () => {
  const cv = useRef();
  const portfolio = useRef();
  const about = useRef();

  useEffect(() => {
    if (window.location.pathname === '/cv') {
      cv.current.classList.add('active');
    } else if (window.location.pathname === '/portfolio') {
      portfolio.current.classList.add('active');
    } else if (window.location.pathname === '/about') {
      about.current.classList.add('active');
    }
  }, [cv, portfolio, about]);

  return (
    <NavigationWrapper>
      <Link to={'/cv'} style={{ textAlign: 'left' }} ref={cv}>
        Cv
      </Link>
      <Link to={'/portfolio'} style={{ textAlign: 'center' }} ref={portfolio}>
        Portfolio
      </Link>
      <Link to={'/about'} style={{ textAlign: 'right' }} ref={about}>
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

  .active {
    font-family: var(--font-secondary);
    font-style: italic;
    font-size: 42px;
    font-weight: 400;
  }

  @media (max-width: 690px) {
    a,
    .active {
      font-size: 20px;
      min-width: 30%;
      letter-spacing: -1px;

      &:hover {
        font-size: 22px;
      }
    }
  }
`;
