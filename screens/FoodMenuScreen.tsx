
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';
import { MenuItem } from '../types';
import { MOCK_MENU } from '../constants';
import { COLORS } from '../styles';

interface FoodMenuScreenProps {
  onBack: () => void;
  onAddToCart: (item: MenuItem) => void;
}

const FoodMenuScreen: React.FC<FoodMenuScreenProps> = ({ onBack, onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<'Veg' | 'Non-Veg'>('Veg');
  const filteredMenu = MOCK_MENU.filter(item => item.category === activeCategory);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Maharashtrian Menu</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity 
          style={[styles.tab, activeCategory === 'Veg' && styles.activeTab]}
          onPress={() => setActiveCategory('Veg')}
        >
          <Text style={[styles.tabText, activeCategory === 'Veg' && styles.activeTabText]}>Vegetarian</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeCategory === 'Non-Veg' && styles.activeTab]}
          onPress={() => setActiveCategory('Non-Veg')}
        >
          <Text style={[styles.tabText, activeCategory === 'Non-Veg' && styles.activeTabText]}>Non-Veg</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
        {filteredMenu.map((item) => (
          <View key={item.id} style={styles.itemCard}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemContent}>
              <View>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDesc} numberOfLines={2}>{item.description}</Text>
              </View>
              <View style={styles.itemFooter}>
                <Text style={styles.itemPrice}>₹{item.price}</Text>
                <TouchableOpacity style={styles.addButton} onPress={() => onAddToCart(item)}>
                  <Text style={styles.addButtonText}>ADD</Text>
                </TouchableOpacity>
              </View>
            </View>
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
    elevation: 2,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
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
  tabs: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: COLORS.white,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: COLORS.saffron,
  },
  tabText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.primary,
    opacity: 0.4,
  },
  activeTabText: {
    color: COLORS.white,
    opacity: 1,
  },
  list: {
    flex: 1,
    padding: 16,
  },
  itemCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  itemImage: {
    width: 110,
    height: 110,
  },
  itemContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  itemDesc: {
    fontSize: 11,
    color: COLORS.primary,
    opacity: 0.5,
    marginTop: 2,
  },
  itemFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '900',
    color: COLORS.saffron,
  },
  addButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 8,
  },
  addButtonText: {
    color: COLORS.white,
    fontSize: 11,
    fontWeight: 'bold',
  }
});

export default FoodMenuScreen;
