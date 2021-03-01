import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { stingyNote } from "../slices/stingyNotesSlice";
import YiuSVG from "../svg-jsx/yiu-svg";

interface props {
  item: stingyNote;
}

export default function StingyNoteCard({ item }: props) {
  const { date, sin, penalty } = item;
  const hasPenalty: boolean = Boolean(penalty);
  const dateString = new Date(date).toLocaleDateString("zh-hk");

  return (
    <View style={styles.card}>
      <Text style={styles.date}>{dateString}</Text>
      <View
        style={hasPenalty ? styles.textFlexboxWithPenalty : styles.textFlexbox}
      >
        <Text style={styles.text} numberOfLines={1}>
          {sin}
        </Text>
        {hasPenalty && (
          <React.Fragment>
            <YiuSVG />
            <Text style={styles.text} numberOfLines={1}>
              {penalty}
            </Text>
          </React.Fragment>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginBottom: 15,
    paddingHorizontal: 9,
    paddingVertical: 4,
    justifyContent: "space-evenly",
    borderRadius: 16,
  },
  date: {
    fontSize: 26,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  textFlexbox: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textFlexboxWithPenalty: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    lineHeight: 35,
  },
});
