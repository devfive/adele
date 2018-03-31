/* eslint-disable */
import styled from 'styled-components';

const StyledStatsPickReportContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledReportsWrapper = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  button {
    width: auto;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 10px;
    padding: 0 10px;
  }
`;

export { StyledStatsPickReportContainer, StyledReportsWrapper };
