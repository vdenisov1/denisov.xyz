import React from 'react';
import './Timeline.scss';

export interface TimelineProps {
  readonly items: TimelineItem[];
}

export interface TimelineItem {
  readonly key: string;
  readonly date: string;
  readonly title: string;
  readonly detail: string;
}

export default class Timeline extends React.Component<TimelineProps> {

  renderItems(items: TimelineItem[]) {
    return items.map((item) => {
      return (
        <li className="tl-item" key={item.key}>
          <div className="timestamp">{item.date}</div>
          <div className="item-title">{item.title}</div>
          <div className="item-detail">{item.detail}</div>
        </li>
      )
    });
  }
  
  render() {
    return (
      <>
        <div className="history-tl-container">
          <ul className="tl">
            { this.renderItems(this.props.items) }
          </ul>
        </div>
      </>
    );
  }
}