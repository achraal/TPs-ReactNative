import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DetailsScreen({ route }) {
  const { id = 'Inconnu' } = route.params || {};

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="document-text" size={60} color="#007AFF" />
        <Text style={styles.title}>Détails #{id}</Text>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>📋 Informations</Text>
        <Text style={styles.info}>ID: <Text style={styles.value}>{id}</Text></Text>
        <Text style={styles.info}>Statut: <Text style={styles.value}>Actif</Text></Text>
        <Text style={styles.info}>Créé le: <Text style={styles.value}>04/12/2025</Text></Text>
      </View>

      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Ionicons name="trending-up" size={30} color="#34C759" />
          <Text style={styles.statNumber}>+12%</Text>
          <Text style={styles.statLabel}>Croissance</Text>
        </View>
        <View style={styles.statItem}>
          <Ionicons name="time" size={30} color="#FF9500" />
          <Text style={styles.statNumber}>3j</Text>
          <Text style={styles.statLabel}>Activité</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { alignItems: 'center', padding: 30, backgroundColor: 'white' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#333', marginTop: 10 },
  card: { backgroundColor: 'white', margin: 20, padding: 20, borderRadius: 15 },
  cardTitle: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  info: { fontSize: 16, color: '#666', marginBottom: 10 },
  value: { fontWeight: 'bold', color: '#007AFF' },
  stats: { flexDirection: 'row', justifyContent: 'space-around', margin: 20 },
  statItem: { alignItems: 'center' },
  statNumber: { fontSize: 24, fontWeight: 'bold', color: '#333', marginTop: 5 },
  statLabel: { fontSize: 14, color: '#666' },
});
