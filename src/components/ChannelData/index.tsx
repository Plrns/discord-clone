import React, { useRef, useEffect } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Lil Pedrada"
            date="07/01/2020"
            content="Happy Bisnay to me!"
          />
        ))}

        <ChannelMessage
          author="decobraz03"
          date="25/10/2020"
          content={
            <>
              <Mention>@Lil Pedrada</Mention>, bora de lolzinho?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #Geral" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
