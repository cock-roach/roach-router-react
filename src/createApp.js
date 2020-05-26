import ReactDOM from 'react-dom';
import MixspaApp from '@mixspa/core/lib/app';

const createApp = (tag, render) => {
  MixspaApp.define({
    tag: tag,
    render: (el) => {
      ReactDOM.render(render(el.getAttributes()), el);
    },
    unmount: (el) => {
      ReactDOM.unmountComponentAtNode(el);
    }
  });
};

export default createApp;
