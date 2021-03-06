import React, {Component} from 'react';
import Highlight from 'react-syntax-highlight';
import Note from '../Note';

class Homework extends Component {
  render() {
    return(
      <div>
        <h1>8. Homework</h1>
        <p>Congrats you are done.  If you have gotten this far because you are super fast, try implementing a <a href="https://facebook.github.io/react-native/docs/mapview.html">Map component!</a>   </p>
        <h2>For next workshop</h2>
        <ul>
          <li>Follow the complete get starting guide by Facebook - <a href="https://facebook.github.io/react-native/docs/getting-started.html">Guide</a></li>
          <li>Bring questions for the next session.</li>
          <li>Be sure to vote on the App to build next time.</li>
        </ul>
      </div>
    );
  }
}

export default Homework;
