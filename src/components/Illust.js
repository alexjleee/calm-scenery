import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { colors } from '../style/variables';
import { ReactComponent as BackgroundImage } from '../assets/images/illust/background.svg';
import { ReactComponent as SunImage } from '../assets/images/illust/sun.svg';
import { ReactComponent as CloudsImage } from '../assets/images/illust/clouds.svg';
import { ReactComponent as Sand1Image } from '../assets/images/illust/sand-1.svg';
import { ReactComponent as Sand2Image } from '../assets/images/illust/sand-2.svg';
import { ReactComponent as ArchImage } from '../assets/images/illust/arch.svg';

const flow = keyframes`
  0% {
    transform: translateX(-80%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const AnimatedCloudsImage = styled(CloudsImage)`
  transform: translateY(10%);
  #cloud-1 {
    animation: ${flow} infinite 45s linear;
  }
  #cloud-2 {
    animation: ${flow} infinite 30s linear;
  }
  #cloud-3 {
    animation: ${flow} infinite 40s linear;
  }
`;

const Container = styled.div`
  svg {
    position: absolute;
    top: 0;
    left: 0;
    transition: fill 0.5s ease-in-out;
  }
`;

const Illust = ({ theme }) => {
  return (
    <Container>
      <BackgroundImage
        fill={theme === 'day' ? colors.sky_day : colors.sky_night}
      />
      <SunImage fill={theme === 'day' ? colors.sun_day : colors.moon_night} />
      <AnimatedCloudsImage
        fill={theme === 'day' ? colors.cloud_day : colors.cloud_night}
      />
      <Sand1Image
        fill={theme === 'day' ? colors.sand1_day : colors.sand1_night}
      />
      <Sand2Image
        fill={theme === 'day' ? colors.sand2_day : colors.sand2_night}
      />
      <ArchImage fill={theme === 'day' ? colors.arch_day : colors.arch_night} />
    </Container>
  );
};

export default Illust;
