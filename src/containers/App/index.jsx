//@flow
import React from 'react'
import { Grommet, Box } from 'grommet'
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
  routingStore: { location: { pathname: string } }
}

@inject('routingStore')
class App extends React.Component<Props> {
  render() {
    const { routingStore } = this.props

    return (
      <Grommet plain theme={movieAppTheme}>
        <Box background="light-1">
          <Nav currentPath={routingStore.location.pathname} />
          <Router />
        </Box>
      </Grommet>
    )
  }
}

export default App
