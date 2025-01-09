import styled from "styled-components";
import { useTranslation } from 'react-i18next';

const HomeSection = styled.section`
  padding: 4rem 0;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
`;

function Home() {
  const { t } = useTranslation();

  return (
    <HomeSection>
      <Title>{t('home.welcome')}</Title>
      <Description>{t('home.description')}</Description>
    </HomeSection>
  );
}

export default Home; 