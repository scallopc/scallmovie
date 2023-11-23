import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.default.high};
  padding: 20px;
  border: 1px solid ${(props) => props.theme.default.border};
`;

export const Title = styled.div`
  color: ${(props) => props.theme.default.low};
`;

export const LowColor = styled.div`
  color: ${(props) => props.theme.default.low};
`;

export const LowBackground = styled.div`
  background: ${(props) => props.theme.default.low};
  color: ${(props) => props.theme.default.high};
  padding: 20px;
`;
