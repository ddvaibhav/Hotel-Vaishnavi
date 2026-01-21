
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, ScrollView } from 'react-native';
import Button from '../components/Button';
import { TableReservation } from '../types';
import { COLORS } from '../styles';

interface TableReservationScreenProps {
  onBack: () => void;
  onReserve: (res: TableReservation) => void;
}

const TableReservationScreen: React.FC<TableReservationScreenProps> = ({ onBack, onReserve }) => {
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState('20-05-2024');
  const [time, setTime] = useState('19:00');
  const [occasion, setOccasion] = useState('');

  const handleReserve = () => {
    onReserve({
      id: Math.random().toString(36).substr(2, 9),
      guests: parseInt(guests),
      date,
      time,
      occasion
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reserve a Table</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.label}>Number of Guests</Text>
          <View style={styles.guestSelector}>
            {['1', '2', '4', '6', '8'].map(num => (
              <TouchableOpacity 
                key={num} 
                style={[styles.guestBtn, guests === num && styles.activeGuestBtn]}
                onPress={() => setGuests(num)}
              >
                <Text style={[styles.guestText, guests === num && styles.activeGuestText]}>{num}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Date & Time</Text>
          <View style={styles.row}>
            <TextInput 
              style={styles.inputHalf} 
              value={date} 
              onChangeText={setDate}
              placeholder="DD-MM-YYYY"
            />
            <TextInput 
              style={styles.inputHalf} 
              value={time} 
              onChangeText={setTime}
              placeholder="HH:MM"
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Special Occasion (Optional)</Text>
          <TextInput 
            style={styles.inputFull} 
            value={occasion} 
            onChangeText={setOccasion}
            placeholder="Birthday, Anniversary, etc."
          />
        </View>

        <View style={styles.footer}>
          <Button label="Book Table Now" onPress={handleReserve} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: COLORS.white,
  },
  backButton: {
    padding: 5,
  },
  backIcon: {
    fontSize: 24,
    color: COLORS.primary,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
    fontFamily: 'serif',
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 30,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.primary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 12,
  },
  guestSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  guestBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  activeGuestBtn: {
    backgroundColor: COLORS.saffron,
    borderColor: COLORS.saffron,
  },
  guestText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  activeGuestText: {
    color: COLORS.white,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputHalf: {
    width: '48%',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    fontSize: 14,
    color: COLORS.primary,
  },
  inputFull: {
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    fontSize: 14,
    color: COLORS.primary,
  },
  footer: {
    marginTop: 20,
  }
});

export default TableReservationScreen;
