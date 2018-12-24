//@flow
import React from 'react'
import { InfiniteScroll, Box } from 'grommet'
import SeriesModel from 'models/SeriesModel'
import SeriesListItem from 'components/SeriesListItem'

type Props = {
  series: Array<SeriesModel>,
  onLoadNextPage: () => void
}

class SeriesList extends React.PureComponent<Props> {
  renderMoviesListItem = (series: SeriesModel) => {
    return <SeriesListItem key={series.id} series={series} />
  }

  render() {
    const { series, onLoadNextPage } = this.props
    return (
      <Box>
        <InfiniteScroll items={series} onMore={onLoadNextPage}>
          {(item: SeriesModel) => this.renderMoviesListItem(item)}
        </InfiniteScroll>
      </Box>
    )
  }
}

export default SeriesList
