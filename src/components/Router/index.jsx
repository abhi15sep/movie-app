//@flow
import React from 'react'
import { Route } from 'react-router-dom'
import Login from 'containers/Login'
import Movies from 'containers/Movies'

type Props = {}

class Router extends React.Component<Props> {
  render() {
    return (
      <>
        <Route exact path="/" component={Login} />
        <Route path="/movies" component={Movies} />
      </>
    )
  }
}

export default Router
