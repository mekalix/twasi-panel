import React from 'react';
import { FormattedMessage } from 'react-intl';

import StatusInfo from './StatusInfo';
import EventLog from './EventLog';

const Status = () => (
  <div>
    <StatusInfo />
    <br />
    <EventLog />
  </div>
);

export default Status;
