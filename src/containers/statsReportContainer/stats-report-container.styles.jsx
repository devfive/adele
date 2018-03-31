/* eslint-disable */
import styled from 'styled-components';
import { charts } from '../../style_tokens/tokens';

const StyledChartContainer = styled.section`
  width: 100%;
  height: 500px;

  font-family: ${charts.typography.fontFamily}
`;

const StyledHeader = styled.h2`
  font-family: ${charts.typography.fontFamily};
  font-size: ${charts.typography.sizeHeader};
  color: ${charts.typography.colorHeader};
  font-weight: ${charts.typography.weight};
  line-height: calc(${charts.typography.sizeHeader} * 1.3);
  margin-bottom: 20px;
  text-align: center;
  text-transform: capitalize;
`;

export { StyledChartContainer, StyledHeader };
