
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../styles';

const Footer: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.item}>
          <View style={styles.iconCircle}>
            <Text style={styles.icon}>✉️</Text>
          </View>
          <Text style={styles.text}>contact@vaishnavihotel.com</Text>
        </View>

        <View style={styles.item}>
          <View style={styles.iconCircle}>
            <Text style={styles.icon}>📞</Text>
          </View>
          <Text style={styles.text}>+91 9XXXXXXXXX</Text>
        </View>

        <View style={styles.item}>
          <View style={styles.iconCircle}>
            <Text style={styles.icon}>📍</Text>
          </View>
          <Text style={styles.text}>Vaishnavi Hotel, Maharashtra, India</Text>
        </View>
      </View>

      <View style={styles.divider} />
      <Text style={styles.copyright}>© 2024 Vaishnavi Hotel • All Rights Reserved</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 24,
    paddingBottom: 40,
    paddingTop: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  content: {
    gap: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(230, 126, 34, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 14,
  },
  text: {
    fontSize: 11,
    fontWeight: 'bold',
    color: 'rgba(93, 64, 55, 0.7)',
    letterSpacing: 0.5,
  },
  divider: {
    height: 1,
    width: 40,
    backgroundColor: 'rgba(230, 126, 34, 0.2)',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 15,
  },
  copyright: {
    fontSize: 8,
    fontWeight: '900',
    color: 'rgba(93, 64, 55, 0.3)',
    textTransform: 'uppercase',
    letterSpacing: 3,
    textAlign: 'center',
  }
});

export default Footer;
