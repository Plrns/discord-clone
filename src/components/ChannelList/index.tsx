import React from "react";

import { Container, Category, AddCategoryIcon } from "./styles";

import ChannelButton from "../ChannelButton";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="Geral" />
      <ChannelButton channelName="Adicionar-músicas" />
      <ChannelButton channelName="League of Legends" />
      <ChannelButton channelName="Among us" />
    </Container>
  );
};

export default ChannelList;
