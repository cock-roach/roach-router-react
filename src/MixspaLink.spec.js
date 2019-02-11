import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import MixspaEvent from '@mixspa/events';
import MixspaLink from './MixspaLink';

describe('MixspaLink', () => {
  let clickMock;
  let eventMock;
  let mixspaLink;

  beforeEach(() => {
    clickMock = jest.fn();
    MixspaEvent.emit = jest.fn();
    eventMock = {
      target: {
        getAttribute: jest.fn(() => '/test')
      }
    };
  });

  describe('#render', () => {
    beforeEach(() => {
      mixspaLink = shallow(<MixspaLink to="/test">Hello</MixspaLink>);
    });

    it('should render a hello message', () => {
      expect(mixspaLink.find(Link).children().text()).toBe('Hello');
    });

    it('should link to test', () => {
      expect(mixspaLink.find(Link).prop('to')).toBe('/test');
    });

    it('should emit event when click event', () => {
      mixspaLink.simulate('click', eventMock);
      expect(MixspaEvent.emit).toHaveBeenCalledWith('mixspa:url:changed', '/test');
    });
  });

  describe('#on click', () => {
    beforeEach(() => {
      mixspaLink = shallow(<MixspaLink to="/test" onClick={ clickMock }>Hello</MixspaLink>);
    });

    it('should emit event when click event', () => {
      mixspaLink.simulate('click', eventMock);
      expect(MixspaEvent.emit).toHaveBeenCalledWith('mixspa:url:changed', '/test');
    });

    it('should invoke click callback when click event', () => {
      mixspaLink.simulate('click', eventMock);
      expect(clickMock).toHaveBeenCalledWith(eventMock);
    });
  });
});
