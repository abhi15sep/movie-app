//@flow
import React from 'react'
import { Grommet } from 'grommet'
import { inject } from 'mobx-react'
import Nav from 'components/Nav'
import Router from 'components/Router'

const movieAppTheme = {
  global: {
    font: {
      family: 'Roboto'
    }
  }
}

type Props = {
  routingStore: Object
}

@inject('routingStore')
class App extends React.Component<Props> {
  render() {
    const { routingStore } = this.props

    return (
      <Grommet plain theme={movieAppTheme}>
        <Nav currentPath={routingStore.location.pathname} />
        <Router />
      </Grommet>
    )
  }
}

export default App
