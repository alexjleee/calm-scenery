import styled from 'styled-components';
import { ReactComponent as DayIcon } from '../assets/images/icons/day.svg';
import { ReactComponent as NightIcon } from '../assets/images/icons/night.svg';

const ToggleButton = styled.button`
  position: relative;
  transition: all 0.2s ease-in-out;
  border: 1px solid transparent;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    border: 1px solid ${(props) => props.color};
    background-color: rgba(0, 0, 0, 0.1);
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    transition: all 0.5s ease-in-out;
  }

  svg.closing {
    transform: translate(-50%, -50%) scale(0);
  }
`;

const ThemeToggle = ({ color, theme }) => {
  const handleThemeToggle = () => {
    theme.handleTheme(theme.themeOption === 'day' ? 'night' : 'day');
  };
  return (
    <ToggleButton color={color} onClick={handleThemeToggle}>
      <DayIcon
        width='1.5rem'
        height='1.5rem'
        fill={color}
        className={theme.themeOption === 'night' ? 'closing' : null}
      />
      <NightIcon
        width='1.5rem'
        height='1.5rem'
        fill={color}
        className={theme.themeOption === 'day' ? 'closing' : null}
      />
    </ToggleButton>
  );
};

export default ThemeToggle;
