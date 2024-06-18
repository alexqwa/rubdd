import Feather from "@expo/vector-icons/Feather";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#202024",
          borderTopWidth: 0,
          height: 80,
        },
        tabBarActiveTintColor: "#F7DD43",
        tabBarInactiveTintColor: "#8D8D99",
        tabBarLabelPosition: "beside-icon",
        tabBarLabelStyle: {
          marginLeft: 30,
          fontSize: 16,
          fontFamily: "Rajdhani_700Bold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Autenticação",
          tabBarIcon: ({ color }) => (
            <Feather size={20} name="key" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="servers"
        options={{
          title: "Servidores",
          tabBarIcon: ({ color }) => (
            <Feather size={20} name="server" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
