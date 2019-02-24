import React from 'react';
import { connect } from 'react-redux';
import { Layout, Icon } from 'antd';

const { Header } = Layout;

class DefaultHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
    this.toggleSider = this.toggleSider.bind(this);
  }

  toggleSider() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    return (
      <Header
        className="header"
        style={{
          color: 'white',
          fontSize: 32,
        }}>
        <Icon
          type="thunderbolt"
          style={{ fontSize: '32px', paddingRight: 5 }}
        />
        Scrum Poker Planning
      </Header>
    );
  }
}

DefaultHeader.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultHeader);
