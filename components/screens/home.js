import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

import styles from "../../styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import ListUnit from "../ui/listUnit";
import Header from "../ui/header";


class Home extends Component {

    render() {

        return <ScrollView>
            <View style={styles.container}>

                <Header />
                <View style={styles.ListViewWrapper}>
                    {/*  List Unit */}
                    <ListUnit />
                    <ListUnit />
                    <ListUnit />
                    <ListUnit />
                    <ListUnit />
                    <ListUnit />
                </View>

            </View>
        </ScrollView>
    }
}

export default Home;