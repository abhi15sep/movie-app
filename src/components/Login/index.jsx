//@flow
import React from 'react'
import { Box, Button, Heading } from 'grommet'
import { StatusGood, StatusUnknown } from 'grommet-icons'

type Props = {
  requestToken?: ?string,
  sessionId?: ?string,
  onGetRequestToken: () => void,
  onGetSessionId: () => void
}

class Login extends React.PureComponent<Props> {
  render() {
    const { onGetRequestToken, onGetSessionId, requestToken } = this.props

    const buttonProps = requestToken
      ? {
          label: 'Allow MovieDB Access',
          icon: <StatusUnknown />,
          onClick: onGetRequestToken
        }
      : {
          label: 'Access Granted!',
          icon: <StatusGood />,
          disabled: true
        }

    return (
      <Box
        basis="small"
        background="neutral-3"
        width="medium"
        height="medium"
        border="all"
        round="medium"
        pad="medium"
      >
        <Heading textAlign="center">Login</Heading>
        <Box gap="medium" fill="vertical" justify="end">
          <Button {...buttonProps} />
          <Button
            disabled={!!requestToken}
            primary
            label="Login"
            onClick={onGetSessionId}
          />
        </Box>
      </Box>
    )
  }
}

export default Login
