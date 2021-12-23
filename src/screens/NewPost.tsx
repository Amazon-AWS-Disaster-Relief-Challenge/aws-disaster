import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Text, TextInput, View } from "react-native";
import tailwind from "tailwind-rn";

export default function HomeScreen({ navigation }: ScreenProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <View style={tailwind("p-5")}>
      <Text>Hello</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={tailwind("w-full p-2 my-3 text-3xl border")}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {errors.firstName && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={tailwind("w-full p-2 my-3 text-3xl border")}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
      />
      <Text>Goodbye</Text>

      {/* <Button
        style={tailwind("w-full p-5 text-3xl border")}
        title="Submit"
        onPress={handleSubmit(onSubmit)}
      /> */}
    </View>
  );
}
