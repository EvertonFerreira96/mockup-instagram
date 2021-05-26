import React from 'react';
import { createStackNavigator, StackHeaderTitleProps } from '@react-navigation/stack'
import Feed from '@/pages/Feed'; 

import {Image} from 'react-native';

import Logo from '@/assets/instagram.png';

const Router = createStackNavigator();


const LogoTitle: React.FC<Image | StackHeaderTitleProps> = ({...props}: Image | StackHeaderTitleProps) => {
  return (
    <Image
      source={Logo}
    />
  );
}

const AppRouter: React.FC = () => {

  return (
  <Router.Navigator
  screenOptions={{
    cardStyle: {
    },
    headerTitleAlign: 'center',
    headerStyle: { backgroundColor: '#F5F5F5'},
    headerTitle: props => <LogoTitle {...props} />
  }}
  initialRouteName="Feed"
  >
    <Router.Screen name="Feed" component={Feed}   />
  </Router.Navigator>
); 
}

export { AppRouter }; 
/*
headerBackTitleStyle: { color: theme.background.hover },
headerTintColor: theme.palletes.contrasts.dark,
*/