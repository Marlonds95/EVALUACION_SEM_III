import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Button, Divider, Text, TextInput } from 'react-native-paper';
import { styles } from '../../theme/styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Message } from './HomeScreen';
import { ref, remove, update } from 'firebase/database';
import { auth, dbRealTime } from '../../configs/firebaseConfig';
import firebase from 'firebase/auth';

export const DetailMessageScreen = () => {
    //hook para capturar los parametros mediante navegación
    const route = useRoute();
    //@ts-ignore
    const { message } = route.params;
    //console.log(message);

    const [userAuth, setUserAuth] = useState<firebase.User | null>(null);

    useEffect(() => {
        //Obtener la data del usuario autenticado
        setUserAuth(auth.currentUser);
        //console.log(auth.currentUser);
        
    }, []);
    //hook useState: manipular el formulario
    const [editFormMessage, setEditFormMessage] = useState({
        id: '',
        message:'',
        email: ''
    })

    //hook useEffect: Mostrar la información recibida en el formulario
    useEffect(() => {
        setEditFormMessage(message)
    }, [message])

    //hook navegación
    const navigation = useNavigation();

    //Funición: cambiar los datos del formulario
    const handlerSetValues = (key: string, value: string) => {
        setEditFormMessage({ ...editFormMessage, [key]: value })
    }

    //Función actualizar la data del mensaje
    const handlerUpdateMessage = async () => {
        //1. Referencia a al BDD - tabla
        const dbRef = ref(dbRealTime, 'comments/' + editFormMessage.id )
        const updateFields={
            message: editFormMessage.message
        }
        //2. Actualizar data
        await update(dbRef, updateFields)
        navigation.goBack();
    }

    //Función eliminar la data del mensaje
    const handlerDeleteMessage = async () => {
        //1. Referencia a la BDD - tabla
        const dbRef = ref(dbRealTime, 'comments/' + editFormMessage.id)
        //2. Eliminar data
        await remove(dbRef);
        navigation.goBack();
    }
    const isAuthor = editFormMessage.email === auth.currentUser?.email;

    return (
        <View style={styles.rootDetail}>
            <View>
                <Text variant='headlineSmall'>Detalle Comentario</Text>
                <Divider />
            </View>
            <View style={{ gap: 20 }}>
                <TextInput
                        mode='outlined'
                        label='Correo'
                        value={editFormMessage.email!}
                        disabled />
                <TextInput
                    value={editFormMessage.message}
                    multiline={true}
                    numberOfLines={5}
                    onChangeText={(value) => handlerSetValues('message', value)}
                    editable={isAuthor} />
             </View>
            {isAuthor && (
                <>
                    <Button
                        mode='contained'
                        icon='email-sync'
                        onPress={handlerUpdateMessage}
                    >
                        Actualizar
                    </Button>
                    <Button
                        mode='contained'
                        icon='email-remove'
                        onPress={handlerDeleteMessage}
                    >
                        Eliminar
                    </Button>
                </>
            )}
        </View>
    )
}
