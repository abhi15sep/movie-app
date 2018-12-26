//@flow
import React from 'react'
import { Box, Text } from 'grommet'
import styled from 'styled-components'
import SeriesModel from 'models/SeriesModel'
import MetaInfos from 'components/MetaInfos'
import Genres from 'components/Genres'

const StyledImage = styled.img`
  width: 200px;
  object-fit: contain;
`

const StyledSeriesListItem = styled(Box)`
  background-color: white;
`

type Props = {
  series: SeriesModel
}

class SeriesListItem extends React.PureComponent<Props> {
  render() {
    const { series } = this.props
    return (
      <Box pad="small">
        <StyledSeriesListItem
          elevation="medium"
          border="all"
          round="medium"
          direction="row"
          overflow="hidden"
        >
          <StyledImage src={series.posterUrl} />
          <Box pad="medium" gap="small" flex>
            <Box>
              <Text size="large" weight="bold" truncate>
                {series.name}
              </Text>
              <Box direction="row" gap="xsmall">
                <Text size="medium" truncate>
                  {series.original_name}
                </Text>
                <Text size="medium">[{series.original_language}]</Text>
              </Box>
            </Box>
            <Genres genres={series.genres} />
            <Box flex overflow="scroll">
              <Text size="small">{series.overview}</Text>
            </Box>
            <MetaInfos
              voteAverage={series.vote_average}
              voteCount={series.vote_count}
              popularity={series.popularity}
              releaseDate={series.first_air_date}
            />
          </Box>
        </StyledSeriesListItem>
      </Box>
    )
  }
}

export default SeriesListItem
