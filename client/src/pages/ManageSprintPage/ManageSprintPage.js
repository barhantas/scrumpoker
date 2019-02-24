import React from 'react';
import { connect } from 'react-redux';
import ScrumAdmin from '../../components/ScrumAdmin';
import { loadSprint } from '../../actions';
import { Input } from 'antd';

class ManageSprintPage extends React.Component {
  componentDidMount() {
    const { sprintId } = this.props.match.params;
    this.props.loadSprint(sprintId);
    this.props.history.push(sprintId);
  }
  render() {
    const { sprint } = this.props;
    return (
      <div className="scrum-master-page">
        {sprint._id ? (
          <ScrumAdmin {...this.props} />
        ) : (
          <Input
            placeholder="please enter the sprint name"
            onPressEnter={(e) => this.props.loadSprint(e.target.value)}
          />
        )}
      </div>
    );
  }
}

ManageSprintPage.propTypes = {};

const mapStateToProps = (state) => {
  return { sprint: state.rootReducer.sprint };
};

const mapDispatchToProps = (dispatch) => ({
  loadSprint: (id) => dispatch(loadSprint(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageSprintPage);
