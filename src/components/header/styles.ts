import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.default.high};
  border: 1px solid ${(props) => props.theme.default.border};
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;
