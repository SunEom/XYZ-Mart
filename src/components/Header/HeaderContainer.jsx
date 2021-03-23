import HeaderPresenter from './HeaderPresenter';
import { connect } from 'react-redux';
import axios from 'axios';
const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: async (e) => {
      e.preventDefault();
      await axios
        .get(`${process.env.REACT_APP_SERVER_PATH}/auth/logout`, { withCredentials: true })
        .then((result) => {
          dispatch({ type: 'LOGOUT' });
        })
        .catch((err) => console.error(err));
    },
  };
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderPresenter);
