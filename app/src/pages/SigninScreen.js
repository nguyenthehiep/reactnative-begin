// React Navigate Drawer with Bottom Tab – Example using React Navigation V5 //
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer //
import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const SigninScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Sign In Screen
          </Text>
          <Button
            onPress={() => navigation.goBack()}
            title="Go Back"
          />          
        </View>
        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
          React Navigate Drawer with Bottom Tab
        </Text>
        <Text
          style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default SigninScreen;