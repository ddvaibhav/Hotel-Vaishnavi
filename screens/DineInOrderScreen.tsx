
import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { globalStyles, COLORS } from '../styles';
import { CartItem } from '../types';
import Button from '../components/Button';

interface DineInOrderScreenProps {
  cartItems: CartItem[];
  onBack: () => void;
  onUpdateQty: (id: string, delta: number) => void;
  onPlaceOrder: (table: string) => void;
}

const DineInOrderScreen: React.FC<DineInOrderScreenProps> = ({ cartItems, onBack, onUpdateQty, onPlaceOrder }) => {
  const [tableNumber, setTableNumber] = useState('');
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <View style={globalStyles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.backBtn}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Dine-In Checkout</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.tableCard}>
          <Text style={styles.tableLabel}>Current Table Number</Text>
          <TextInput
            placeholder="Ex: T-04"
            style={styles.tableInput}
            value={tableNumber}
            onChangeText={setTableNumber}
            keyboardType="default"
          />
          <Text style={styles.infoText}>⚠️ Order will be served at this table.</Text>
        </View>

        <Text style={styles.sectionTitle}>Order Summary</Text>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.orderItem}>
            <View>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>₹{item.price}</Text>
            </View>
            <View style={styles.qtyContainer}>
              <TouchableOpacity onPress={() => onUpdateQty(item.id, -1)} style={styles.qtyBtn}>
                <Text style={styles.qtyBtnText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.qtyText}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => onUpdateQty(item.id, 1)} style={styles.qtyBtn}>
                <Text style={styles.qtyBtnText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <View style={styles.totalsCard}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Subtotal</Text>
            <Text style={styles.totalVal}>₹{subtotal}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>GST (5%)</Text>
            <Text style={styles.totalVal}>₹{tax.toFixed(0)}</Text>
          </View>
          <View style={[styles.totalRow, { marginTop: 10, paddingTop: 10, borderTopWidth: 1, borderColor: '#EEE' }]}>
            <Text style={[styles.totalLabel, { fontSize: 18, color: COLORS.primary }]}>Total Amount</Text>
            <Text style={[styles.totalVal, { fontSize: 22, color: COLORS.saffron }]}>₹{total.toFixed(0)}</Text>
          </View>
        </View>

        <Button 
          label="Place Order" 
          onPress={() => onPlaceOrder(tableNumber)} 
          style={{ marginTop: 30 }} 
        />
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
  },
  backBtn: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.primary,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: COLORS.primary,
    textTransform: 'uppercase',
  },
  content: {
    padding: 20,
  },
  tableCard: {
    backgroundColor: COLORS.white,
    padding: 25,
    borderRadius: 30,
    marginBottom: 25,
    borderWidth: 2,
    borderColor: COLORS.saffron,
  },
  tableLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.saffron,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  tableInput: {
    fontSize: 24,
    fontWeight: '900',
    color: COLORS.primary,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    paddingVertical: 10,
  },
  infoText: {
    marginTop: 15,
    fontSize: 11,
    color: '#888',
    fontStyle: 'italic',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: COLORS.primary,
    textTransform: 'uppercase',
    marginBottom: 15,
    marginLeft: 5,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.primary,
  },
  itemPrice: {
    fontSize: 12,
    color: COLORS.saffron,
    fontWeight: 'bold',
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    borderRadius: 12,
    padding: 4,
  },
  qtyBtn: {
    width: 32,
    height: 32,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyBtnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  qtyText: {
    paddingHorizontal: 15,
    fontWeight: '900',
    color: COLORS.primary,
  },
  totalsCard: {
    marginTop: 20,
    backgroundColor: COLORS.white,
    padding: 25,
    borderRadius: 30,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  totalLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#999',
    textTransform: 'uppercase',
  },
  totalVal: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.primary,
  }
});

export default DineInOrderScreen;
