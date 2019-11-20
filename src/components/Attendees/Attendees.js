import React, {Component} from 'react';
// import Button from "./Button/Button";
import { conditionalExpression } from '@babel/types';

class Attendees extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     };
    render(){
        return (
            <div className="attendees">
            {/* <Button /> */}
            <div>
            <h2>Attendees here!</h2>
            <ul>
                <li>Bob</li>
                <li>Mary</li>
                <li>Larry</li>
            </ul>
            </div>
            <div>
                {/* <JoinMeetup />
                <Button /> */}
            </div>
            </div>
        );
    }
}

export default Attendees;