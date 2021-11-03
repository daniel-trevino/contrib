import type { NextPage } from 'next'
import styled from 'styled-components'
import SEO from '../components/SEO'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 4rem;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    height: 100vh;
    max-width: 1100px;
    margin: 0 auto;
  }
`

const Half = styled.div`
  flex: 1;
  position: relative;
`

const VideoWrapper = styled.div`
  position: relative;
  overflow: hidden;
  &:before,
  &:after {
    content: '';
    width: 100%;
    height: 150px;
    background: red;
    position: absolute;
    z-index: 3;
  }

  &:before {
    top: 0;
    background: linear-gradient(
      0deg,
      rgba(2, 2, 2, 0) 0%,
      rgba(2, 2, 2, 1) 100%
    );
  }

  &:after {
    bottom: 0;
    background: linear-gradient(
      0deg,
      rgba(2, 2, 2, 1) 100%,
      rgba(2, 2, 2, 0) 0%
    );
  }
  @media (min-width: 768px) {
    flex: 1;
    position: relative;
    min-height: 900px;
  }
`

const Emoji = styled.div`
  font-size: 8rem;
  margin-left: auto;
  margin-top: auto;
`

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 100%;

  @media (min-width: 768px) {
    position: absolute;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  margin-top: 2rem;
`

const List = styled.ul`
  margin: 0;
  padding: 0;

  li {
    list-style: none;
    position: relative;
    padding: 0.3rem 0;
    font-size: 1.2rem;
    font-weight: 400;
    /* border-bottom: 1px solid rgba(255, 255, 255, 0.15); */
    padding-right: 20px;
    padding-left: 20px;
    padding-right: 0.5rem;
    margin-bottom: 20px;

    &:after {
      left: 0;
      top: 100%;
      content: '';
      position: absolute;
      width: 4px;
      height: 100%;
      top: 0;
      background: linear-gradient(
        to right,
        rgb(255, 159, 225) 0%,
        rgb(135, 39, 255) 100%
      );
    }
  }

  &:last-child {
    margin: 0;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`

const Title = styled.h1`
  font-size: 2.8rem;
  background: linear-gradient(
    to right,
    rgb(255, 159, 225) 0%,
    rgb(135, 39, 255) 100%
  );
  background: -webkit-linear-gradient(
    to right,
    rgb(255, 159, 225) 0%,
    rgb(135, 39, 255) 100%
  );
  text-shadow: 0px 0px #00000000;

  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  span {
    display: block;
    padding-top: 1rem;
    font-size: 1.4rem;
  }

  @media (min-width: 768px) {
    font-size: 3.8rem;

    span {
      font-size: 2rem;
    }
  }
`

const Home: NextPage = () => {
  return (
    <Wrapper>
      <SEO ogImageUrl='https://contrib.at/thumbnail.jpeg' />
      <Half>
        <Title>
          Contrib. <br />
          <span>
            DAO contribution and experience, validated <br /> on-chain.
          </span>
        </Title>
        <Container>
          <Emoji>👀</Emoji>
          <List>
            <li>
              <a
                href='https://devpost.com/software/contribute-71auhd'
                target='_blank'
                rel='noreferrer'
              >
                <span>📰</span> DevPost
              </a>
            </li>
            <li>
              <a
                href='https://twitter.com/ContribDAO'
                target='_blank'
                rel='noreferrer'
              >
                <span>🐦</span> ContribDAO Twitter
              </a>
            </li>
            <li>
              <a
                href='https://twitter.com/jontgus/status/1452318726829772812'
                target='_blank'
                rel='noreferrer'
              >
                <span>🚌</span> How it started
              </a>
            </li>
            <li>
              <a
                href='https://twitter.com/madladshad/status/1452339684441534468'
                target='_blank'
                rel='noreferrer'
              >
                <span>🤪</span> Probably nothing
              </a>
            </li>
          </List>
        </Container>
      </Half>
      <VideoWrapper>
        <Video
          src='sword.mp4'
          autoPlay
          loop
          muted
          playsInline
          controls={false}
        />
      </VideoWrapper>
    </Wrapper>
  )
}

export default Home
