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

const HercDemo = StackNavigator({
  Welcome: { screen: Welcome },
  MenuOptions: {screen: MenuOptions},
  Legend: {screen: Legend},
  Tee: {screen: Tee},
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



  