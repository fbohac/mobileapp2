import React from 'react';
import {
    Image,
    Button,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View>

                        <Text style={styles.textWhite}>Encyklopedia</Text>
                        <Button
                            title="Informácie okolo nás"
                            onPress={() => this.props.navigation.navigate('Menu')}
                        />
                        <Button
                            title="Počítačové systémy"
                            onPress={() => this.props.navigation.navigate('Menu')}
                        />
                        <Button
                            title="Počítačové siete"
                            onPress={() => this.props.navigation.navigate('Menu')}
                        />
                        <Button
                            title="Algoritmy a programovanie"
                            onPress={() => this.props.navigation.navigate('Menu')}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
        alignSelf: 'stretch',

    },
    textWhite:{
        color: '#FFF',
        fontSize: 40,
        marginTop: 40,
    },

    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 150,
        height: 150,
    },

});
