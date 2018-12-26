//@flow
import React from 'react'
import { Box } from 'grommet'
import GenreModel from 'models/GenreModel'
import Badge from 'components/Badge'

type Props = {
  genres: Array<GenreModel>
}

class MetaInfos extends React.PureComponent<Props> {
  renderGenre = (genre: GenreModel) => (
    <Badge key={genre.id} label={genre.name} background="neutral-1" />
  )

  render() {
    const { genres } = this.props

    return (
      <Box direction="row" gap="xsmall" wrap>
        {genres.map(this.renderGenre)}
      </Box>
    )
  }
}

export default MetaInfos
