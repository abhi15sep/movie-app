//@flow
import React from 'react'
import { inject, observer } from 'mobx-react'
import { Grid } from 'grommet'
import Login from 'components/Login'
import AuthStore from 'stores/AuthStore'

type Props = {
  authStore: AuthStore
}

@inject('authStore')
@observer
class App extends React.Component<Props> {
  handleGetRequestToken = () => {
    const { authStore } = this.props
    authStore.getRequestToken()
  }

  handleGetSessionId = () => {
    const { authStore } = this.props
    authStore.getSessionId()
  }

  render() {
    return (
      <Grid fill justifyContent="center" alignContent="center">
        <Login
          onGetRequestToken={this.handleGetRequestToken}
          onGetSessionId={this.handleGetSessionId}
        />
      </Grid>
    )
  }
}

export default App
