import React, { Component } from "react";
import {

    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity

} from "react-native";

import defaultImage from "../../assets/images/default.jpeg";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicon from "react-native-vector-icons/Ionicons";
import styles from "../../styles";

class Details extends Component {

    state = {
        listData: null
    }

    componentDidMount() {

        const listData = this.props.navigation.state.params;

        if (listData) {

            this.setState({
                listData
            })
        }
    }

    render() {


        console.log("????????", this.state.listData)
        const listData = this.state.listData;

        return listData ?

            <ScrollView>
                <View style={{
                    position: "relative",
                    zIndex: 1000
                }}>

                    <View style={styles.coverIconWrapper}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
                            <View style={styles.darkIcon}>
                                <FontAwesome name="angle-left" size={30} color="white" />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.darkIcon}>
                            <Ionicon name="ios-more" size={30} color="white" />
                        </View>
                    </View>
                    <View style={{
                        marginBottom: 20
                    }}>
                        <Image source={{ uri: listData.url }} style={{
                            width: "100%",
                            height: 300
                        }} />
                    </View>
                    <View style={{
                        paddingHorizontal: 20
                    }}>
                        <View>
                            <Text style={[styles.text, styles.textSmall]}> Details Screen  </Text>
                            <Text style={[styles.text, styles.textLarge]}> {listData.title} </Text>
                        </View>

                        <View style={{
                            flexDirection: "row"
                        }}>



                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginRight: 10

                            }}>
                                <FontAwesome name="calendar" size={20} style={{
                                    marginRight: 10
                                }} />
                                <Text style={[styles.text, styles.textSmall, { marginBottom: 0 }]}> Full Time </Text>
                            </View>


                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginRight: 10

                            }}>
                                <FontAwesome name="dollar" size={20} style={{
                                    marginRight: 10
                                }} />
                                <Text style={[styles.text, styles.textSmall, { marginBottom: 0 }]}> 180k  240k  </Text>
                            </View>

                        </View>

                        {/* job details */}
                        <View>

                            <Text style={[styles.text, styles.textBold, styles.textMedium, { marginTop: 10 }]}>Position Summary</Text>

                            <Text style={[styles.text, styles.textPara]}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptate sunt quo illo reiciendis accusantium consectetur id quam rem nihil numquam et adipisci iste esse, maiores quas beatae assumenda velit!</Text>

                            <Text style={[styles.text, styles.textPara]}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptate sunt quo illo reiciendis accusantium consectetur id quam rem nihil numquam et adipisci iste esse, maiores quas beatae assumenda velit!</Text>

                            <Text style={[styles.text, styles.textPara]}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptate sunt quo illo reiciendis accusantium consectetur id quam rem nihil numquam et adipisci iste esse, maiores quas beatae assumenda velit!</Text>
                        </View>

                        <TouchableOpacity style={styles.applyBtn}>
                            <Text style={styles.btnText}> Apply </Text>
                        </TouchableOpacity>

                    </View>

                    {/* end job details */}
                </View >
            </ScrollView>

            : null;
    }
}

export default Details;