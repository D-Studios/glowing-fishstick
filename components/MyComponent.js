// 1) Testing React Native Components
import React from 'react';
import { useState }  from 'react';
import {Text} from 'react-native';
import {Button} from 'react-native';
import { View} from 'react-native';
import { SafeAreaView } from 'react-native';


export default function MyComponent() {
  
  const [text, setText] = useState('Hello, World!');

  const handleNextPress = () => {
      setText("Button pressed!")
  }
  return (
    // <PaperProvider>
    <SafeAreaView>
    <View style = {{justifyContent: 'center', alignItems: 'center', flex : 1}}>
    <Text>{'\n'}{'\n'}{'\n'}</Text>
    <Text>{text}</Text>
    <Button mode="contained" onPress={handleNextPress} title = "Press me">
    </Button>
    </View> 
    </SafeAreaView>
    // </PaperProvider>
  );
}

