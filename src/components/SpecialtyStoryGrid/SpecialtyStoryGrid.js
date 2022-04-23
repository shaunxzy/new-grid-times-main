import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import {QUERIES, COLORS} from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SportsTitle>
            <SectionTitle
                cornerLink={{
                    href: '/sports',
                    content: 'Visit Sports page »',
                }}
            >
                Sports
            </SectionTitle>
        </SportsTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  
  @media ${QUERIES.desktopAndUp} {
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }
`;

const MarketsSection = styled.section`
    overflow: auto;

  @media ${QUERIES.desktopAndUp} {
    padding-right: 1rem;
    border-right: 1px solid ${COLORS.gray["300"]};
  }
`;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
`;

const SportsSection = styled.section`
  overflow: auto;
  padding-bottom: 1rem;
`;

const SportsTitle = styled.div`
  position: sticky;
  left: 0;
`

const SportsStories = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  
  @media ${QUERIES.tabletAndUp} {
    grid-auto-flow: column;
    grid-auto-columns: 180px;
  }
`;

export default SpecialtyStoryGrid;
