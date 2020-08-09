import React from 'react';
import { Moment } from 'moment'
let moment = require('moment');

import { CountdownWrapper, NumberWrap } from './ComingSoon.stc'

class Countdown extends React.Component<{timeTillDate: any, timeFormat: any}, {}> {
  interval: number;

  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  };

  componentDidMount() {
    this.interval = window.setInterval(
      () => {
        const { timeTillDate, timeFormat } = this.props;
        const then: any = moment(timeTillDate, timeFormat);
        const now: any = moment();
        const countdown = moment(then - now);
        const days = countdown.format('D');
        const hours = countdown.format('HH');
        const minutes = countdown.format('mm');
        const seconds = countdown.format('ss');

        this.setState({ days, hours, minutes, seconds});
      },
      1000
    );
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <CountdownWrapper>
        <NumberWrap>
          {days}<span>days</span>
        </NumberWrap>
        <NumberWrap>
          {hours}<span>hours</span>
        </NumberWrap>
        <NumberWrap>
          {minutes}<span>minutes</span>
        </NumberWrap>
        <NumberWrap>
          {seconds}
          <span>seconds</span>
        </NumberWrap>
      </CountdownWrapper>
    );
  }
}

export default Countdown