import React, { Component } from "react";
import { TouchableOpacity } from "react-native";

class NavButton extends Component {
  render() {
    return (
      <TouchableOpacity {...this.props}>{this.props.children}</TouchableOpacity>
    );
  }
}

export default NavButton;
