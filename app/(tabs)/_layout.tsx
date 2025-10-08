import { COLORS } from '@/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1, backgroundColor: COLORS.darkGreen}}>
        <Tabs screenOptions={{
          tabBarActiveTintColor: COLORS.darkGreen,
          tabBarInactiveTintColor: COLORS.grey,
          headerStyle: {
            height: 66,
            backgroundColor: COLORS.darkGreen,
          },
          headerTintColor: COLORS.white
        }}>
          <Tabs.Screen name="index" options={{
            title: "Cards",
            tabBarLabel: "cards",
            tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="cards" color={color} size={size} /> 
          }} />
          <Tabs.Screen name="counter" options={{
            title: "Counter",
            tabBarLabel: "counter",
            tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="counter" color={color} size={size} /> 
          }} />
          <Tabs.Screen name="profile" options={{
            title: "Profile",
            tabBarLabel: "profile",
            tabBarIcon: ({size, color}) => <FontAwesome name="user" color={color} size={size} /> 
          }} />
          <Tabs.Screen name="gallery" options={{
            title: "Gallery",
            tabBarLabel: "gallery",
            tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="view-gallery" color={color} size={size} /> 
          }} />
        </Tabs>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
