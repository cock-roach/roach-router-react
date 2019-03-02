import ReactDOM from 'react-dom';
import Mixspa from '@mixspa/core';

const createApp = (tag, render) => {
  Mixspa.define({
    tag: tag,
    render: (parentEl) => {
      ReactDOM.render(render(), parentEl);
    },
    unmount: (parentEl) => {
      ReactDOM.unmountComponentAtNode(parentEl);
    }
  });
};

export default createApp;