import React, { Component } from "react";
import {
    View,
    Text,
    Button
} from "react-native";

class Details extends Component {

    render() {

        return <View>
            <Text > Details</Text>
            <Button title="Go to Home Screen" onPress={() => this.props.navigation.navigate("Home")} />
        </View>
    }
}

export default Details;