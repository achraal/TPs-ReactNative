import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function AppBar({ title = 'Mon Application' }) {
  const { logout } = useContext(AuthContext);
  
  return (
    <View style={styles.appBar}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={logout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 60,
    backgroundColor: '#007AFF',
    flexDirection: 'row',        // ← Ajouté
    justifyContent: 'space-between', // ← Ajouté
    alignItems: 'center',
    paddingHorizontal: 20,       // ← Ajouté
    elevation: 4,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {              // ← Nouveau
    padding: 8,
  },
  logoutText: {                // ← Nouveau
    color: '#fff',
    fontWeight: '600',
  },
});
