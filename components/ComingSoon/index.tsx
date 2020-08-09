import React from 'react'
import Countdown from './countdown'
import { CoverWrap, Tagline } from './ComingSoon.stc'

type ComingSoon = {
  bg?: string,
  title?: string,
  tagline?: string,
}

const ComingSoon = ({bg, title, tagline}: ComingSoon) => {
  return (
    <CoverWrap bg={bg}>
      {/* <Logo /> */}
      <Tagline>
        <h1>{title}</h1>
        <h2>{tagline}</h2>
      </Tagline>
      <Countdown timeTillDate="12 01 2020" timeFormat="MM DD YYYY" />
      {/* <Social /> */}
    </CoverWrap>
  )
}

export default ComingSoon