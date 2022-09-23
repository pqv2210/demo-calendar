import * as React from "react";
import {
  Image,
  ImageStyle,
  Text,
  TextInput,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";

const CONTAINER: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  marginHorizontal: 30,
  marginTop: 7,
};

const WRAP_TIME: ViewStyle = {
  padding: 5,
  borderRadius: 8,
  borderWidth: 1,
  borderColor: "#E9E9E9",
  width: 80,
  justifyContent: "center",
  alignItems: "center",
};

const IC_SUBTRACT: ImageStyle = {
  height: 18.5,
  width: 18.5,
  resizeMode: "cover",
  marginLeft: 20,
};

const TEXT_INPUT: ViewStyle | TextStyle = {
  flex: 1,
  borderWidth: 1,
  borderColor: "#0E0E0E",
  marginHorizontal: 15,
  borderRadius: 8,
  height: 30,
  textAlign: "center",
  backgroundColor: "#FFFFFF",
  fontSize: 12,
};

const IC_ADD: ImageStyle = {
  height: 20,
  width: 20,
  resizeMode: "cover",
  tintColor: "#C50AFF",
};

interface ItemSlotProps {
  time: string;
}

export default function ItemSlot(props: ItemSlotProps) {
  const { time } = props;
  const [selected, setSelected] = React.useState<boolean>(false);
  const [inputValue, setInputValue] = React.useState<string>("");

  const onChangeSelect = () => {
    setInputValue(selected ? "" : "0");
    setSelected(!selected);
  };

  const onAddWorker = () => {
    if (selected) {
      setInputValue(Number(inputValue) + 1 + "");
    }
  };

  const onSubtractWorker = () => {
    if (Number(inputValue) > 0 && selected) {
      setInputValue(Number(inputValue) - 1 + "");
    }
  };

  return (
    <View style={CONTAINER}>
      <TouchableWithoutFeedback onPress={onChangeSelect}>
        <View
          style={[
            WRAP_TIME,
            {
              backgroundColor: selected ? "#C50AFF" : "#FFFFFF",
            },
          ]}
        >
          <Text
            style={{ fontSize: 14, color: selected ? "#FFFFFF" : "#000000" }}
          >
            {time}
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={onSubtractWorker}>
        <Image style={IC_SUBTRACT} source={require("./assets/subtract.png")} />
      </TouchableWithoutFeedback>
      <TextInput
        style={TEXT_INPUT}
        placeholder="Number of Workers"
        keyboardType="numeric"
        value={inputValue}
        editable={selected}
        onChangeText={setInputValue}
      />
      <TouchableWithoutFeedback onPress={onAddWorker}>
        <Image style={IC_ADD} source={require("./assets/add.png")} />
      </TouchableWithoutFeedback>
    </View>
  );
}
