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
      {state.d4 && <Figure src="/assets/d4.png" alt="" />}
      {state.d5 && <Figure src="/assets/d5.png" alt="" />}
      {state.d6 && <Figure src="/assets/d6.png" alt="" />}
      {state.jesus && <Figure src="/assets/jesus.png" alt="" />}
      {state.d7 && <Figure src="/assets/d7.png" alt="" />}
      {state.d8 && <Figure src="/assets/d8.png" alt="" />}
      {state.d9 && <Figure src="/assets/d9.png" alt="" />}
      {state.d10 && <Figure src="/assets/d10.png" alt="" />}
      {state.d11 && <Figure src="/assets/d11.png" alt="" />}
      {state.d12 && <Figure src="/assets/d12.png" alt="" />}

      {state.arrowBlue && <Figure src="/assets/arrow-blue.png" alt="" />}
      {state.arrowRed && <Figure src="/assets/arrow-red.png" alt="" />}
      {state.signs && <Figure src="/assets/signs.png" alt="" />}
      {state.stars && <Figure src="/assets/stars.png" alt="" />}
      <Background src="/assets/bg.jpg" alt="" />
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

const Background = styled.img`
  width: 100%;
  opacity: 0.2;
`;

const Figure = styled.img`
  position: absolute;
  width: 100%;
  z-index: 1;
`;
