import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>⚙️ Paramètres</Text>
      
      <View style={styles.section}>
        <View style={styles.row}>
          <Ionicons name="notifications" size={24} color="#007AFF" />
          <Text style={styles.label}>Notifications</Text>
          <Switch value={notifications} onValueChange={setNotifications} />
        </View>
        
        <View style={styles.row}>
          <Ionicons name="moon" size={24} color="#FF9500" />
          <Text style={styles.label}>Mode sombre</Text>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Se déconnecter</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#333', marginBottom: 30, textAlign: 'center' },
  section: { backgroundColor: 'white', borderRadius: 15, padding: 20, marginBottom: 20 },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' },
  label: { fontSize: 18, color: '#333', flex: 1, marginLeft: 15 },
  button: { backgroundColor: '#FF3B30', padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});
