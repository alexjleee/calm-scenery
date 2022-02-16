import { useState, useRef } from 'react';
import styled from 'styled-components';
import './App.css';
import { colors } from './style/variables';
import { ReactComponent as GithubIcon } from './assets/images/icons/github.svg';
import Button from './components/Button';
import Illust from './components/Illust';
import ThemeToggle from './components/ThemeToggle';
import exportElementAsPNG from './utils/downloadImage';

const AppContainer = styled.div`
  transition: all 0.5s ease-in-out;
  background-color: ${(props) =>
    props.theme === 'day' ? colors.bg_day : colors.bg_night};
`;

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  height: 100vh;
`;

const InnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
  width: 100%;
  aspect-ratio: 3/4;
`;

const IllustContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 1rem;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const GithubLink = styled.a`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  opacity: 0.5;
  transform: scale(0.9);
  transition: all 0.5s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

function App() {
  const [theme, setTheme] = useState('day');
  const imageRef = useRef();
  return (
    <AppContainer theme={theme}>
      <Container>
        <InnerContainer>
          <IllustContainer ref={imageRef}>
            <Illust theme={theme} />
          </IllustContainer>
          <ButtonContainer>
            <ThemeToggle
              color={colors.white}
              theme={{ themeOption: theme, handleTheme: setTheme }}
            />
            <Button
              type='transparent'
              color={colors.white}
              handleOnClick={() =>
                exportElementAsPNG(imageRef.current, `calm-scenery-${theme}`)
              }
            >
              Download
            </Button>
          </ButtonContainer>
        </InnerContainer>
      </Container>
      <GithubLink href='https://github.com/alexjleee/calm-scenery'>
        <GithubIcon width='1.5rem' height='1.5rem' fill={colors.white} />
        <span>alexjleee</span>
      </GithubLink>
    </AppContainer>
  );
}

export default App;
