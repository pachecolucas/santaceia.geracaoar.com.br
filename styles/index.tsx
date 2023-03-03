import styled from "styled-components";

const Abstract = styled.div`
  display: grid;
  place-items: center;
  img {
    filter: invert(100%);
    width: min(10vw, 10vh);
  }
`;

const AbstractBorder = styled(Abstract)`
  border: min(0.5vw, 0.5vh) solid white;
`;

const AbstractCell = styled(Abstract)`
  box-shadow: 0 0 0 min(0.5vw, 0.5vh) white;
`;

const Wrapper = styled.div`
  display: grid;
  width: min(90vw, 90vh);
  aspect-ratio: 1 / 1;
  grid-template-columns: 15.35% 14.12% 14.12% 14.12% 14.12% 14.12% 15.35%;
  grid-template-rows: 15.35% 14.12% 14.12% 14.12% 14.12% 14.12% 15.35%;
  font-size: min(1.8vw, 1.8vh);
  text-align: center;
  grid-gap: min(0.5vw, 0.5vh);
`;

const God = styled(AbstractBorder)`
  border-radius: 99999px;
  grid-row-start: 1;
  grid-row-end: 8;
  grid-column-start: 1;
  grid-column-end: 8;
`;

const Life = styled(AbstractCell)`
  grid-row-start: 2;
  grid-row-end: 7;
  grid-column-start: 2;
  grid-column-end: 7;
`;

const Top = styled(AbstractBorder)`
  grid-column-start: 2;
  grid-column-end: 7;
  grid-row-start: 1;
  grid-row-end: 1;
  border: none;
`;

const Bottom = styled(AbstractBorder)`
  grid-column-start: 2;
  grid-column-end: 7;
  grid-row-start: 7;
  grid-row-end: 7;
  border: none;
`;

const Left = styled(AbstractBorder)`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 2;
  grid-row-end: 7;
  border: none;
`;

const Right = styled(AbstractBorder)`
  grid-column-start: 7;
  grid-column-end: 7;
  grid-row-start: 2;
  grid-row-end: 7;
  border: none;
`;

const A = styled(AbstractCell)`
  grid-area: 2 / 2 / 7 / 2;
`;

const B = styled(AbstractCell)`
  grid-area: 2 / 3 / 7 / 3;
`;

const C = styled(AbstractCell)`
  grid-area: 2 / 4 / 7 / 4;
`;

const D = styled(AbstractCell)`
  grid-area: 2 / 5 / 7 / 5;
`;

const E = styled(AbstractCell)`
  grid-area: 2 / 6 / 7 / 6;
`;

const _0 = styled(AbstractCell)`
  grid-area: 2 / 2 / 2 / 7;
`;

const _1 = styled(AbstractCell)`
  grid-area: 3 / 2 / 3 / 7;
`;

const _2 = styled(AbstractCell)`
  grid-area: 4 / 2 / 4 / 7;
`;

const _3 = styled(AbstractCell)`
  grid-area: 5 / 2 / 5 / 7;
`;

const _4 = styled(AbstractCell)`
  grid-area: 6 / 2 / 6 / 7;
`;

const A0 = styled(AbstractCell)`
  grid-area: 2 / 2 / 2 / 2;
`;

const A1 = styled(AbstractCell)`
  grid-area: 3 / 2 / 3 / 2;
`;

const A2 = styled(AbstractCell)`
  grid-area: 4 / 2 / 4 / 2;
`;

const A3 = styled(AbstractCell)`
  grid-area: 5 / 2 / 5 / 2;
`;

const A4 = styled(AbstractCell)`
  grid-area: 6 / 2 / 6 / 2;
`;

const B0 = styled(AbstractCell)`
  grid-area: 2 / 3 / 2 / 3;
`;

const B1 = styled(AbstractCell)`
  grid-area: 3 / 3 / 3 / 3;
`;

const B2 = styled(AbstractCell)`
  grid-area: 4 / 3 / 4 / 3;
`;

const B3 = styled(AbstractCell)`
  grid-area: 5 / 3 / 5 / 3;
`;

const B4 = styled(AbstractCell)`
  grid-area: 6 / 3 / 6 / 3;
`;

const C0 = styled(AbstractCell)`
  grid-area: 2 / 4 / 2 / 4;
`;

const C1 = styled(AbstractCell)`
  grid-area: 3 / 4 / 3 / 4;
`;
AbstractCell;
const C2 = styled(AbstractCell)`
  grid-area: 4 / 4 / 4 / 4;
`;

const C3 = styled(AbstractCell)`
  grid-area: 5 / 4 / 5 / 4;
`;

const C4 = styled(AbstractCell)`
  grid-area: 6 / 4 / 6 / 4;
`;

const D0 = styled(AbstractCell)`
  grid-area: 2 / 5 / 2 / 5;
`;

const D1 = styled(AbstractCell)`
  grid-area: 3 / 5 / 3 / 5;
`;

const D2 = styled(AbstractCell)`
  grid-area: 4 / 5 / 4 / 5;
`;

const D3 = styled(AbstractCell)`
  grid-area: 5 / 5 / 5 / 5;
`;

const D4 = styled(AbstractCell)`
  grid-area: 6 / 5 / 6 / 5;
`;

const E0 = styled(AbstractCell)`
  grid-area: 2 / 6 / 2 / 6;
`;

const E1 = styled(AbstractCell)`
  grid-area: 3 / 6 / 3 / 6;
`;

const E2 = styled(AbstractCell)`
  grid-area: 4 / 6 / 4 / 6;
`;

const E3 = styled(AbstractCell)`
  grid-area: 5 / 6 / 5 / 6;
`;

const E4 = styled(AbstractCell)`
  grid-area: 6 / 6 / 6 / 6;
`;

const Styles = {
  Wrapper,
  God,
  Life,
  Top,
  Left,
  Bottom,
  Right,
  _0,
  _1,
  _2,
  _3,
  _4,
  A,
  B,
  C,
  D,
  E,
  A0,
  A1,
  A2,
  A3,
  A4,
  B0,
  B1,
  B2,
  B3,
  B4,
  C0,
  C1,
  C2,
  C3,
  C4,
  D0,
  D1,
  D2,
  D3,
  D4,
  E0,
  E1,
  E2,
  E3,
  E4,
};

export default Styles;
