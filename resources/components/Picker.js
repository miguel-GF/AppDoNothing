import React, { Component } from 'react';
import { Item, Picker, Icon } from 'native-base';
import PropTypes from 'prop-types';

export default class PickerInputExample extends Component {
    constructor(props) {
    super(props);
    this.state = {
      selected2: ""
    };
  }
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }
  render() {
    return (
			<Item picker>
				<Picker
					mode="dropdown"
					iosIcon={<Icon name="arrow-down" />}
					style={{ width: undefined }}						
					placeholderStyle={{ color: "#000000" }}
					placeholderIconColor="#007aff"
					selectedValue={this.state.selected2}
					onValueChange={this.onValueChange2.bind(this)}
				>
					<Picker.Item label="Seleccione número de veces" value="" />
					<Picker.Item label="5 swipes" value="key0" />
					<Picker.Item label="10 swipes" value="key1" />
					<Picker.Item label="15 swipes" value="key2" />
					<Picker.Item label="20 swipes" value="key3" />
					<Picker.Item label="25 swipes" value="key4" />
				</Picker>
			</Item>     
    );
  }
}