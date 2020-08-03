import React from 'react'
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
      <Tagline />
      {/* <Countdown />
      <Social /> */}
    </CoverWrap>
  )
}

export default ComingSoon