import ContactForm from "components/contact/ContactForm";
import ButtonInput from "components/ui/input/ButtonInput";
import Texts from "components/ui/Texts";
import React, { useState } from "react";
import styled from "styled-components";
import { RADIUS } from "styles/colors";

const Content = styled.div`
  margin: 25px 0;
  padding: 25px;
  text-align: center;
  background: white;
  border-radius: ${RADIUS};
`;

const Text = styled.div`
  margin: 25px 0;
`;

export default function Crash({ message = 'Internal error', ...props }) {
  const [type, setType] = useState(false);

  return (
    <Content>

      {type && <ContactForm title={"Zgłoś problem"} />}

      <Text>
        <Texts size={"22px"} weight={600} display="block">
          {message}
        </Texts>

        <Texts size={"13px"} weight={600} display="block" top={10} bottom={10}>
          Podczas wykonywania tej czynności wystąpił wewnętrzny problem. <br />
          Jeśli sytuacja będzie się powtarzała napisz nam o tym
        </Texts>

        {!type && !props?.children && (
          <ButtonInput
            onClick={() => setType(true)}
            label={`report.problem`}
          />
        )}
      </Text>

      {props?.children}
    </Content>
  );
};
