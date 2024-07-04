/**
 * IMPORTS
 */

import styled from "styled-components/native";

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.neutral_25};
`;

const Label = styled.Text`
  color: ${({ theme }) => theme.colors.neutral_100};
  font-size: 32px;
  margin-top: 32px;
`;

/**
 * EXPORTS
 */
export { Container, Label };
