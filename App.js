// React Navigate Drawer with Bottom Tab – Example using React Navigation V5 //
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer //
import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './app/src/pages/HomeScreen';
import ContactScreen from './app/src/pages/ContactScreen';
import CartScreen from './app/src/pages/CartScreen';
import ProfileScreen from './app/src/pages/ProfileScreen';
import SigninScreen from './app/src/pages/SigninScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
}

function getHeaderTitle(route) {  
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case 'HomeScreen':
      return 'Home';
    case 'ExploreScreen':
      return 'Explore';
    case 'ProfileScreen':
      return 'User';
    case 'ContactScreen':
      return 'Contact';
    case 'CartScreen':
      return 'Cart';
    case 'SigninScreen':
      return 'Sign In';
    case 'BottomTabStack':
      return 'Home Stack';
  }
}

function BottomTabStack() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'HomeScreen') {
            iconName = focused        
            ? 'home'
            : 'home';
          } else if (route.name === 'ExploreScreen') {
            iconName = focused
            ? 'search'
            : 'search';
          } else if (route.name === 'CartScreen') {
            iconName = focused
            ? 'cart'
            : 'cart';
          } else if (route.name === 'ProfileScreen') {
            iconName = focused
            ? 'person'
            : 'person';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#e0e0e0',
        },
        labelStyle: {
          textAlign: 'center',
          fontSize: 16
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={size} />
          // ),
        }}  />

      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreenStack}
        options={{
          tabBarLabel: 'User'          
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="settings" color={color} size={size} />
          // ),
        }} />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="settings" color={color} size={size} />
          // ),
        }} />        
    </Tab.Navigator>
  );
}

function HomeScreenStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomTabStack}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
}

function ProfileScreenStack({ navigation }) {
  return (
    <Stack.Navigator 
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>

      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'User', //Set Header Title          
      }}/>

      <Stack.Screen
        name="SigninScreen"
        component={SigninScreen}
        options={{
          title: 'Sign In', //Set Header Title          
      }}/>
      
    </Stack.Navigator>
  );
}

function ContactScreenStack({ navigation }) {
  return (
    <Stack.Navigator      
      screenOptions={{
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{
          title: 'Contact', //Set Header Title
          
        }}/>      
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="HomeScreenStack"
          options={{ drawerLabel: 'Home' }}
          component={HomeScreenStack} />
        <Drawer.Screen
          name="ProfileScreenStack"
          options={{ drawerLabel: 'User' }}
          component={ProfileScreenStack} />
        <Drawer.Screen
          name="ContactScreenStack"
          options={{ drawerLabel: 'Contact' }}
          component={ContactScreenStack} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;