import { router } from "expo-router"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native"

import { Header } from "@/src/components/Header"

export default function AuthHome() {
  return (
    <View className="bg-background flex-1 items-center">
      <Header title="Autenticação" back={false} />
      <KeyboardAvoidingView
        className="flex-1 w-full"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
          }}
          className="flex-1 w-full"
        >
          <View className="flex-1 items-center mt-[calc(300px/2)] w-full max-w-[90%]">
            <Text className="text-white font-rajdhani_700 text-4xl mb-6">
              RUB <Text className="text-green-500">UNLOCKED</Text>
            </Text>
            <Text className="text-white text-center font-rajdhani_700 text-xl">
              Faça as mudanças necessárias para{"\n"}que o seu departamento
              fique
              {"\n"}
              sempre no verde!
            </Text>

            <View className="space-y-3 w-full mt-6">
              <View className="relative">
                <TextInput
                  editable={false}
                  selectionColor="#F7DD43"
                  placeholderTextColor="#8D8D99"
                  placeholder="HTTP://10.46.3.223:4280"
                  className="w-full bg-foreground text-[#8D8D99] placeholder:font-rajdhani_700 rounded-lg px-4 h-13 border border-outline"
                />
                <View className="h-2 w-2 rounded-full bg-green-500 absolute right-6 top-[21px]" />
              </View>
              <TextInput
                selectionColor="#F7DD43"
                placeholderTextColor="#8D8D99"
                placeholder="DIGITE SEU CPF"
                keyboardType="number-pad"
                className="w-full bg-foreground text-[#8D8D99] placeholder:font-rajdhani_700 rounded-lg px-4 h-13 border border-outline"
              />
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => router.replace("/(home)")}
                className="bg-[#F7DD43] items-center justify-center w-full h-13 rounded-lg"
              >
                <Text className="uppercase text-black text-base font-rajdhani_700">
                  Conectar-se ao servidor
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}
