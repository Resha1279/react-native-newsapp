import React from 'react';
import {
    ActivityIndicator,
    View,StyleSheet
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';



const Loading = () => {
        return (
            <View>
                <ActivityIndicator
                    animating
                    size="large"
                color={EStyleSheet.value('$secondaryColor')}/>
            </View>
        );
};

export default Loading;


const styles = StyleSheet.create({
    container: {
       // flex: 1,
        height:40,
        justifyContent: 'center'
    },
});
