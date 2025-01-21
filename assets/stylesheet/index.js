import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100
    },
    title:{
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 50
    },
    formInput:{
        marginTop: 20,
        marginLeft: 20,
        borderWidth: 1,
        width: 360,
        padding: 15
    },
    titleText:{
        marginTop: 20, 
        marginLeft: 20, 
        fontSize: 18, 
        fontWeight: 'bold'
    },
    btnSubmit:{
        margin: 'auto', 
        marginTop: 50 , 
        backgroundColor: 'lightblue', 
        padding: 20, 
        width: 250
    }
});

export default styles;