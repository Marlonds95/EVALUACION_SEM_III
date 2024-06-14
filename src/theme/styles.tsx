import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    inputs: {
        width: "90%"
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    button: {
        width: "90%"
    },
    textRedirect: {
        marginTop: 20,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#228B22'
    },
    rootHome: {
        flex: 1,
        marginVertical: 55,
        marginHorizontal: 25
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },
    iconEnd: {
        flex: 1,
        alignItems: 'flex-end'
    },
    modal: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: "#fff",
        gap: 10
    },
    rootMessage: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 20,
        alignItems: 'center'
    },
    fabMessage: {
        backgroundColor:"green",
        position: 'absolute',
        bottom: 20,
        right: 15
    },
    rootDetail: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',
        gap: 20
    },
    textDetail: {
        fontWeight: 'bold',
        fontSize: 18
    },
    iconSignOut: {
        marginTop: 25,
        alignItems: 'center'
    },
    justifiedText: {
        textAlign: 'justify',
        marginRight: 30
    },

})