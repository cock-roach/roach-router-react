import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import Mixspa from '@mixspa/core';
import EventLink from './EventLink';

describe('EventLink', () => {
  let clickMock;
  let eventMock;
  let eventLink;

  beforeEach(() => {
    clickMock = jest.fn();
    Mixspa.emit = jest.fn();
    eventMock = {
      target: {
        getAttribute: jest.fn(() => '/test')
      }
    };
  });

  describe('#render', () => {
    beforeEach(() => {
      eventLink = shallow(<EventLink to="/test">Hello</EventLink>);
    });

    it('should render a hello message', () => {
      expect(eventLink.find(Link).children().text()).toBe('Hello');
    });

    it('should link to test', () => {
      expect(eventLink.find(Link).prop('to')).toBe('/test');
    });

    it('should emit event when click event', () => {
      eventLink.simulate('click', eventMock);
      expect(Mixspa.emit).toHaveBeenCalledWith('mixspa:url:changed', '/test');
    });
  });

  describe('#on click', () => {
    beforeEach(() => {
      eventLink = shallow(<EventLink to="/test" onClick={ clickMock }>Hello</EventLink>);
    });

    it('should emit event when click event', () => {
      eventLink.simulate('click', eventMock);
      expect(Mixspa.emit).toHaveBeenCalledWith('mixspa:url:changed', '/test');
    });

    it('should invoke click callback when click event', () => {
      eventLink.simulate('click', eventMock);
      expect(clickMock).toHaveBeenCalledWith(eventMock);
    });
  });
});
