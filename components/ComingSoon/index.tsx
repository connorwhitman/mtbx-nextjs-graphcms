import React from 'react'
import Countdown from './countdown'
import { CoverWrap, Tagline } from './ComingSoon.stc'

type ComingSoon = {
  bg?: string,
  title?: string,
  tagline?: string,
  timeTillDate?: any,
}

const ComingSoon = ({bg, title, tagline, timeTillDate}: ComingSoon) => {
  return (
    <CoverWrap bg={bg}>
      {/* <Logo /> */}
      <Tagline>
        <h1>{title}</h1>
        <h2>{tagline}</h2>
      </Tagline>
      <Countdown timeTillDate={timeTillDate} timeFormat="YYYY-MM-DD" />
      {/* <Social /> */}
    </CoverWrap>
  )
}

export default ComingSoon