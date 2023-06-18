import React, { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper } from '../components/Styles';
import { PortableText } from '@portabletext/react';
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '68o5widz',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

export const CV = () => {
  const [cvData, setCvData] = useState();

  const getPosts = async () => {
    const cv = await client.fetch('*[_id == "cv"]');
    // console.log(cv);
    setCvData(Array.from(cv));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <OuterWrapper>
      <Navigation />
      <ThreeColumn>
        <div>{cvData && <PortableText value={cvData[0].cv_text} />}</div>
        <div>{cvData && <PortableText value={cvData[0].cv_text_2} />}</div>
        <div>{cvData && <PortableText value={cvData[0].cv_text_3} />}</div>
      </ThreeColumn>
    </OuterWrapper>
  );
};

const ThreeColumn = styled(InnerWrapper)`
  flex-direction: row;
  gap: 40px;
  font-family: var(--font-primary);

  h3 {
    letter-spacing: 0;
    font-size: 20px;
    margin-bottom: 20px;
  }

  div {
    font-family: var(--font-primary);
    font-size: 16px;
    line-height: 1.4;
    margin: 80px 0;
    text-align: left;
    letter-spacing: 0;
    font-weight: 400;
    width: 21%;
  }

  @media (max-width: 690px) {
    flex-direction: column;

    div {
      margin: 20px 0;
      width: 100%;
    }
  }
`;
