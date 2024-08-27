import { useEffect, useState } from "react"
import { View, Text, ScrollView } from "react-native"
import { Feather } from "@expo/vector-icons"
import * as Network from "expo-network"
import clsx from "clsx"

import { Header } from "@/src/components/Header"

export default function Servers() {
  const [address, setAddress] = useState("")
  const [validNetwork, setValidNetwork] = useState(false)

  useEffect(() => {
    fetchAddressIP()

    if (address === "192.168.1.67") {
      setValidNetwork(true)
    } else {
      setValidNetwork(false)
    }
  }, [address])

  async function fetchAddressIP() {
    const sessionAddress = await Network.getIpAddressAsync()
    setAddress(sessionAddress)
  }

  return (
    <View className="flex-1 items-center bg-background">
      <Header title="Servidores" back={false} />
      <View className="flex-1 w-full max-w-[90%] mt-12">
        <View className="space-y-2 mb-8">
          <Text className="text-white font-rajdhani_700 text-2xl">
            Servidores disponíveis
          </Text>
          <Text className="text-white opacity-50 font-poppins_400">
            Todos os servidores disponíveis para{"\n"}se conectar no momento!
          </Text>
        </View>
        <View className="w-full flex-1">
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 30 }}
          >
            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <View
                  key={i}
                  className="w-full relative bg-foreground border border-outline h-14 rounded-lg justify-center pl-6 mb-2"
                >
                  <View className="flex-row items-center space-x-4">
                    <Feather name="server" size={18} color="#8D8D99" />
                    <Text className="text-[#8D8D99] text-base opacity-80 font-rajdhani_700">
                      10.46.3.223:4280
                    </Text>
                  </View>
                  <View
                    className={clsx("h-2 w-2 right-8 rounded-full absolute", {
                      ["bg-red-500"]: validNetwork === false,
                      ["bg-green-500"]: validNetwork === true,
                    })}
                  />
                </View>
              )
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  )
}
//
