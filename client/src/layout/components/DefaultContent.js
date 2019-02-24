import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import DefaultContentHeader from './DefaultContentHeader';

const { Content } = Layout;

class DefaultContent extends React.Component {
  render() {
    const { content, disableContentHeader } = this.props;
    const Page = content;
    return (
      <Content className="layout-content">
        {!disableContentHeader && <DefaultContentHeader />}
        <main className={!disableContentHeader ? 'content-header-visible' : ''}>
          {<Page {...this.props} />}
        </main>
      </Content>
    );
  }
}

DefaultContent.propTypes = {
  content: PropTypes.func,
  disableContentHeader: PropTypes.bool,
  contentName: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultContent);
