import React from 'react';

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldRecord: false,
      points: []
    }

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }



  draw() {
    let context = this.refs.canvas.getContext('2d');

    context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
    context.strokeStyle = "#df4b26";
    context.lineJoin = "round";
    context.lineWidth = 5;

    for (let point = 0; point < this.state.points.length; point++) {
      context.beginPath();
      
    }

  }

  handleMouseDown(e) {
    const newPoint = [e.clientX, e.clientY];
    let newPoints = this.state.points;
    newPoints.push(newPoint);

    this.setState({
      shouldRecord: true,
      points: newPoints
    })
    this.draw();
  }

  handleMouseUp(e) {
    this.setState({
      shouldRecord: false
    });
  }

  handleMouseMove(e) {
    if (this.state.shouldRecord) {
      const newPoint = [e.clientX, e.clientY];
      let newPoints = this.state.points;
      newPoints.push(newPoint);

      this.setState({
        points: newPoints
      });
      this.draw();
    }
  }

  handleMouseLeave(e) {
    this.setState({
      shouldRecord: false
    });
  }

  componentDidMount() {
    this.draw();
  }

  render() {
    return (

      <div className="uk-container">
        <div className='canvasFormat'>
          <canvas
            ref='canvas'
            width={500}
            height={500}
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
            onMouseMove={this.handleMouseMove}
            onMouseLeave={this.handleMouseLeave}
          >
          </canvas>
        </div>
      </div>
    )
  }


}
