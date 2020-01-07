import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import styles from "../../styles";


const ListUnit = props => {

    return <TouchableOpacity onPress={() => props.navigation.navigate("Details")} >
        <View>
            {/*  user unit */}


            <View style={styles.ListViewUnit}>

                <Image source={{ uri: "https://www.thoughtco.com/thmb/FahkoQDT36pxZuQ33v_3avsGigU=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/focus-on-schoolgirls-raised-hand-in-classroom-with-teacher-1049284658-09b82d21082b489faa0c950fdc1ebff6.jpg" }} style={styles.cover} />
                <View style={styles.content}>

                    <View style={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <Text style={[styles.text, styles.textSmall, { marginRight: 10 }]}>Roman Ridge School</Text>
                        <FontAwesome name="caret-right" size={18} />
                    </View>
                    <Text style={[styles.text, styles.textLarge, styles.textBold, { marginBottom: 10 }]}>Senior Product Designer</Text>
                    <View style={styles.listDetails}>

                        <View style={styles.listItem}>
                            <FontAwesome name="calendar" size={18} style={{ marginRight: 10 }} />
                            <Text style={[styles.text, styles.textSmall, styles.textBold]}> Full Time </Text>
                        </View>

                        <View style={styles.listItem}>
                            <FontAwesome name="dollar" size={18} style={{ marginRight: 10 }} />
                            <Text style={[styles.text, styles.textSmall, styles.textBold]}> 18k - 240k</Text>
                        </View>


                        <View style={styles.listItem}>
                            <Entypo name="location-pin" size={18} style={{ marginRight: 10 }} />
                            <Text style={[styles.text, styles.textSmall]}> Full Time </Text>
                        </View>

                    </View>
                </View>
            </View>

            {/*  end userunit */}
        </View>
    </TouchableOpacity>

}

export default ListUnit;
