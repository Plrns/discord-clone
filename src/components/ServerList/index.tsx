import React from "react";

import { Container, Separator } from "./styles";

import ServerButton from "../ServerButton";

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton mentions={72} />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={1} />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={54} />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton hasNotifications mentions={2} />
      <ServerButton />
      <ServerButton mentions={10} />
      <ServerButton />
    </Container>
  );
};

export default ServerList;
