import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import { colors } from './style/variables';
import Button from './components/Button';
import Illust from './components/Illust';
import ThemeToggle from './components/ThemeToggle';

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

const IllustContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
  width: 100%;
  aspect-ratio: 3/4;
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

function App() {
  const [theme, setTheme] = useState('day');
  return (
    <AppContainer theme={theme}>
      <Container>
        <IllustContainer>
          <Illust theme={theme} />
          <ButtonContainer>
            <ThemeToggle
              color={colors.white}
              theme={{ themeOption: theme, handleTheme: setTheme }}
            />
            <Button type='transparent' color={colors.white}>
              Download
            </Button>
          </ButtonContainer>
        </IllustContainer>
      </Container>
    </AppContainer>
  );
}

export default App;
