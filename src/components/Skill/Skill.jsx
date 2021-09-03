import React from 'react';
import CountUp from '../CountUp/CountUp'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'

class Skill extends React.Component {
    componentDidMount() {}
  
    render() {
      return (
      <div>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>
                    <Badge pill bg="success" text="dark">{this.props.skillName}</Badge>
                </Card.Title>
                <Card.Text>
                    <CountUp min="0" max={this.props.skillNum}/>
                    <ProgressBar variant="success" now={this.props.skillNum} />
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
      </div>
      );
    }
}

export default Skill;