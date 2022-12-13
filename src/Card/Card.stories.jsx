import React, { useRef } from 'react';
import { Card, CardFinal } from './';

export default {
  title: 'Card',
  component: Card,
  args: {
    href: 'https://en.wikipedia.org/wiki/Graphic_design',
  }
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});

export const AsLink = Template.bind({});
AsLink.args = {
  as: 'a',
  className: 'as-link'
}

export const PseudoContentTrick = Template.bind({});
PseudoContentTrick.storyName = 'Pseudo-Content Trick'
PseudoContentTrick.args = {
  className: 'pct'
}

export const RedundantClickEvent = Template.bind({});
RedundantClickEvent.decorators = [(Story, props) => {
  const linkRef = useRef();
  const redundantClick = (e) => {
    console.log(e.target.tagName);
    if(window.getSelection()?.toString()) {
      return
    }

    if (linkRef.current === e.target) {
      return
    }

    linkRef.current.click()
  }

  return Story({args: {linkRef: linkRef, onClick: redundantClick, ...props.args}});
}];

export const RedundantClickEventButton = Template.bind({});
RedundantClickEventButton.storyName = 'Redundant Click Event (As Button)'
RedundantClickEventButton.decorators = RedundantClickEvent.decorators;
RedundantClickEventButton.args = {
  as: 'button',
  className: 'as-button'
}

export const RedundantClickEventWithAffordances = Template.bind({});
RedundantClickEventWithAffordances.storyName = 'Redundant Click Event (With Affordances)'
RedundantClickEventWithAffordances.decorators = RedundantClickEvent.decorators;
RedundantClickEventWithAffordances.args = {
  className: 'rce'
}

export const WithMultipleInteractions = (args) => <CardFinal {...args} />
WithMultipleInteractions.decorators = [(Story, props) => {
  const linkRef = useRef();
  const redundantClick = (e) => {
    if(window.getSelection()?.toString()) {
      return
    }

    let t = e.target;

    while (t !== e.currentTarget) {
      if (t.tagName === 'A' || t.tagName === 'BUTTON') {
        return
      }
      t = t.parentNode;
    }

    linkRef.current.click()
  }

  return Story({args: {linkRef: linkRef, onClick: redundantClick, ...props.args}});
}];
