import * as React from "react";
import {
  Dimensions,
  Image,
  ImageStyle,
  SafeAreaView,
  ScrollView,
  Text,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import moment from "moment";
import { Theme } from "react-native-calendars/src/types";
import { MarkingProps } from "react-native-calendars/src/calendar/day/marking";
import ItemSlot from "./item-slot";

const { width } = Dimensions.get("window");

LocaleConfig.locales["en"] = {
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthNamesShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  dayNamesShort: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
  today: "Today",
};
LocaleConfig.defaultLocale = "en";

const CONTAINER: ViewStyle = {
  flex: 1,
  backgroundColor: "#EFEFEF",
};

const CALENDAR: ViewStyle = {
  width,
  paddingLeft: 10,
  paddingRight: 10,
};

const THEME: Theme = {
  backgroundColor: "#EFEFEF",
  calendarBackground: "#EFEFEF",
  textDayStyle: {
    marginTop: 0,
    textAlign: "center",
    fontSize: 12,
  },
  contentStyle: {
    borderWidth: 1,
  },
};

const TX: TextStyle = {
  marginVertical: 15,
  alignSelf: "center",
};

const CONTAINER_HEADER: ViewStyle = {
  flex: 1,
  borderWidth: 1,
  borderColor: "#C50AFF",
  paddingVertical: 4,
  paddingHorizontal: 15,
  borderRadius: 11,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "white",
};

const DATE_SELECTED: MarkingProps = {
  selected: true,
  customStyles: {
    container: {
      height: 0,
      width: 0,
    },
    text: {
      color: "#FFFFFF",
    },
  },
};

const IC_RIGHT: ImageStyle = {
  height: 13,
  width: 13,
  resizeMode: "cover",
};

const CONTAINER_SLOT: ViewStyle = {
  ...CONTAINER_HEADER,
  flex: 0,
  marginTop: 5,
  marginHorizontal: 18,
};

const BTN_SAVE: ViewStyle = {
  backgroundColor: "#C50AFF",
  paddingVertical: 10,
  marginVertical: 10,
  marginHorizontal: 18,
  borderRadius: 5,
};

const TX_SAVE: TextStyle = {
  color: "#FFFFFF",
  textAlign: "center",
};

const arrTime = [
  "09:00 AM",
  "12:00 PM",
  "03:00 PM",
  "06:00 PM",
  "10:00 PM",
  "01:00 PM",
];

export default function App() {
  const today = moment().format("YYYY-MM-DD");
  const [date, setDate] = React.useState<string>(today);

  const renderHeader = (date: any) => {
    return (
      <View style={CONTAINER_HEADER}>
        <Text>{moment(new Date(date)).format("MMMM YYYY")}</Text>
        <Image style={IC_RIGHT} source={require("./assets/right-arrow.png")} />
      </View>
    );
  };

  return (
    <SafeAreaView style={CONTAINER}>
      <ScrollView>
        <Text style={TX}>Add available date and time</Text>
        <Calendar
          initialDate={today}
          date={date}
          markingType="custom"
          style={CALENDAR}
          theme={THEME}
          renderHeader={renderHeader}
          markedDates={{ [date]: DATE_SELECTED }}
          firstDay={1}
          hideArrows
          disableArrowLeft
          disableArrowRight
          enableSwipeMonths
          onDayPress={(day) => {
            setDate(day.dateString);
          }}
          onDayLongPress={(day) => {
            setDate(day.dateString);
          }}
        />
        <View style={CONTAINER_SLOT}>
          <Text>Slots available</Text>
        </View>
        {arrTime.map((time) => (
          <ItemSlot key={time} time={time} />
        ))}
        <TouchableWithoutFeedback>
          <View style={BTN_SAVE}>
            <Text style={TX_SAVE}>Save</Text>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
}
