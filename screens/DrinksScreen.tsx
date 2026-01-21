
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';
import { MenuItem } from '../types';
import { MOCK_MENU } from '../constants';
import { COLORS } from '../styles';

interface DrinksScreenProps {
  onBack: () => void;
  onAddToCart: (item: MenuItem) => void;
}

const DrinksScreen: React.FC<DrinksScreenProps> = ({ onBack, onAddToCart }) => {
  const drinks = MOCK_MENU.filter(item => item.category === 'Beverages' || item.category === 'Beer');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Drinks & Bar</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.warningBox}>
          <Text style={styles.warningText}>⚠️ Alcohol is served to adults (21+) only.</Text>
        </View>

        {drinks.map((item) => (
          <View key={item.id} style={styles.itemCard}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>₹{item.price}</Text>
            </View>
            <TouchableOpacity style={styles.addButton} onPress={() => onAddToCart(item)}>
              <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
          </View>
        ))}
        <View style={{ height: 40 }} />
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
    padding: 10,
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
    flex: 1,
    padding: 20,
  },
  warningBox: {
    backgroundColor: '#FFF8E1',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFD54F',
    marginBottom: 20,
  },
  warningText: {
    fontSize: 11,
    color: '#F57F17',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 12,
    borderRadius: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },
  itemInfo: {
    flex: 1,
    paddingHorizontal: 16,
  },
  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  itemPrice: {
    fontSize: 15,
    fontWeight: '900',
    color: COLORS.saffron,
    marginTop: 2,
  },
  addButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  addButtonText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: 'bold',
  }
});

export default DrinksScreen;
