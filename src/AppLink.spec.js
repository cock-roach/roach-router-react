import React from 'react';
import { shallow } from 'enzyme';
import MixspaLink from '@mixspa/core/lib/link';
import AppLink from './AppLink';

describe('AppLink', () => {
  let appLink;
  let clickMock;
  let eventMock;

  beforeEach(() => {
    clickMock = jest.fn();
    MixspaLink.emitLink = jest.fn();
    eventMock = {
      preventDefault: jest.fn(),
      target: {
        getAttribute: jest.fn(() => '/test')
      }
    };
  });

  describe('#render', () => {
    beforeEach(() => {
      appLink = shallow(<AppLink base="http://www.test.com" to="/test">Hello</AppLink>);
    });

    it('should render a hello message', () => {
      expect(appLink.find('a').text()).toBe('Hello');
    });

    it('should link to test', () => {
      expect(appLink.find('a').prop('href')).toBe('http://www.test.com/test');
    });

    it('should emit event when click event', () => {
      appLink.simulate('click', eventMock);
      expect(MixspaLink.emitLink).toHaveBeenCalledWith('/test');
    });
  });

  describe('#on click', () => {
    beforeEach(() => {
      appLink = shallow(<AppLink base="http://www.test.com" to="/test" onClick={ clickMock }>Hello</AppLink>);
    });

    it('should emit event when click event', () => {
      appLink.simulate('click', eventMock);
      expect(MixspaLink.emitLink).toHaveBeenCalledWith('/test');
    });

    it('should invoke click callback when click event', () => {
      appLink.simulate('click', eventMock);
      expect(clickMock).toHaveBeenCalledWith(eventMock);
    });
  });
});
