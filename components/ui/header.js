import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
    View,
    Text,
    TouchableOpacity
} from "react-native";
import styles from "../../styles";

const Header = () => {

    return <TouchableOpacity onPress={() => console.log("testing mic")}>
        <View>
            {/* header */}
            <View style={styles.headerWrapper}>
                <Text style={[styles.text, styles.textLarge, styles.textBold]}> Explorer </Text>
                <FontAwesome name="search" size={30} />
            </View>

            {/* catergories */}
            <View style={styles.categories}>
                <View style={styles.category}>
                    <Text style={[styles.text, styles.textSmall, styles.textBold, { marginRight: 10 }]}> Product Designer </Text>
                    <FontAwesome name="caret-down" size={18} />
                </View>

                <View style={styles.category}>
                    <Text style={[styles.text, styles.textSmall, styles.textBold, { marginRight: 10 }]}> San Francisco </Text>
                    <FontAwesome name="caret-down" size={18} />
                </View>
                {/*  Job list view */}
                <FontAwesome name="plus" size={20} />
            </View>

            {/*  end header */}
        </View>
    </TouchableOpacity>
}

export default Header;