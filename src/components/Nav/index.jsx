//@flow
import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button } from 'grommet'
import styled from 'styled-components'

const StyledNav = styled(Box)`
  background-color: white;
`

type Props = {
  currentPath: ?string
}

class Nav extends React.PureComponent<Props> {
  renderNavLink = (path: string, label: string) => {
    const { currentPath } = this.props
    return (
      <Link to={path}>
        <Button primary={currentPath === path} label={label} />
      </Link>
    )
  }

  render() {
    return (
      <StyledNav
        border="all"
        direction="row"
        round="medium"
        pad="medium"
        gap="small"
      >
        {this.renderNavLink('/', 'Login')}
        {this.renderNavLink('/movies', 'Movies')}
        {this.renderNavLink('/series', 'Series')}
      </StyledNav>
    )
  }
}

export default Nav
