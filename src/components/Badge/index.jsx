//@flow
import React from 'react'
import type { Node } from 'react'
import { Box, Text } from 'grommet'

type Props = {
  icon?: ?Node,
  label: ?(string | number),
  background: string
}

class Badge extends React.PureComponent<Props> {
  render() {
    const { icon, label, background } = this.props

    return (
      <Box
        direction="row"
        align="center"
        gap="xsmall"
        round
        background={background}
        pad={{ horizontal: 'small' }}
      >
        {icon}
        <Text size="small">{label}</Text>
      </Box>
    )
  }
}

export default Badge
