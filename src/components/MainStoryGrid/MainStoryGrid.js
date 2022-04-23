import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import {COLORS, QUERIES} from "../../constants";

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <StoryWrapper>
                <SecondaryStory key={story.id} {...story} />
            </StoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>

        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionWrapper>
                <OpinionStory key={story.id} {...story} />
            </OpinionWrapper>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;
  
  @media ${QUERIES.tabletOnly} {
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
    grid-template-columns: 2fr 1fr;
    gap: 0px;
  }
  
  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
    grid-template-columns: 1.5fr 1.2fr 1fr;
    gap: 0px;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  padding-right: 1rem;
  
  @media ${QUERIES.laptopAndUp} {
    border-right: 1px solid ${COLORS.gray["300"]}
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  display: grid;
  padding: 0 1rem;

  @media ${QUERIES.tabletOnly} {
    border-left: 1px solid ${COLORS.gray["300"]}
  }
  
  @media ${QUERIES.laptopAndUp} {
    border-right: 1px solid ${COLORS.gray["300"]}
  }
`;

const StoryWrapper = styled.div`
  border-bottom: 1px solid ${COLORS.gray["300"]};
  
  &:last-of-type {
    border-bottom: none;
  }
`

const OpinionWrapper = styled(StoryWrapper)`
  @media ${QUERIES.tabletOnly} {
    border: none
  }
`

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const OpinionStoryList = styled(StoryList)`

  @media ${QUERIES.tabletOnly} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  margin: 0 0 0 1.5rem;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

export default MainStoryGrid;
