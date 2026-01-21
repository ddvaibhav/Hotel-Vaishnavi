
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { User } from '../types';
import Button from '../components/Button';
import { COLORS } from '../styles';

interface ProfileScreenProps {
  user: User | null;
  onBack: () => void;
  onLogout: () => void;
  onOrders: () => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ user, onBack, onLogout, onOrders }) => {
  const menuOptions = [
    { label: 'Dine-In Orders', icon: '🍛', action: onOrders },
    { label: 'Payment Settings', icon: '💳', action: () => {} },
    { label: 'Account Settings', icon: '⚙️', action: () => {} },
    { label: 'Contact Support', icon: '💬', action: () => {} },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.userCard}>
          <View style={styles.avatarContainer}>
             <Text style={styles.avatarText}>{user?.name?.charAt(0) || 'G'}</Text>
          </View>
          <Text style={styles.userName}>{user?.name || 'Guest'}</Text>
          <Text style={styles.userEmail}>{user?.email || 'guest@vaishnavi.com'}</Text>
        </View>

        <View style={styles.options}>
          {menuOptions.map((opt, i) => (
            <TouchableOpacity key={i} style={styles.optionItem} onPress={opt.action}>
              <View style={styles.optionLeft}>
                <Text style={styles.optionIcon}>{opt.icon}</Text>
                <Text style={styles.optionLabel}>{opt.label}</Text>
              </View>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.footer}>
          <Button label="Logout" variant="outline" onPress={onLogout} />
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
    flex: 1,
  },
  userCard: {
    alignItems: 'center',
    padding: 40,
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.saffron,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 32,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.primary,
    fontFamily: 'serif',
  },
  userEmail: {
    fontSize: 14,
    color: COLORS.primary,
    opacity: 0.5,
    marginTop: 4,
  },
  options: {
    padding: 20,
    marginTop: 20,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  optionLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  chevron: {
    fontSize: 24,
    color: COLORS.primary,
    opacity: 0.2,
  },
  footer: {
    padding: 30,
    marginTop: 20,
  }
});

export default ProfileScreen;
