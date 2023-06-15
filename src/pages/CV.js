import React from 'react';
import { Navigation } from '../components/Navigation';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper } from '../components/Styles';

export const CV = () => {
  return (
    <OuterWrapper>
      <Navigation />
      <ThreeColumn>
        <AboutText>
          Sam eossequamet que parum et eossin nim eos quaerspel ipisquis ex et
          qui utem. Nem doloresti nonsed quat pliqui blatis magnamus. Fugitatia
          simint re voluptatur? Uga. Equid qui abori doluptur minum vel iur modi
          nullesti ipit, quam, comnihi ciendelique lacest aut fugitat estrum
          volorendem cum untin nonsequ iandit voluptatem qui cusaecerum rectia
          dolupidunt ella nim con nonse simodipitame officabor ab in por alicita
          tibusdaecea pre volores sinumqu ossinus quo ex etur mosant repe
          endenih iciatur ibuscius volligendu
        </AboutText>
        <AboutText>
          Sam eossequamet que parum et eossin nim eos quaerspel ipisquis ex et
          qui utem. Nem doloresti nonsed quat pliqui blatis magnamus. Fugitatia
          simint re voluptatur? Uga. Equid qui abori doluptur minum vel iur modi
          nullesti ipit, quam, comnihi ciendelique lacest aut fugitat estrum
          volorendem cum untin nonsequ iandit voluptatem qui cusaecerum rectia
          dolupidunt ella nim con nonse simodipitame officabor ab in por alicita
          tibusdaecea pre volores sinumqu ossinus quo ex etur mosant repe
          endenih iciatur ibuscius volligendu
        </AboutText>
        <AboutText>
          Sam eossequamet que parum et eossin nim eos quaerspel ipisquis ex et
          qui utem. Nem doloresti nonsed quat pliqui blatis magnamus. Fugitatia
          simint re voluptatur? Uga. Equid qui abori doluptur minum vel iur modi
          nullesti ipit, quam, comnihi ciendelique lacest aut fugitat estrum
          volorendem cum untin nonsequ iandit voluptatem qui cusaecerum rectia
          dolupidunt ella nim con nonse simodipitame officabor ab in por alicita
          tibusdaecea pre volores sinumqu ossinus quo ex etur mosant repe
          endenih iciatur ibuscius volligendu
        </AboutText>
      </ThreeColumn>
    </OuterWrapper>
  );
};

const ThreeColumn = styled(InnerWrapper)`
  flex-direction: row;
  gap: 40px;
`;

const AboutText = styled.p`
  font-family: var(--font-primary);
  font-size: 16px;
  line-height: 1.6;
  margin: 80px 0;
  text-align: left;
  letter-spacing: 0;
  font-weight: 400;
  width: 33.3%;
`;
