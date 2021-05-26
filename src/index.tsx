import 'react-native-gesture-handler';

import React from 'react';

import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { DefaultTheme as PaperDefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import {AppRouter} from '@/routes';


export default function App() {
  
  return (
  <PaperProvider theme={PaperDefaultTheme}>
    <NavigationContainer >
        <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
          <AppRouter />
    </NavigationContainer>
  </PaperProvider>
  );
}

