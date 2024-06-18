import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Header } from "@/src/components/Header";

export default function Servers() {
  return (
    <View className="flex-1 items-center bg-background">
      <Header title="Servidores" />
      <View className="flex-1 w-full max-w-[80%] mt-12">
        <View className="space-y-2 mb-8">
          <Text className="text-white font-rajdhani_700 text-2xl">
            Servidores disponíveis
          </Text>
          <Text className="text-white opacity-50 font-poppins_400">
            Todos os servidores disponíveis para{"\n"}se conectar no momento!
          </Text>
        </View>
        <View className="space-y-4">
          <View className="w-full relative bg-foreground border border-outline h-14 rounded-lg justify-center pl-6">
            <View className="flex-row items-center space-x-4">
              <Feather name="server" size={18} color="#8D8D99" />
              <Text className="text-[#8D8D99] text-base opacity-80 font-rajdhani_700">
                10.46.3.223:4280
              </Text>
            </View>
            <View className="h-2 w-2 right-8 rounded-full bg-red-500 absolute" />
          </View>
          <View className="w-full relative bg-foreground border border-outline h-14 rounded-lg justify-center pl-6">
            <View className="flex-row items-center space-x-4">
              <Feather name="server" size={18} color="#8D8D99" />
              <Text className="text-[#8D8D99] text-base opacity-80 font-rajdhani_700">
                10.46.3.223:4280
              </Text>
            </View>
            <View className="h-2 w-2 right-8 rounded-full bg-red-500 absolute" />
          </View>
          <View className="w-full relative bg-foreground border border-outline h-14 rounded-lg justify-center pl-6">
            <View className="flex-row items-center space-x-4">
              <Feather name="server" size={18} color="#8D8D99" />
              <Text className="text-[#8D8D99] text-base opacity-80 font-rajdhani_700">
                10.46.3.223:4280
              </Text>
            </View>
            <View className="h-2 w-2 right-8 rounded-full bg-red-500 absolute" />
          </View>
          <View className="w-full relative bg-foreground border border-outline h-14 rounded-lg justify-center pl-6">
            <View className="flex-row items-center space-x-4">
              <Feather name="server" size={18} color="#8D8D99" />
              <Text className="text-[#8D8D99] text-base opacity-80 font-rajdhani_700">
                10.46.3.223:4280
              </Text>
            </View>
            <View className="h-2 w-2 right-8 rounded-full bg-red-500 absolute" />
          </View>
          <View className="w-full relative bg-foreground border border-outline h-14 rounded-lg justify-center pl-6">
            <View className="flex-row items-center space-x-4">
              <Feather name="server" size={18} color="#8D8D99" />
              <Text className="text-[#8D8D99] text-base opacity-80 font-rajdhani_700">
                10.46.3.223:4280
              </Text>
            </View>
            <View className="h-2 w-2 right-8 rounded-full bg-red-500 absolute" />
          </View>
        </View>
      </View>
    </View>
  );
}
