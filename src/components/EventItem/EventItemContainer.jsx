import React from 'react';
import EventItemPresenter from './EventItemPresenter';

const EventItemContainer = ({ img, title, subtitle }) => {
  let props = { img, title, subtitle };
  return <EventItemPresenter {...props}></EventItemPresenter>;
};

export default EventItemContainer;
