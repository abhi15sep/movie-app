//@flow
import React from 'react'
import { Box, Text } from 'grommet'
import { Group, Star, Calendar } from 'grommet-icons'
import styled from 'styled-components'
import SeriesModel from 'models/SeriesModel'
import Badge from 'components/Badge'

const StyledImage = styled.img`
  width: 200px;
  object-fit: contain;
`

type Props = {
  series: SeriesModel
}

class SeriesListItem extends React.PureComponent<Props> {
  render() {
    const { series } = this.props
    return (
      <Box pad="small">
        <Box
          elevation="medium"
          border="all"
          round="medium"
          direction="row"
          overflow="hidden"
        >
          <StyledImage src={series.posterUrl} />
          <Box pad="medium" gap="small">
            <Text size="large" weight="bold">
              {series.name}
            </Text>
            <Box direction="row" gap="xsmall" wrap>
              {series.genres.map(genre => (
                <Badge
                  key={genre.id}
                  label={genre.name}
                  background="neutral-1"
                />
              ))}
            </Box>
            <Box flex="grow">
              <Text size="small">{series.overview}</Text>
            </Box>
            <Box direction="row" gap="xsmall" alignSelf="end">
              <Badge
                icon={<Star size="small" />}
                label={`${series.vote_count ||
                  'no vote_count'} / ${series.vote_average ||
                  'no vote_average'}`}
                background="neutral-3"
              />
              <Badge
                icon={<Group size="small" />}
                label={series.popularity}
                background="neutral-3"
              />
              <Badge
                icon={<Calendar size="small" />}
                label={series.first_air_date}
                background="neutral-3"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }
}

export default SeriesListItem
