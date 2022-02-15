import styled from 'styled-components';

const DefaultButton = styled.button`
  transition: all 0.2s ease-in-out;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
`;

const TransparentButton = styled(DefaultButton)`
  border: 1px solid transparent;
  background-color: transparent;
  color: ${(props) => props.color};

  &:hover {
    border: 1px solid ${(props) => props.color};
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Button = (props) => {
  return (
    <TransparentButton color={props.color}>{props.children}</TransparentButton>
  );
};

export default Button;
