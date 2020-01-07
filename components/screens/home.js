import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    FlatList
} from 'react-native';

import styles from "../../styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import ListUnit from "../ui/listUnit";
import Header from "../ui/header";

import data from "../../data";


class Home extends Component {

    state = {
        data: null
    }

    componentDidMount() {

        if (data && data.length > 0) {

            this.setState({
                data
            })
        }
    }

    renderListUnit = () => {

        const data = this.state.data;

        if (data && data.length > 0) {

            return <FlatList

                data={data}
                renderItem={({ item }) => {

                    return <ListUnit
                        listData={item}

                        {...this.props}
                    />
                }}
            />
        }
    }

    render() {

        return <ScrollView>


            <View style={styles.container}>

                <Header />

                <View style={styles.ListViewWrapper}>
                    {this.renderListUnit()}
                    {/*  List Unit */}
                    {/* <ListUnit listData={{
                        title: "Senior Software Engineer",
                        url: "https://i.ytimg.com/vi/Btbvv9kfLqo/maxresdefault.jpg"
                    }} {...this.props} />


                    <ListUnit listData={{
                        title: "Customer Support Agent",
                        url: "https://joinmyproject.com/wp-content/uploads/2018/10/Customer-Support.jpg"
                    }} {...this.props} />


                    <ListUnit listData={{
                        title: "Marketing and Sales Manager",
                        url: "https://blog.hubspot.com/hubfs/guide-sales-marketing.jpg"
                    }} {...this.props} /> */}



                </View>

            </View>
        </ScrollView>
    }
}

export default Home;