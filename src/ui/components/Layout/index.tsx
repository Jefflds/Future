import { Grid } from "./Layout.styles";

import ServerList from "../ServerList/index";
import ServerName from "../ServeName/index";
import ChannelInfo from "../ChannelInfo/index";
import ChannelList from "../ChannelList/index";
import ChannelData from "../ChannelData/index";
import UserInfo from "../UserInfo/index";
import UserList from "../UserList/index";

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
