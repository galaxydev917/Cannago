import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'react-native-check-box'
import { Divider } from 'react-native-elements';


export default class Content extends Component{

 
    constructor(props){
        super(props)
        this.state={
            textValue: 'Want to drive with us?'
        }
    }
 

  render(){
    return (
        
        <View>
            <View style={styles.textinputview}> 
                <Icon name="envelope-o"  size={20} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="Email Address"/>
            </View>
            <View style={styles.textinputview}> 
                <Icon name="lock"  size={20} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="Password"/>
            </View>

            <View style={styles.textinputview}> 
                <Icon name="lock"  size={20} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="Zip code"/>
            </View>
            <View style={styles.textinputview}> 
                <Icon name="user"  size={20} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="Mobile number"/>
            </View>
            <View style={styles.textinputview}> 
                <Icon name="user"  size={20} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="Scan drivers license"/>
            </View>
            <View style={{alignItems : 'flex-start', marginTop : 20}}> 
                <Text style={{fontSize : 18}}> Vechicle Information</Text>
            </View>   
            <Divider style={{ marginTop: 20, backgroundColor : 'black'}} />
            <View style={styles.textinputview}> 
                <Icon name="user"  size={20} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="Vechicle Name"/>
            </View>
            <View style={styles.textinputview}> 
                <Icon name="user"  size={20} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="Vechicle Model"/>
            </View>
            <View style={styles.textinputview}> 
                <Icon name="user"  size={25} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="Vechicle Color"/>
            </View>
            <View style={styles.textinputview}> 
                <Icon name="user"  size={25} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="Vechicle License Plate Number"/>
            </View>
            <View style={{alignItems : 'flex-start', marginTop : 20}}> 
                <Text style={{fontSize : 18}}> Tax Information</Text>
            </View>   
            <Divider style={{ marginTop: 20, backgroundColor : 'black'}} />
            <View style={styles.textinputview}> 
                <Icon name="user"  size={20} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="Business entity/Company name"/>
            </View>
            <View style={styles.textinputview}> 
                <Icon name="user"  size={20} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="109 Agreement"/>
            </View>
            <View style={styles.checkboxview}> 
                <CheckBox
                    style={{flex: 1, padding: 10}}
                    onClick={()=>{
                    this.setState({
                        isChecked:!this.state.isChecked
                    })
                    }}
                    isChecked={this.state.isChecked}
                    rightText={"By checking this agree Cannago's Terms & Conditions"}
                    rightTextStyle={{color : '#9c9c9c', fontSize : 10}}
                    />                    
            </View>                     
            <TouchableOpacity onPress={this.props.gotoProductPage}>
                <View style={styles.signinBtn}>
                    <Text style={styles.signiText}>Create Account</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
  }
}
const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    checkboxview : {
        flexDirection: 'row',
        alignItems : 'center',
        width : screenWidth - 60,
        height: 60,
        borderRadius:20,
        borderColor : '#b3b0ad',
        borderWidth : 0
    },   
    textinputview : {
        flexDirection: 'row',
        alignItems : 'center',
        width : screenWidth - 60,
        height: 60,
        marginTop : 20,
        borderRadius:20,
        borderColor : '#b3b0ad',
        borderWidth : 1
    },       
    icon : {
        marginLeft : 20,
        marginRight : 20
    },
    textinput : {
        width : screenWidth - 100,
        height: 60,
    },
    signinBtn: {
        marginTop : 10,
        backgroundColor:'#23b825',
        width : screenWidth - 60,
        height: 50,
        borderRadius:20,
        justifyContent : 'center',
        alignItems : 'center',
        shadowColor: '#919090',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.9,
        elevation: 10,  
    },
    signiText : {
        color : 'white',
        fontSize : 22,
        fontWeight : '400'
    }
});
