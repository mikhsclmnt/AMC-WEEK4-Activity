import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity, } from 'react-native';


const App = () => {
  const morningActivities = ['Taking bath', 'Breakfast', 'Do some school works', 'Social media', 'Drink some water', 'Exercise', ' Eat a carbohydrate-based healthy breakfast', 'Online Class'];
  const afternoonActivities = ['Lunch', 'Taking bath', 'Check some errands', 'Social media', 'Online shopping', 'Watch a mindless 30-minute TV show.', 'Take an actually energizing nap', 'Drinking coffee'];
  const eveningActivities = ['Taking bath', 'Dinner', 'Toothbrush', 'Cafe hopping', 'Practice meditation', 'Read a book', 'Some bonding of friends', 'Take some skincare', 'Light some candles.'];

  const handlePress = (activity) => {
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.sectionHeader}>MORNING</Text>
        <FlatList
          data={morningActivities}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlessPress(item)}>
              <View style={styles.itemContainer}>
                <Text style={styles.textBold}>
                  <Text style={styles.textItalic}>{item}</Text>
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        <Text style={styles.sectionHeader}>AFTERNOON</Text>
        <FlatList
          data={afternoonActivities}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item)}>
              <View style={styles.itemContainer}>
                <Text style={styles.textBold}>
                  <Text style={styles.textItalic}>{item}</Text>
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        <Text style={styles.sectionHeader}>EVENING</Text>
        <FlatList
          data={eveningActivities}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item)}>
              <View style={styles.itemContainer}>
                <Text style={styles.textBold}>
                  <Text style={styles.textItalic}>{item}</Text>
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#e0f7fa", // updated background color for the ScrollView
  },
  container: {
    borderWidth: 1,
    padding: 20,
    backgroundColor: "#ffcc80", // updated background color for the View
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    color: '#333',
  },
  textBold: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 'bold',
  },
  textItalic: {
    fontStyle: "italic",
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 10,
    padding: 10,
  },
});
export default App;