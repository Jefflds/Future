import {
  Container,
  HashtagIcon,
  Title,
  Separator,
  Description,
} from './ChannelInfo.styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>chat-livre</Title>

      <Separator />

      <Description>Canal aberto para conversas</Description>
    </Container>
  );
};

export default ChannelInfo;