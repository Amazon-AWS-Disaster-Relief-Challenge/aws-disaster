import * as React from "react";
import { Button, Dimensions, Pressable, Text, View } from "react-native";
import tailwind from "tailwind-rn";
import * as icons from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
const links = [
  {
    id: "close",
    icon: "x",
    iconLib: "Feather",
  },
  {
    id: "share",
    icon: "share",
    iconLib: "MaterialCommunityIcons",
    size: 30,
  },
  {
    id: "comment",
    icon: "chat",
    iconLib: "MaterialIcons",
  },
];

export function IconButton({ icon, iconLib, size, ...props }: any) {
  const Icon: any = icons[iconLib || "Feather"];
  return (
    <Pressable
      style={tailwind("p-2 my-2 mx-3 rounded-full bg-white bg-opacity-20")}
      {...props}
    >
      <Icon name={icon} size={26} color="black" />
    </Pressable>
  );
}

export function PostSingleOverlay({
  post,
  stop,
  play,
  pause,
  navigation,
  showCommentModal,
}: any) {
  const PlayIcon: any = icons["MaterialCommunityIcons"];
  const refRBSheet = React.useRef();
  return (
    <Pressable
      style={{
        width: Dimensions.get("window").width,
        position: "absolute",
        top: 64,
        zIndex: 999,
        flex: 1,
        flexDirection: "column",
        bottom: 0,
      }}
      // onPressIn={() => pause()}
      // onPressOut={() => play()}
    >
      {links && (
        <View style={tailwind("flex-grow flex-1 justify-start items-end")}>
          {links.map((link: any) => {
            return <IconButton {...link} onPress={console.log} />;
          })}
        </View>
      )}
      <View
        style={tailwind(
          "flex flex-row items-center justify-between px-5 -mx-1"
        )}
      >
        <Pressable style={tailwind("rounded-full m-0 p-0")}>
          <PlayIcon size="32" name="play-circle" color="white" />
        </Pressable>

        <View style={tailwind("ml-2 flex-1 flex")}>
          <View style={{ height: 3 }}>
            <View
              style={tailwind("flex-1 flex flex-row bg-black bg-opacity-50")}
            >
              <View
                style={{
                  backgroundColor: "rgba(255,255,255,.4)",
                  height: 3,
                  width: 200,
                }}
              />
              <View
                style={{
                  backgroundColor: "white",
                  height: 3,
                  width: 130,
                  position: "absolute",
                }}
              />
            </View>
          </View>
          <View style={tailwind("absolute top-100 right-0")}>
            <Text style={tailwind("py-1 text-white")}>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "bold",
                  letterSpacing: -0.5,
                }}
              >
                -02.32
              </Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={tailwind("flex flex-row items-center justify-between p-5")}>
        <Pressable
          style={tailwind(
            "p-5 rounded-full w-12 h-12 border-2 border-transparent bg-red-400 opacity-50"
          )}
        />
        <Pressable
          style={tailwind(
            "p-5 rounded-full w-12 h-12 border-2 border-white bg-blue-400"
          )}
        />
        <Pressable
          style={tailwind(
            "p-5 rounded-full w-12 h-12 border-2 border-transparent bg-green-400"
          )}
        />
        <Pressable
          style={tailwind(
            "p-5 rounded-full w-12 h-12 border-2 border-transparent bg-yellow-400"
          )}
        />
        <Pressable
          style={tailwind(
            "p-5 rounded-full w-12 h-12 border-2 border-transparent bg-purple-400"
          )}
        />
        <Pressable
          style={tailwind(
            "p-5 rounded-full w-12 h-12 border-2 border-transparent bg-gray-700"
          )}
        />
      </View>
      <View
        style={tailwind(
          "flex bg-black flex-row items-center justify-between pb-5"
        )}
      >
        <Pressable style={tailwind("p-5 flex-1")}>
          <Text style={{ textAlign: "left", color: "#fff" }}>{post.title}</Text>
        </Pressable>
        <Pressable
          style={tailwind("p-5 flex-1")}
          onPress={() => navigation.navigate("createPost", { post })}
        >
          <Text style={{ textAlign: "center", color: "#fff" }}>
            Create Post
          </Text>
        </Pressable>
        <Pressable
          style={tailwind("px-5 flex flex-row flex-1 justify-center")}
          onPress={() => showCommentModal()}
        >
          <Text style={{ textAlign: "right", color: "#fff" }}>Comment</Text>
        </Pressable>
      </View>
      <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => refRBSheet.current.open()}
      />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        <Text>Hello</Text>
      </RBSheet>
    </Pressable>
  );
}
