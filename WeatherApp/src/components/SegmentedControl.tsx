import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { DARK_COLORS } from '../styles/Colors';

interface SegmentedControlProps {
  values: string[];
  onChange: (selectedIndex: number) => void;
}

const SegmentedControl: React.FC<SegmentedControlProps> = ({ values, onChange }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePress = (index: number) => {
    setSelectedIndex(index);
    onChange(index);
  };

  return (
    <View style={styles.container}>
      {values.map((value, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.item, index === selectedIndex && styles.selectedItem]}
          onPress={() => handlePress(index)}
          activeOpacity={0.8}
        >
          <Text style={[styles.text, index === selectedIndex && styles.selectedText]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DARK_COLORS.SECONDARY_BACKGROUND_COLOR,
    borderRadius: 14,
    padding: 2,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 14,
  },
  selectedItem: {
    backgroundColor: DARK_COLORS.PRIMARY_COLOR,
  },
  text: {
    color: DARK_COLORS.SECONDARY_TEXT_COLOR,
    fontSize: 16,
  },
  selectedText: {
    color: DARK_COLORS.SECONDARY_TEXT_COLOR,
  },
});

export default SegmentedControl;