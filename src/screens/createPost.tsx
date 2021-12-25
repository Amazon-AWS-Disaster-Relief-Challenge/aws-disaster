import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Text, TextInput, View } from "react-native";
import tailwind from "tailwind-rn";
import { API, graphqlOperation } from "aws-amplify";
import { useMutation, useQuery } from "react-query";
import { createPost } from "../graphql/mutations";
/* Import the Amplify Auth API */
import { Auth } from "aws-amplify";

export default function NewPost() {
  const { data: user } = useQuery("user", async () =>
    Auth.currentAuthenticatedUser()
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { title: "" },
  });

  const mutation = useMutation(async (data) => {
    return API.graphql(graphqlOperation(createPost, { input: data }));
  });

  const onSubmit = async (data: any) => {
    try {
      await mutation.mutate({
        ...data,
        username: user.username,
        email: user.attributes.email,
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <View style={tailwind("p-5 pt-20")}>
      <Text style={tailwind("text-2xl text-gray-800")}>Leave a comment</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={tailwind("w-full p-2 my-3 text-3xl border")}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="title"
      />
      {errors.title && <Text>This is required.</Text>}

      <Button
        style={tailwind("w-full p-5 text-3xl border")}
        title="Submit"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
}
