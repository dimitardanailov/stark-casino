import styled from "styled-components";

export interface Props {
  size: number;
}

const Container = styled.div<Props>`
  position: relative;

  width: ${(p) => `${p.size}px`};
  height: ${(p) => `${p.size}px`};
`;

export const Center = styled(Container)`
  margin: 0 auto;
`;

export default Container;
