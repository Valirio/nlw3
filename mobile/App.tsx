
import React from 'react';

import Routes from './src/routes';
import {useFonts} from 'expo-font';
import {Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold} from '@expo-google-fonts/nunito';




export default function App() {

  const  [fontLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  })

  if(!fontLoaded){
    return null;
  }
  return (
    <Routes/>
  );
}
