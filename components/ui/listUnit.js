import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import styles from "../../styles";


const ListUnit = props => {

    const listData = props.listData;

    console.log(listData);

    return <TouchableOpacity onPress={() => props.navigation.navigate("Details", listData)} >
        <View>
            {/*  user unit */}


            <View style={styles.ListViewUnit}>

                <Image source={{ uri: listData.url }} style={styles.cover} />
                <View style={styles.content}>

                    <View style={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <Text style={[styles.text, styles.textSmall, { marginRight: 10 }]}>Roman Ridge School</Text>
                        <FontAwesome name="caret-right" size={18} />
                    </View>
                    <Text style={[styles.text, styles.textLarge, styles.textBold, { marginBottom: 10 }]}> {listData.title} </Text>
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
