import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
} from './UserInfo.styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Teste 123</strong>
          <span>#2689</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;