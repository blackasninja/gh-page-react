import React from 'react';
import DevIcon from "devicon-react-svg";

class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Home Page</h2>
                <main>
                    <p>This section contains information about...</p>
                    <DevIcon icon="github" />
                    <DevIcon icon="android" />
                    <DevIcon icon="react" />
                </main>
            </div>
        );
    }

}

export default Home;