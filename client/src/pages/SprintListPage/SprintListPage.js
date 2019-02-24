import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadSprints } from '../../actions';
import { List, Avatar } from 'antd';

class SprintListPage extends React.Component {
  componentDidMount() {
    this.props.loadSprints();
  }
  render() {
    const { allSprints } = this.props;
    return (
      <div className="my-page-layout">
        <List
          itemLayout="horizontal"
          dataSource={allSprints}
          renderItem={(sprint) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://static.thenounproject.com/png/11723-200.png" />
                }
                title={
                  <Link
                    to={{
                      pathname: '/join-poker',
                      sprintId: sprint._id,
                    }}>
                    <span className="sprint-list-item">
                      {sprint.sessionName}
                    </span>
                  </Link>
                }
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

SprintListPage.propTypes = {
  loadSprints: PropTypes.func,
  allSprints: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    allSprints: state.rootReducer.allSprints,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadSprints: () => dispatch(loadSprints()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SprintListPage);
