import React, { useEffect, useState } from 'react'
import { Button, Divider, IconButton, Modal, Portal, Text, TextInput } from 'react-native-paper'
import { styles } from '../../../theme/styles';
import { View } from 'react-native';
import { auth, dbRealTime } from '../../../configs/firebaseConfig';
import { push, ref, set } from 'firebase/database';
import firebase from 'firebase/auth';

//Interface - props | propiedades
interface Props {
    showModalMessage: boolean;
    setShowModalMessage: Function;
}

//interface - fomrulario mensajes
interface FormMessage {
    
    message: string;
    email: string
}


export const NewMessageComponent = ({ showModalMessage, setShowModalMessage }: Props) => {
    const [userAuth, setUserAuth] = useState<firebase.User | null>(null);

    useEffect(() => {
        //Obtener la data del usuario autenticado
        setUserAuth(auth.currentUser);
        //console.log(auth.currentUser);
        
    }, []);

    const [formMessage, setFormMessage] = useState<FormMessage>({
        
        message: '',
        email: auth.currentUser?.email || ''
    });

    //Función cambiar los datos del formulario
    const handlerSetValues = (key: string, value: string) => {
        setFormMessage({ ...formMessage, [key]: value })
    }

    //Función guardar los mensajes
    const handlerSaveMessage = async () => {
        if (!formMessage.message) {
            return;
        }
        //console.log(formMessage);  
        //Almacenar los mensajes en BDD
        //1. Crear la referencia a la BDD - nombre tabla
        const dbRef = ref(dbRealTime, 'comments/' );
        //2. Crear colección - mensajes (enrutando)
        const saveMessage = push(dbRef);
        //3. Guardar mensajes
        try {
            await set(saveMessage, formMessage);
            //4. Limpiar el formulario
            setFormMessage({
                message: '',
                email: auth.currentUser?.email || '',
                
            })
        } catch (ex) {
            console.log(ex);
        }
        setShowModalMessage(false);
    }

    return (
        <Portal>
            <Modal visible={showModalMessage} contentContainerStyle={styles.modal}>
                <View style={styles.header}>
                    <Text variant='headlineMedium'>Comentario</Text>
                    <View style={styles.iconEnd}>
                        <IconButton
                            icon='close-circle-outline'
                            size={30}
                            onPress={() => setShowModalMessage(false)} />
                    </View>
                </View>
                <Divider />
                <TextInput
                        mode='outlined'
                        label='Correo'
                        value={userAuth?.email!}
                        disabled />
                <TextInput
                    label='Ingrese su comentario'
                    mode='outlined'
                    multiline={true}
                    numberOfLines={7}
                    onChangeText={(value) => handlerSetValues('message', value)} />
                <Button mode='contained' onPress={handlerSaveMessage}>Enviar</Button>
            </Modal>
        </Portal>
    )
}
