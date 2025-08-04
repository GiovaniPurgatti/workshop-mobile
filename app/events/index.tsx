import { Box } from "@/components/ui/box";
import { Button, ButtonIcon } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Center } from "@/components/ui/center";
import { Heading } from "@/components/ui/heading";
import { AddIcon } from "@/components/ui/icon";
import { Input, InputField } from "@/components/ui/input";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const mockData = [
  { id: "1", title: "Evento1", description: "Descricao do evento" },
  { id: "2", title: "Evento2", description: "Descricao do evento" },
  { id: "3", title: "Evento3", description: "Descricao do evento" },
];

const CardListScreen = () => {
  const router = useRouter();
  const [data] = useState(mockData);
  const [search, setSearch] = useState("");
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = () => {
    router.push("/events/new");
  };

  const handleEdit = () => {
    router.push("/events/event");
  };

  return (
    <SafeAreaView className="flex-1" edges={["top", "left", "right"]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
        className="flex-1"
      >
        <Box className="w-screen p-2">
          <VStack className="m-2">
            <Input>
              <InputField
                placeholder="Buscar Eventos"
                value={search}
                onChangeText={setSearch}
              />
            </Input>
          </VStack>
          <VStack className="m-2">
            <Button onPress={handleAdd}>
              <ButtonIcon as={AddIcon} />
            </Button>
          </VStack>
          <VStack className="m-2">
            <ScrollView showsVerticalScrollIndicator={false}>
              <VStack>
                {filteredData.length === 0 ? (
                  <Center>
                    <Text>Nenhum Evento encontrado</Text>
                  </Center>
                ) : (
                  filteredData.map((item) => (
                    <Pressable className="mb-4" key={item.id} onPress={() => handleEdit()}>
                      <Card className="bg-blue-400">
                        <Heading>{item.title}</Heading>
                        <Text>{item.description}</Text>
                      </Card>
                    </Pressable>
                  ))
                )}
              </VStack>
            </ScrollView>
          </VStack>
        </Box>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CardListScreen;
