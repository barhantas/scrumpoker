import React from 'react';
import { connect } from 'react-redux';
import { loadSprint, iamScrumMaster } from '../../actions';
import ScrumAdmin from '../../components/ScrumAdmin';
import EnterSession from '../../components/EnterSessionForm';

class ManageSprintPage extends React.Component {
  componentDidMount() {
    const { iamScrumMaster } = this.props;
    iamScrumMaster();
  }
  render() {
    const { sprint, location } = this.props;

    return (
      <div className="my-page-layout">
        {sprint._id ? (
          <ScrumAdmin {...this.props} />
        ) : (
          <EnterSession location={location} />
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
  iamScrumMaster: () => dispatch(iamScrumMaster()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageSprintPage);
