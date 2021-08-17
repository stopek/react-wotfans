import ButtonInput from "components/ui/input/ButtonInput";
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

const TextContent = styled.div`
  margin: 25px 0;
  display: block;
`;

const Text = styled.div`
  display: block;
  font-size: 20px;
  font-weight: 600;
`;

export default function Crash({ message = 'Internal error', ...props }) {
  const [type, setType] = useState(false);

  return (
    <Content>
      <TextContent>
        <Text>
          {message}
        </Text>

        <Text>
          Podczas wykonywania tej czynności wystąpił wewnętrzny problem. <br />
          Jeśli sytuacja będzie się powtarzała napisz nam o tym
        </Text>

        {!type && !props?.children && (
          <ButtonInput
            onClick={() => setType(true)}
            label={`report.problem`}
          />
        )}
      </TextContent>

      {props?.children}
    </Content>
  );
};
