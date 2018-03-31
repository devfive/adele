import React from 'react';
import { Switch, Route } from 'react-router-dom';

import data from '../../data/data.JSON';
import getStats from '../../modules/stats/getStats';

import StatsReportContainer from '../statsReportContainer/stats-report-container';
import StatsPickReportContainer from '../statsPickReportContainer/stats-pick-report-container';
import { StyledStatsContainer } from './stats-container.styles';

const stats = getStats(data);
const statsReports = Object.keys(stats).map(key => ({ key, label: stats[key].label }));

const StatsContainer = () => {
  return (
    <StyledStatsContainer>
      <Route
        path="/stats/:report?"
        render={(props) => {
          return <StatsPickReportContainer {...props} statsReports={statsReports} />;
        }}
      />
      <Switch>
        <Route
          path="/stats/:report"
          render={(props) => {
            return <StatsReportContainer {...props} stats={stats} statsReports={statsReports} />;
          }}
        />
      </Switch>
    </StyledStatsContainer>
  );
};

export default StatsContainer;
