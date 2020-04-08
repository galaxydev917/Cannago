
import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class SigninDispensariesPage extends Component{
  constructor(props){
    super(props);
    
} 
  render(){
    return (
      <SafeAreaView>
        <ScrollView height={screenHeight}>
        <View style={styles.container}>
          <View style={styles.logopicWrap}>
            <Image style={styles.logopic} source={require('../../assets/imgs/dispensary_logo.jpg')} ></Image>
            <Text style={styles.logoname}>Cannago</Text>
            <Text style={styles.logouser}>for Dispansaries</Text>
          </View>
          <View style={styles.textinputview}> 
            <Icon name="envelope-o"  size={20} color="#37d613" style={styles.icon}/>
            <TextInput style={styles.textinput} placeholder="Email Address"/>
          </View>
          <View style={styles.textinputview}> 
            <Icon name="lock"  size={25} color="#37d613" style={styles.icon}/>
            <TextInput style={styles.textinput} placeholder="Password"/>
          </View>
          <TouchableOpacity style={styles.forgottextview} onPress={() => this.props.navigation.navigate('ForgotPwdPage')}>
            <Text style={styles.forgottext}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductsDispensariesPage')}>
            <View style={styles.signinBtn}>
              <Text style={styles.signiText}>Sign in</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.signuptextView}> 
            <Text style={styles.signupText}>Don't have account</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignupDispensariesPage')}>
              <Text style={styles.signupBtnText}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninPage')}>
            <View style={styles.userSelectView}>
              <Text style={styles.userSelectText}>Want to buy with us?</Text>
            </View>
          </TouchableOpacity>          
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninDriverPage')}>
            <View style={styles.userSelectView}>
              <Text style={styles.userSelectText}>Want to drive with us?</Text>
            </View>
          </TouchableOpacity>     
        </View>
        </ScrollView>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container : {
      alignItems : 'center',
      width : '100%'
  },
  logopic: {
    width : 160,
    height : 170,
  },
  logopicWrap : {
      alignItems : 'center',
  },
  logoname : {
      fontSize : 43,
      fontWeight : 'bold' 
  },
  logouser : {
      fontSize : 18,
      color : '#61605f'
  },
  textinputview : {
    flexDirection: 'row',
    alignItems : 'center',
    width : screenWidth - 60,
    height: 50,
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
      width : '100%',
      height: 60,
  },
  forgottextview : {
      flexDirection: 'row',
      justifyContent : 'flex-end',
      alignItems : 'center',
      color : '#61605f',
      marginBottom : 20,
      height: 50
  },
  forgottext : {
      color : '#61605f',
      width : '80%',
      textAlign : 'right'
  },
  signinBtn: {
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
  },
  signuptextView : {
      alignItems : 'center',
      marginTop : 10,
  },    
  signupText : {
      fontSize : 14,
      fontWeight : 'bold' ,
      color : '#787777'
  },
  signupBtnText : {
      fontSize : 14,
      fontWeight : 'bold' ,
      color : '#37d613'
  },
  userSelectView : {
      width : screenWidth - 60,
      height: 50,
      marginTop : 20,
      borderRadius:20,
      justifyContent : 'center',
      alignItems : 'center',
      borderColor : '#b3b0ad',
      borderWidth : 1
  },
  userSelectText : {
      color : '#61605f',
      fontSize : 16,
      fontWeight : '300'
  },  
});

