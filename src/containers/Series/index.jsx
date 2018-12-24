//@flow
import React from 'react'
import { inject, observer } from 'mobx-react'
import SeriesStore from 'stores/SeriesStore'
import SeriesList from 'components/SeriesList'

type Props = {
  seriesStore: SeriesStore
}

@inject('seriesStore')
@observer
class Series extends React.Component<Props> {
  page: number = 1

  componentDidMount() {
    const { seriesStore } = this.props
    seriesStore.discoverSeries()
  }

  handleLoadNextPage = () => {
    const { seriesStore } = this.props
    this.page = this.page + 1
    seriesStore.discoverSeries(this.page.toString())
  }

  render() {
    const { seriesStore } = this.props
    return (
      <SeriesList
        series={seriesStore.series}
        onLoadNextPage={this.handleLoadNextPage}
      />
    )
  }
}

export default Series
