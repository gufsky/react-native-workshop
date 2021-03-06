import React, {Component} from 'react';
import Note from '../Note';

class Prerequisites extends Component {
  render() {
    return(
      <div className="general">
        <h1>0. Prerequisites</h1>
                <p>We will be using <a href="https://github.com/react-community/create-react-native-app">'create react native app'</a> (CRNA) during the workshop - under the hood CRNA uses <a href="https://blog.expo.io/what-is-the-exponent-client-b4c7b3a6d7f#.p146nwe8e">Expo</a> for minimal build configuration and short setup time.   With CRNA & Expo, you don’t need Xcode or Android Studio. You just write JavaScript using whatever text editor you are comfortable with.</p>
        <h2>Required</h2>
        <ul className="check-list">
          <li><b>Laptop</b> - Mac OS or Windows.</li>
          <li><b>Mobile Device</b> - IOS or Android.</li>
          <li><b>Text Editor</b> - (Atom, vim, emacs, Sublime, VS Code, whatever you like)..</li>
        </ul>
        <h2>Installs</h2>
        <ul>
          <li>Install the latest version of <a href="https://nodejs.org/">Node.js v6.10.0 LTS - https://nodejs.org/</a> - installing latest version of Node.js will also install latest version of NPM</li>
          <li>Install the latest version of <a href="https://yarnpkg.com/en/docs/install">Yarn - https://yarnpkg.com/en/docs/install</a></li>
        </ul>

        <Note type="tips">
<p><span>Tips: </span> When installing Yarn, in most cases a simple `npm install -g yarn` should do the trick.</p>
        </Note>
      </div>
    );
  }
}

export default Prerequisites;
