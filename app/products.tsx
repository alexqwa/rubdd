import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

export default function Products() {
  const { goBack } = useNavigation();

  return (
    <View className="flex-1 items-center bg-background">
      <View className="bg-[#202024] h-28 w-full items-center justify-center">
        <View className="relative w-full max-w-[90%] justify-center items-center flex-row mt-10">
          <TouchableOpacity
            onPress={() => goBack()}
            className="p-4 -m-4 absolute left-0"
          >
            <Feather name="arrow-left" size={18} color="#fff" />
          </TouchableOpacity>
          <Text className="text-white font-rajdhani_700 text-base">
            Presença: Corredor 05
          </Text>
        </View>
      </View>
      <View className="mt-10 flex-1 items-start w-full max-w-[90%]">
        <View className="w-full space-y-3">
          <Text className="text-white font-poppins_500">
            Formas de manipulação
          </Text>
          <View className="bg-foreground h-13 border border-outline rounded-lg justify-between flex-row items-center px-6">
            <Text className="text-white font-poppins_500">
              Selecione o modelo
            </Text>
            <Feather name="chevron-down" size={18} color="#fff" />
          </View>
        </View>
        <Text className="text-white text-base font-poppins_600 mt-10">
          Lista de produtos (203):
        </Text>
      </View>
    </View>
  );
}
