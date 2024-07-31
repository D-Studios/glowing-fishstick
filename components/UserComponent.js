//2) Mocking API Calls
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function UserComponent () {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <ScrollView style={styles.container}>
      {users.map(user => (
        <View key={user.id} style={styles.item}>
          <Text>{user.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    item: {
      padding: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
  });
