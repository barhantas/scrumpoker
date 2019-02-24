import './index.scss';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ROUTES } from './../routes';
import DefaultFooter from './components/DefaultFooter';
import DefaultContent from './components/DefaultContent';
import DefaultHeader from './components/DefaultHeader';
import DefaultSider from './components/DefaultSider';
import NotFoundPage from '../pages/NotFoundPage';
import io from 'socket.io-client';
import { SOCKET_URL } from '../constants';
import { captureStoryUpdate, captureEstimationUpdate } from '../actions';

class DefaultLayout extends React.Component {
  componentDidMount() {
    const { captureStoryUpdate } = this.props;
    const socket = io(SOCKET_URL);

    socket.on('connect', () => {
      //console.log('hi');
    });
    socket.on('story', (story) => {
      console.log(story);
      captureStoryUpdate(story);
    });
    socket.on('estimation', (estimation) => {
      console.log(estimation);
      captureEstimationUpdate(estimation);
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Layout className="layout">
          <Switch>
            {ROUTES.map((route) => (
              <Route
                exact
                path={route.path}
                key={`route-${route.path}`}
                render={(props) => (
                  <React.Fragment>
                    {!route.disableHeader && <DefaultHeader />}
                    <Layout>
                      {!route.disableSider && <DefaultSider {...props} />}
                      <DefaultContent
                        content={route.component}
                        disableContentHeader={route.disableContentHeader}
                        //collapsed={collapsed}
                        contentName={route.name}
                        {...props}
                      />
                    </Layout>
                    {!route.disableFooter && <DefaultFooter />}
                  </React.Fragment>
                )}
              />
            ))}
            <Route component={NotFoundPage} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

DefaultLayout.propTypes = {
  captureStoryUpdate: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  captureStoryUpdate: (story) => dispatch(captureStoryUpdate(story)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultLayout);
