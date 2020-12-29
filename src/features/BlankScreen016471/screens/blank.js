import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = { DateTimePicker_3: new Date(""), DateTimePicker_4: new Date("") }
  render = () => (
    <View>
      <Text>Sample text content</Text>
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_3}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_3: selectedDate })
        }
      />
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_4}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_4: selectedDate })
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Text_2: {},
  DateTimePicker_3: {},
  DateTimePicker_4: {}
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)
