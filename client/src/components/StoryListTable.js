import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table } from 'antd';

class StoryListTable extends React.Component {
  render() {
    const columns = [
      {
        title: 'Story',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Story Point',
        dataIndex: 'finalEstimation',
        key: 'finalEstimation',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (status) => (
          <span>
            {status === 'Not Voted'
              ? 'Not Voted'
              : status === 'Active'
              ? 'Active'
              : 'Voted'}
          </span>
        ),
      },
    ];
    const { stories } = this.props.sprint;
    return (
      <Table
        className="story-list-table"
        columns={columns}
        rowKey={(record) => record._id}
        dataSource={stories}
        pagination={false}
      />
    );
  }
}

StoryListTable.propTypes = {
  sprint: PropTypes.object,
};

const mapStateToProps = (state) => {
  return { sprint: state.rootReducer.sprint };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryListTable);
