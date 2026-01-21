
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const COLORS = {
  primary: '#5D4037', // Mahogany Brown
  saffron: '#E67E22', // Deep Saffron
  gold: '#D4AF37',    // Heritage Gold
  cream: '#FDFBF7',   // Background Cream
  white: '#FFFFFF',
  text: '#2C1B15',
  lightGray: '#F5F5F5',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.primary,
    fontFamily: 'serif',
  },
  subHeaderText: {
    fontSize: 14,
    color: COLORS.saffron,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(230, 126, 34, 0.1)',
  },
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    color: COLORS.primary,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 15,
  }
});
