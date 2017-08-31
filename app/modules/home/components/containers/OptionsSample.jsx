import { connect } from 'react-redux';
import { changeSnippet, loadRoute, updateOptions } from '../../actions/demo';

import OptionsSample from '../OptionsSample';

const mapStateToProps = ({ routes, snippetType, options }) => ({
  route: routes.data['route-1'],
  snippetType,
  options
});

const mapDispatchToProps = (dispatch) => ({
  loadRoute: () => dispatch(loadRoute("route-1")),
  changeSnippet: (type) => dispatch(changeSnippet(type)),
  updateOptions: (options) => dispatch(updateOptions(options))
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionsSample);