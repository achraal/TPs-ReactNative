import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.welcomeCard}>
        <Ionicons name="star" size={40} color="#FFD700" />
        <Text style={styles.welcomeTitle}>Bienvenue !</Text>
        <Text style={styles.welcomeText}>Découvrez les fonctionnalités de votre app</Text>
      </View>
      
      <View style={styles.actionButtons}>
        <Button 
          title="📊 Voir les détails" 
          color="#007AFF"
          onPress={() => navigation.navigate('Details', { id: 42 })} 
        />
        <Button 
          title="⭐ Favoris" 
          color="#FF9500"
          onPress={() => alert('Favoris bientôt disponibles !')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  welcomeCard: {
    backgroundColor: 'white',
    margin: 20,
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  welcomeTitle: { fontSize: 24, fontWeight: 'bold', color: '#333', marginTop: 10 },
  welcomeText: { fontSize: 16, color: '#666', textAlign: 'center', marginTop: 5 },
  actionButtons: { marginHorizontal: 20, marginBottom: 20, gap: 10 },
});
