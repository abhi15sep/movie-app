//@flow
import React from 'react'
import { Box } from 'grommet'
import { Group, Star, Calendar } from 'grommet-icons'
import Badge from 'components/Badge'

type Props = {
  voteCount: ?(string | number),
  voteAverage: ?(string | number),
  popularity: ?(string | number),
  releaseDate: ?string
}

class MetaInfos extends React.PureComponent<Props> {
  render() {
    const { voteCount, voteAverage, popularity, releaseDate } = this.props
    const voteLabel =
      voteCount && voteAverage ? `${voteCount} / ${voteAverage}` : null

    return (
      <Box direction="row" gap="xsmall" alignSelf="end">
        <Badge
          icon={<Star size="small" />}
          label={voteLabel}
          background="neutral-3"
        />
        <Badge
          icon={<Group size="small" />}
          label={popularity}
          background="neutral-3"
        />
        <Badge
          icon={<Calendar size="small" />}
          label={releaseDate}
          background="neutral-3"
        />
      </Box>
    )
  }
}

export default MetaInfos
