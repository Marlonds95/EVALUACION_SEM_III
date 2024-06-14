import React from 'react';
import { View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { styles } from '../../../theme/styles';
import { Message } from '../HomeScreen';
import { CommonActions, useNavigation } from '@react-navigation/native';

//Interface props
interface Props {
    message: {
        id: string;
        message: string;
        email: string; 
    };
}

export const MessageCardComponent = ({message}: Props) => {

    const navigation=useNavigation();

    return (
        <View style={styles.rootMessage}>
            <View style={styles.justifiedText}>
                <Text variant='labelLarge'>Email: {message.email} </Text>
                <Text variant='bodyMedium' >Comentario: {message.message}</Text>
            </View>
            <View style={styles.iconEnd}>
                <IconButton
                    icon="arrow-expand-right"
                    size={25}
                    onPress={() => navigation.dispatch(CommonActions.navigate({name:'Detail', params:{message}}))}
                />
            </View>
        </View>
    )
}
