import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import { loadSprint, iamDeveloper } from '../../actions';
import ScrumAdmin from '../../components/ScrumAdmin';
import EnterSessionForm from '../../components/EnterSessionForm';

class JoinPokerPage extends React.Component {
  componentDidMount() {
    this.props.iamDeveloper();
  }

  handleSubmit = (e) => {
    const { form, loadSprint } = this.props;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        loadSprint(values.sessionId);
      }
    });
  };

  render() {
    const { sprint, location } = this.props;
    return (
      <div className="my-page-layout">
        {sprint._id ? (
          <ScrumAdmin {...this.props} />
        ) : (
          <EnterSessionForm location={location} />
        )}
      </div>
    );
  }
}

JoinPokerPage.propTypes = {
  loadSprint: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { sprint: state.rootReducer.sprint };
};

const mapDispatchToProps = (dispatch) => ({
  loadSprint: (sessionId) => dispatch(loadSprint(sessionId)),
  iamDeveloper: () => dispatch(iamDeveloper()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(JoinPokerPage));
