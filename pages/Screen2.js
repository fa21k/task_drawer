//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet,FlatList, View, Text,TouchableOpacity,Image,AsyncStorage } from 'react-native';
import firebase from "react-native-firebase";
// import all basic components

export default class Screen2 extends Component {
    //Screen2 Component
        constructor(props) {
            super(props);
            this.state = {
                isLoading: true,
                dataSource: [],
                isLoggedIn: true,
                userName:"",
                };
        }
        onLogin = () => {
            firebase.auth().signInWithEmailAndPassword(this.state.email,  this.state.password)
                .then((loggedInUser) => {
                    alert (`تم تسجيل الدخول بنجاح : ${(loggedInUser)}`);
                      this.props.navigation.navigate('Screen2');
                      
                }).catch((error) => alert(error.message))
                   
                   
                
        }

    getDetails() {
        this.props.navigation.navigate('Screen3')
    }


    renderItem = ({item}) => {

        return (
            <View style={{flex: 1,flexDirection:'row',marginBottom:3}}>

                <View style={{flex:1,justifyContent: 'center'}}>

                    <TouchableOpacity
                        onPress={() => {
                            this.getDetails()
                        }}
                        style={{
                            border:'2',
                            flex:1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height:"20%"}}>

                        <Text style={{fontSize:18,
                            color:'green',
                            marginBottom:15}}>
                            {item.name}
                        </Text>

                    </TouchableOpacity>
                   

                </View>
               
                
            </View>
        );
    }

    componentDidMount() {
        this.loadData2();
       
        return fetch("http://anqly.tutbekat.com/public/api/orders?api_token=3tVxN2qkWw7Au1L7SoYC613mquzWRLdetKNZBpku")
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson['orders']
                });
            });


    }


    loadData2 = async () => {
        try {
            var data = await AsyncStorage.getItem("loggedInUser");
           alert ("loggedInUser")
           
            userName=data


        } catch (e) {
            alert(e);
        }
       
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image  style={ { width:'100%',height:'50%',alignItems:'center',justifyContent:'center',resizeMode:'contain'}}
                        source={require('../image/fady.jpg')}
               />
               
                
                    <Text style={{fontSize:18,justifyContent:'center',fontFamily:'bold'}}>
                        welcome to our application navigation
                    </Text>
                    <Text style={{fontSize:18,justifyContent:'center',fontFamily:'bold'}}>With prog. Fady Ahmed</Text>
                </View>

                <FlatList
                    data={this.state.dataSource}
                    renderItem={this.renderItem}
                />
                 
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
        backgroundColor: '#f5fcff'
    },
});