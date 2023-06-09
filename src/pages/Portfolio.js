import React, { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper } from '../components/Styles';
// import { getPosts } from '@sanity.config';
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '68o5widz',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

export const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState();
  // const projects = await getProjects();

  const getPosts = async () => {
    const portfolio = await client.fetch(
      '*[_id == "portfolio"]{_id, portfolio_items[]->{"mainImage":mainImage.asset->{url}, title, dropshadow}}'
    );
    // console.log(Array.from(portfolio));
    setPortfolioData(Array.from(portfolio));
  };

  useEffect(() => {
    getPosts();
  }, []);

  // portfolioData && console.log(portfolioData[0].portfolio_items);

  return (
    <OuterWrapper>
      <Navigation />
      <InnerWrapper>
        {portfolioData &&
          portfolioData[0].portfolio_items.map((item, index) => {
            return (
              <PortfolioItemWrapper key={index}>
                <img
                  className={item.dropshadow ? 'drop-shadow' : ''}
                  src={item.mainImage.url}
                  alt={item.mainImage.alt}
                />
                <p
                  style={{
                    fontWeight: '400',
                    fontStyle: 'italic',
                    textAlign: 'center',
                  }}
                >
                  {item.title}
                </p>
              </PortfolioItemWrapper>
            );
          })}
      </InnerWrapper>
    </OuterWrapper>
  );
};

const PortfolioItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 40px;

  img {
    max-width: 1200px;
    max-height: 70vh;
    object-fit: cover;
  }

  .drop-shadow {
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.16));
  }

  @media (max-width: 960px) {
    img {
      width: 100%;
    }
  }
`;
