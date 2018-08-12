import React, {Component} from 'react';
import {transaction, computed} from 'mobx';
import {observer} from 'mobx-react';
import {DraggableCore} from 'react-draggable';

@observer
class BoxView extends Component {
  render() {
    const {box} = this.props;
    return (
      <DraggableCore// onStart={this.handleStart} onDrag={this.handleDrag}// onStop={this.handleStop}>
        <div style={{
          width: box.width,
          left: box.x,
          top: box.y
        }} onClick={this.handleClick} className={this.isSelected ? 'box box-selected' : 'box' }>
          {box.name}
        </div>
      </DraggableCore>
    )
  }

  @computed get isSelected() {
    return this.props.store.selection && this.props.store.selection.id === this.props.box.id;
  }

  handleClick = (e) => {
    this.props.store.selection = this.props.box;
    e.stopPropagation();
  }

  handleDrag = (e, dragInfo) => {
    transaction(() => {
      this.props.box.x += dragInfo.deltaX;
      this.props.box.y += dragInfo.deltaY;
    });
  }

  /*  handleStart = (e, dragInfo) => {
   this.props.store.isDrag = true
   }

   handleStop = (e, dragInfo) => {
   this.props.store.isDrag = false
   }*/
}

export default BoxView;