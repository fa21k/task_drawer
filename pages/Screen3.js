//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import {StyleSheet, View, Text, FlatList,AsyncStorage} from 'react-native';
// import all basic components

export default class Screen3 extends Component {
    //Screen3 Component

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: [],
            isLoggedIn: true,
            userName:"",
        };
    }



    renderItem = ({item}) => {

        return (
            <View style={{flex: 1,flexDirection:'row',marginBottom:3}}>

                <View style={{flex:1,justifyContent: 'center'}}>

                    <View
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
                        <Text>
                            {item.from}
                        </Text>
                        <Text>
                            {item.to}
                        </Text>
                        <Text>
                            {item.datetime}
                        </Text>

                    </View>

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
            var data = await AsyncStorage.getItem('loggedInUser');
           
            userName=data


        } catch (e) {
            alert(e);
        }
       
    }

  

    render() {
        return (
            <View style={styles.container}>
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