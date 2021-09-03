import React from 'react';
import Skill from '../components/Skill/Skill';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import * as skillsData from '../data/skills.json';

class Skills extends React.Component {
    
    render() {
        return (
            <div>
                <h2>Skills Page</h2>
                <main>
                    <p>This section contains information about my skills</p>
                    <Row xs={1} md={2} className="g-4">           
                    {skillsData.skills.map((_, idx) => (
                        <Col>
                            <Skill skillName={_.skill_name} skillNum={_.exp}/>
                        </Col>
                    ))};
                    </Row>
                </main>
            </div>
        )
    }
}



export default Skills;