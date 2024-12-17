import React from 'react';
import {Image, ScrollView, Text} from 'react-native';

const logo = {
  uri: 'https://http2.mlstatic.com/D_NQ_NP_2X_983821-MLA74807966491_022024-F.webp',
  width: 94,
  height: 74,
};
const logo2 = {
  uri: 'https://http2.mlstatic.com/D_NQ_NP_2X_789541-MLA53350415255_012023-F.webp',
  width: 64,
  height: 64,
};
const logo3 = {
  uri: 'https://http2.mlstatic.com/D_NQ_NP_2X_789541-MLA53350415255_012023-F.webp',
  width: 64,
  height: 54,
};
const logo4 = {
  uri: 'https://http2.mlstatic.com/D_NQ_NP_2X_819808-MLA69292368046_052023-F.webp',
  width: 64,
  height: 64,
};
const logo5 = {
  uri: 'https://http2.mlstatic.com/D_NQ_NP_2X_830546-MLA75652808260_042024-F.webp',
  width: 64,
  height: 64,
};
const logo6 = {
  uri: 'https://http2.mlstatic.com/D_NQ_NP_2X_715670-MLA72710695074_112023-F.webp',
    width: 64,
  height: 64,
};
const App = () => (
  <ScrollView>
    <Text style={{fontSize: 36}}>Regalos Exclusivos</Text>
  
    <Image source={logo2} />
    <Image source={logo} />
    <Text style={{fontSize: 36}}>Para Ella</Text>
      <Image source={logo4} />
    
    <Text style={{fontSize: 36}}>Para Él</Text>
    <Image source={logo5} />
    
    
    <Text style={{fontSize: 36}}>Para los Peques </Text>
    <Image source={logo6} />
 
    <Text style={{fontSize: 36}}> </Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 80}}>React Native</Text>
  </ScrollView>
);

export default App;
