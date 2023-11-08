import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import SegmentedControl from '../../components/SegmentedControl';
import { DARK_COLORS } from '../../styles/Colors';

interface SettingsScreenProps {}

const SettingsScreen: React.FC<SettingsScreenProps> = () => {
  const [themeIndex, setThemeIndex] = useState(0);
  const themes = ['Light', 'Dark'];

  const handleThemeChange = (selectedIndex: number) => {
    setThemeIndex(selectedIndex);
    // TODO: - Implement theme change logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>
      <View style={styles.themeContainer}>
      <Image
          source={require('../../../assets/manage-theme.png')}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={styles.manageThemeLabel}>Manage Theme</Text>
        <View style={styles.segmentedControlContainer}>
          <SegmentedControl values={themes} onChange={handleThemeChange} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK_COLORS.PRIMARY_BACKGROUND_COLOR,
  },
  heading: {
    color: DARK_COLORS.PRIMARY_TEXT_COLOR,
    fontSize: 32,
    paddingVertical: 30,
    paddingHorizontal: 20,
    fontWeight: "bold",
  },
  themeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  manageThemeLabel: {
    color: DARK_COLORS.PRIMARY_TEXT_COLOR,
    fontSize: 18,
    fontWeight: "600",
    marginRight: 20
  },
  segmentedControlContainer: {
    flex: 1,
    maxWidth: 300,
  }
});

export default SettingsScreen;