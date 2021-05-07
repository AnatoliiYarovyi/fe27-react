import { Component } from 'react';
import Loader from '../components/Loader';

const asyncComponent = ({ loader, loading: Loading = Loader }) => {
  return class AsyncComponent extends Component {
    state = {
      component: null,
    };

    async componentDidMount() {
      const { default: component } = await loader();

      this.setState({ component });
    }

    render() {
      const { component: LoadedComponent } = this.state;

      return LoadedComponent ? (
        <LoadedComponent {...this.props} />
      ) : (
        <Loading />
      );
    }
  };
};

export default asyncComponent;
