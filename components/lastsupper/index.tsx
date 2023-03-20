import { useEffect, useState } from "react";
import styled from "styled-components";
import STATES from "./states";

type Props = {
  index: number;
};

export default function Index({ index }: Props) {
  const [key, setKey] = useState(normalizeIndex(index));
  const [state, setState] = useState(STATES[0]);

  useEffect(() => {
    setKey(normalizeIndex(index));
  }, [index]);

  useEffect(() => {
    console.log("KEY: ", key);
    setState(STATES[key]);
  }, [key]);

  return (
    <Wrapper>
      {state.d1 && <Figure src="/assets/d1.png" alt="" />}
      {state.d2 && <Figure src="/assets/d2.png" alt="" />}
      {state.d3 && <Figure src="/assets/d3.png" alt="" />}
      {state.d5 && <Figure src="/assets/d5.png" alt="" />}
      {state.d6 && <Figure src="/assets/d6.png" alt="" />}
      {state.d4 && <Figure src="/assets/d4.png" alt="" />}
      {state.jesus && <Figure src="/assets/jesus.png" alt="" />}
      {state.d7 && <Figure src="/assets/d7.png" alt="" />}
      {state.d8 && <Figure src="/assets/d8.png" alt="" />}
      {state.d9 && <Figure src="/assets/d9.png" alt="" />}
      {state.d10 && <Figure src="/assets/d10.png" alt="" />}
      {state.d11 && <Figure src="/assets/d11.png" alt="" />}
      {state.d12 && <Figure src="/assets/d12.png" alt="" />}

      {state.s1 && <Figure src="/assets/s1.png" alt="" />}
      {state.s2 && <Figure src="/assets/s2.png" alt="" />}
      {state.s3 && <Figure src="/assets/s3.png" alt="" />}
      {state.s4 && <Figure src="/assets/s4.png" alt="" />}
      {state.s5 && <Figure src="/assets/s5.png" alt="" />}
      {state.s6 && <Figure src="/assets/s6.png" alt="" />}
      {state.s7 && <Figure src="/assets/s7.png" alt="" />}
      {state.s8 && <Figure src="/assets/s8.png" alt="" />}
      {state.s9 && <Figure src="/assets/s9.png" alt="" />}
      {state.s10 && <Figure src="/assets/s10.png" alt="" />}
      {state.s11 && <Figure src="/assets/s11.png" alt="" />}
      {state.s12 && <Figure src="/assets/s12.png" alt="" />}

      {state.c1 && <Figure src="/assets/c1.png" alt="" />}
      {state.c2 && <Figure src="/assets/c2.png" alt="" />}
      {state.c3 && <Figure src="/assets/c3.png" alt="" />}
      {state.c4 && <Figure src="/assets/c4.png" alt="" />}
      {state.c5 && <Figure src="/assets/c5.png" alt="" />}
      {state.c6 && <Figure src="/assets/c6.png" alt="" />}
      {state.c7 && <Figure src="/assets/c7.png" alt="" />}
      {state.c8 && <Figure src="/assets/c8.png" alt="" />}
      {state.c9 && <Figure src="/assets/c9.png" alt="" />}
      {state.c10 && <Figure src="/assets/c10.png" alt="" />}
      {state.c11 && <Figure src="/assets/c11.png" alt="" />}
      {state.c12 && <Figure src="/assets/c12.png" alt="" />}

      {state.br && <Figure src="/assets/red-brain.png" alt="" />}
      {state.bb && <Figure src="/assets/blue-brain.png" alt="" />}

      {state.arrowBlue && <Figure src="/assets/arrow-blue.png" alt="" />}
      {state.arrowRed && <Figure src="/assets/arrow-red.png" alt="" />}
      {state.signs && <Figure src="/assets/signs.png" alt="" />}
      {state.stars && <Figure src="/assets/stars.png" alt="" />}
      {state.background && <Background src="/assets/bg.jpg" alt="" />}
      {!state.background && (
        <Background src="/assets/bg.jpg" alt="" opacity={0.6} />
      )}
    </Wrapper>
  );
}

const normalizeIndex = function (index: number) {
  const resto = Math.abs(index % STATES.length);
  // console.log(`${index} / ${STATES.length} = ${resto}`);
  return resto;
};

const Wrapper = styled.div`
  position: relative;
`;

const Background = styled.img<{ opacity?: number }>`
  width: 100%;
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
`;

const Figure = styled.img`
  position: absolute;
  width: 100%;
  z-index: 1;
  filter: drop-shadow(0 0 1rem black);
`;
