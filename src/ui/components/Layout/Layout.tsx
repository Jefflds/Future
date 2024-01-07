import { Grid } from "./Layout.styles";

import ServerList from "../ServerList/ServerList";
import ServerName from "../ServeName/ServeName";
import ChannelInfo from "../ChannelInfo/ChannelInfo";
import ChannelList from "../ChannelList/ChannelList";
import ChannelData from "../ChannelData/ChannelData";
import UserInfo from "../UserInfo/UserInfo";
import UserList from "../UserList/UserList";

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
      <ChannelData />
      <UserList />
    </Grid>
  );
};

export default Layout;
