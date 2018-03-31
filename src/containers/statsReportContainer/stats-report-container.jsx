import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { ResponsiveBar, ResponsivePie } from 'nivo';

import { StyledChartContainer, StyledHeader } from './stats-report-container.styles';

const StatsReportContainer = ({ match, stats }) => {
  const reportId = match.params.report;
  if (!stats[reportId]) {
    return null;
  }

  const report = stats[reportId];
  const reportKeys = Object.keys(report.data);
  const isPieChart = reportKeys.length <= 5;
  let reportData = [];

  if (!isPieChart) {
    reportData[0] = {
      id: reportId,
    };

    reportKeys.forEach((key) => {
      reportData[0][key] = report.data[key].count;
    });
  } else {
    reportData = reportKeys.map((key) => {
      return {
        id: key,
        label: report.data[key].data,
        value: report.data[key].count,
      };
    });
  }

  return (
    <StyledChartContainer>
      <StyledHeader>{report.label}</StyledHeader>
      {
        isPieChart
          ? (
            <ResponsivePie
              data={reportData}
              margin={{
                top: 50,
                right: 50,
                bottom: 150,
                left: 50,
              }}
            />
          )
          : (
            <ResponsiveBar
              groupMode="grouped"
              layout="vertical"
              margin={{
                top: 50,
                right: 50,
                bottom: 150,
                left: 50,
              }}
              data={reportData}
              keys={reportKeys}
            />
          )
      }
    </StyledChartContainer>
  );
};

StatsReportContainer.propTypes = {
  /* eslint-disable react/no-typos, react/forbid-prop-types */
  match: ReactRouterPropTypes.match.isRequired,
  stats: PropTypes.PropTypes.object.isRequired,
};

export default StatsReportContainer;
