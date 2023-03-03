import { useCallback, useEffect } from "react";
import styled from "styled-components";

type Props = {
  actions: {
    next: () => void;
    prev: () => void;
  };
};

export default function Index({ actions }: Props) {
  const handleKeypress = useCallback(
    (event: KeyboardEvent) => {
      const { key } = event;
      switch (key) {
        case "ArrowRight":
          actions.next();
          break;
        case "ArrowLeft":
          actions.prev();
          break;
        // case "ArrowDown":
        //   console.log("V");
        //   break;
        // case "ArrowUp":
        //   console.log("A");
        //   break;
      }
    },
    [actions]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeypress);
    return () => window.removeEventListener("keydown", handleKeypress);
  }, [handleKeypress]);

  return (
    <Wrapper>
      <button onClick={() => actions.prev()}>prev</button>
      <button onClick={() => actions.next()}>next</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  button {
    z-index: 10;
    position: fixed;
    top: 0;
    margin: 20px;
    padding: 5px 10px;
  }
  button:first-child {
    left: 0;
  }
  button:last-child {
    right: 0;
  }
`;
