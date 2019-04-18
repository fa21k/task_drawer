//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { Button,StyleSheet, View, Text,TextInput,Image } from 'react-native';
// import all basic components
import firebase from 'react-native-firebase';

export default class Screen1 extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
    }

    onRegister = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((loggedInUser) => {
                this.setState({ user: loggedInUser })
                alert(`تم التسجيل الحساب : ${(loggedInUser)}`);
            
            }).catch((error) => alert(error.message))
             
            }
    
    onLogin = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email,  this.state.password)
            .then((loggedInUser) => {
                alert (`تم تسجيل الدخول بنجاح : ${(loggedInUser)}`);
               
                this.props.navigation.navigate('Screen2');
               
            }).catch((error) => alert(error.message))
               
                
            
    }
      //Screen1 Component
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                 <View style={{width: '90%', height: 40, marginTop: 50}}>

                    <Text style={{fontSize:20,fontWeight:'bold'}}>Email : </Text>
                    <TextInput style={{
                        width: '95%', height: 40, backgroundColor: '#e0e0e0',
                        alignItems: 'center',
                        justifyContent: 'center',
                        
                    }}
                               onChangeText={(text) => this.setState({email: text})}
                               value={this.state.email}/>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>Password : </Text>
                    <TextInput style={{width: '95%', height: 40, backgroundColor: '#e0e0e0', marginBottom: 50}}
                               onChangeText={(value) => this.setState({password: value})}
                               value={this.state.password}/>

<View style={{ flexDirection: 'row' }}>
                    <Button   title='register'containerStyle={{
                        padding: 10,
                        borderRadius: 4,
                        margin: 10,
                        backgroundColor: 'green'
                    }}
                        style={{ fontSize: 17, color: 'white' }}
                         onPress={this.onRegister}
                       
                    >register</Button>
                    <Button   title='login'containerStyle={{
                        padding: 20,
                        margin: 30,
                        borderRadius: 4,
                        backgroundColor: 'blue'
                    }}
                        style={{ fontSize: 17, color: 'white' }}
                        onPress={this.onLogin}
                    >login</Button>
                </View>
                 
                 </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        marginTop: 50,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#F5FCFF',
    },
    img: {
        height: 100,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
        marginTop: 50,
    }
});