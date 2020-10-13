import React from "react";

import {
  Container,
  HashtagIcon,
  Title,
  Separator,
  Description,
} from "./styles";

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>Geral</Title>
      <Separator />
      <Description>Canal aberto para conversas</Description>
    </Container>
  );
};

export default ChannelInfo;
