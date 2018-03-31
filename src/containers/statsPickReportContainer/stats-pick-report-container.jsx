/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import history from '../../modules/history';
import Button from '../../components/button/button';
import SectionHeader from '../../components/sectionHeader/section-header';
import { StyledStatsPickReportContainer, StyledReportsWrapper } from './stats-pick-report-container.styles';

const StatsPickReportContainer = ({ match, statsReports }) => {
  return (
    <StyledStatsPickReportContainer>
      <SectionHeader content="pick report" id="pick-report" />
      <StyledReportsWrapper>
        { statsReports.map(report => (
          <Button
            key={report.key}
            type="button"
            label={report.label}
            action={() => history.push(`/stats/${report.key}`)}
            tab={1}
            accent={report.key === match.params.report}
          />
        )) }
      </StyledReportsWrapper>
    </StyledStatsPickReportContainer>
  );
};

StatsPickReportContainer.propTypes = {
  /* eslint-disable react/no-typos */
  match: ReactRouterPropTypes.match.isRequired,
  statsReports: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StatsPickReportContainer;
