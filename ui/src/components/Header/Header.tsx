import React from 'react';
import { HeaderContainer, Logo, HeaderTitle } from './styles';

class Header extends React.Component<{ logo: string }> {
  state = {
    showLogo: true,
  };

  componentDidUpdate(prevProps: any) {
    if (prevProps.logo !== this.props.logo) {
      this.setState({ showLogo: true });
    }
  }

  render() {
    return (
      <HeaderContainer>
        {this.state.showLogo && <Logo src={this.props.logo} alt="logo" />}
        <HeaderTitle>Travel Blog</HeaderTitle>
      </HeaderContainer>
    );
  }
}

export default Header;
