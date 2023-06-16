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

export const About = () => {
  const [aboutData, setAboutData] = useState();

  const getPosts = async () => {
    const about = await client.fetch('*[_id == "about"]');
    console.log(about);
    setAboutData(Array.from(about));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <OuterWrapper>
      <Navigation />
      <InnerWrapper>
        <AboutText>
          {aboutData && <PortableText value={aboutData[0].about_text} />}
        </AboutText>
      </InnerWrapper>
    </OuterWrapper>
  );
};

const AboutText = styled.div`
  font-family: var(--font-primary);
  font-size: 16px;
  line-height: 1.6;
  margin: 80px auto;
  text-align: center;
  letter-spacing: 0;
  font-weight: 400;
  max-width: 600px;
`;
