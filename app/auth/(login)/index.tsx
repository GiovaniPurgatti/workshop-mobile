import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";

import { VStack } from "@/components/ui/vstack";
import React, { useState } from "react";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { Pressable } from "@/components/ui/pressable";
import { useRouter } from "expo-router";
export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1"
    >
      <Box className="flex-1 bg-background-light0">
        <VStack space="lg" className="h-full p-6 justify-center">
          <Text size="xl" className="text-center mb-4">
            {" "}
            Bem vindo{" "}
          </Text>

          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Email</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                value={email}
                onChangeText={setEmail}
                placeholder="Digite seu Email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </Input>
          </FormControl>

          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                value={password}
                onChangeText={setPassword}
                placeholder="Digite sua senha"
                secureTextEntry
              />
            </Input>
          </FormControl>

          <Button
            variant="solid"
            size="md"
            action="primary"
            isDisabled={false}
            onPress={() => router.replace("/events")}
          >
            <ButtonText>Login</ButtonText>
          </Button>

          <Pressable
            className="mt-4"
            onPress={() => router.push("/auth/(signup)")}
          >
            <Text size="sm" underline>
              Não tem uma conta? Crie agora
            </Text>
          </Pressable>
        </VStack>
      </Box>
    </KeyboardAvoidingView>
  );
}
