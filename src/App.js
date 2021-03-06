
import React from "react";
import { hot } from 'react-hot-loader/root';
import Button from '@material-ui/core/Button';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1 className="text-4xl text-white bg-black">
          Hello {name}
        </h1>
        <Button variant="contained">this is a material UI button</Button>
        <button type="button" class="btn btn-primary">
          This is a bootstrap button
        </button>
      </>
    );
  }
}

export default hot(App);
