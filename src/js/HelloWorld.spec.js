import React from 'react';
import { mount } from 'enzyme';
import HelloWorld from './HelloWorld';

describe('HelloWorld', () => {
  let helloWorld;

  describe('#render', () => {
    beforeEach(() => {
      helloWorld = mount(<HelloWorld message="World"/>);
    });

    it('should render a hello world message', () => {
      expect(helloWorld.text()).toBe('Hello World');
    });
  });
});
