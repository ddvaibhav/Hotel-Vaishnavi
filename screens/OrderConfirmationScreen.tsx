
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Order } from '../types';
import Button from '../components/Button';
import { COLORS } from '../styles';

interface OrderConfirmationScreenProps {
  order: Order | null;
  onHome: () => void;
  language: 'en' | 'mr';
}

const OrderConfirmationScreen: React.FC<OrderConfirmationScreenProps> = ({ order, onHome, language }) => {
  const t = {
    en: {
      success: "Order Placed Successfully!",
      msg: "Your meal will be served at Table #" + (order?.tableNumber || "--") + " shortly.",
      back: "Back to Home"
    },
    mr: {
      success: "ऑर्डर यशस्वीरित्या देण्यात आली!",
      msg: "तुमचे जेवण लवकरच टेबल नंबर #" + (order?.tableNumber || "--") + " वर दिले जाईल.",
      back: "मुख्य पृष्ठावर जा"
    }
  }[language];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.successIcon}>
          <Text style={styles.checkmark}>✓</Text>
        </View>
        <Text style={styles.title}>{t.success}</Text>
        <Text style={styles.message}>{t.msg}</Text>
        
        <View style={styles.orderSummary}>
          <Text style={styles.summaryTitle}>Order Details</Text>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Order ID</Text>
            <Text style={styles.rowValue}>#{order?.id}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Total Amount</Text>
            <Text style={styles.rowValue}>₹{order?.total}</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Button label={t.back} onPress={onHome} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  successIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  checkmark: {
    fontSize: 40,
    color: '#2E7D32',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    fontFamily: 'serif',
    textAlign: 'center',
    marginBottom: 12,
  },
  message: {
    fontSize: 14,
    color: COLORS.primary,
    opacity: 0.6,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 40,
  },
  orderSummary: {
    width: '100%',
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 20,
    marginBottom: 40,
  },
  summaryTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.primary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 16,
    opacity: 0.4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  rowLabel: {
    fontSize: 14,
    color: COLORS.primary,
    opacity: 0.6,
  },
  rowValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  footer: {
    width: '100%',
  }
});

export default OrderConfirmationScreen;
