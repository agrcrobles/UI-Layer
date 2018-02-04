import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import Welcome from "./screens/Welcome";
import Origin from "./screens/Origin";
import Destination from "./screens/Destination";
import FileUp from "./screens/FileUp";
import Confirm from "./screens/Confirm";
import ThankYou from "./screens/ThankYou";
import Legend from "./screens/Legend";
import MenuOptions from './screens/MenuOptions';
import Tee from './screens/Tee';
import Digi from './screens/DigiViewer';

const HercDemo = StackNavigator({
  Welcome: { screen: Welcome },
  MenuOptions: {screen: MenuOptions},
  Legend: {screen: Legend},
  Tee: {screen: Tee},
  Digi: {screen: Digi},
  Origin: { screen: Origin},
  Destination: { screen: Destination },
  FileUp: { screen: FileUp },
  Confirm: { screen: Confirm },
  ThankYou: { screen: ThankYou}
 
  }
)

export default class App extends Component {
  static navigationOptions = { header: null }
    render() {
      return <HercDemo />
    }
  }



  