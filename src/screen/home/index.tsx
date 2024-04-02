import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const HomeScreen = ({navigation}: any) => {
  const navigateToBooking = () => {
    // Navigate to the booking screen
    navigation.navigate('Booking');
  };

  return (
    <ImageBackground
      source={require('../../assets/image/background.jpg')}
      style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to CarWashApp</Text>
          <Text style={styles.subtitle}>
            The best way to keep your car clean and shining
          </Text>
        </View>

        <View style={styles.featuresContainer}>
          <View style={styles.feature}>
            <Text style={styles.featureText}>Wide Range of Services</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureText}>Convenient Scheduling</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureText}>Affordable Prices</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={navigateToBooking}>
          <Text style={styles.buttonText}>Book a Wash</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Contact us for custom packages and discounts!
        </Text>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    gap: 20,
  },
  feature: {
    alignItems: 'center',
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: '30%',
  },
  featureText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
});

export default HomeScreen;
