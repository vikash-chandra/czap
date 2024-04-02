import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

const carTypes = [
  {id: 1, label: 'Ride', img: require('../../assets/image/ride.png')},
  {id: 2, label: 'Package', img: require('../../assets/image/package.png')},
  {id: 3, label: 'Rentals', img: require('../../assets/image/rentals.png')},
  {id: 4, label: 'Intercity', img: require('../../assets/image/reserve.png')},
];

const typeOfVehicles = [
  {id: 1, label: 'Go Green', description: 'Ride in a fully electric vehicle'},
  {id: 2, label: 'Go Green', description: 'Ride in a fully electric vehicle'},
  {id: 3, label: 'Go Green', description: 'Ride in a fully electric vehicle'},
  {id: 4, label: 'Go Green', description: 'Ride in a fully electric vehicle'},
];

const HomeScreen = ({navigation}: any) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerText}>Uber</Text>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Where to?"
            placeholderTextColor="#000"
          />
          <Image
            style={styles.searchImage}
            resizeMode="cover"
            source={require('../../assets/image/search.png')}
          />
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Suggestions</Text>
          <Text style={styles.seeAllText}>See All</Text>
        </View>

        <View style={styles.carTypesContainer}>
          {carTypes.map(item => (
            <View key={item.id} style={styles.carTypeItem}>
              {(item.id === 1 || item.id === 3) && (
                <View style={styles.promoBadge}>
                  <Text style={styles.promoText}>Promo</Text>
                </View>
              )}
              <Image
                style={styles.carTypeImage}
                resizeMode="contain"
                source={item.img}
              />
              <Text style={styles.carTypeLabel}>{item.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.bannerContainer}>
          <Image
            resizeMode="cover"
            style={styles.bannerImage}
            source={require('../../assets/image/banner-payment.png')}
          />
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>More ways to use Uber</Text>
        </View>

        <View style={styles.vehicleContainer}>
          {typeOfVehicles.map(item => (
            <View key={item.id} style={styles.vehicleItem}>
              <Image
                style={styles.vehicleImage}
                resizeMode="cover"
                source={require('../../assets/image/green.png')}
              />
              <Text style={styles.vehicleLabel}>{item.label}</Text>
              <Text style={styles.vehicleDescription}>{item.description}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  content: {
    flex: 1,
  },
  headerText: {
    fontSize: 32,
    lineHeight: 36,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
  },
  searchContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    borderRadius: 20,
    paddingLeft: 60,
    fontWeight: '600',
    fontSize: 20,
  },
  searchImage: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 20,
    top: 13,
  },
  sectionContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionHeader: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
  },
  seeAllText: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
  },
  carTypesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  carTypeItem: {
    height: 120,
    borderRadius: 20,
    width: deviceWidth / 5,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  promoBadge: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#4f8453',
    width: 60,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  promoText: {
    color: 'white',
    fontSize: 10,
  },
  carTypeImage: {
    width: 50,
    height: 50,
  },
  carTypeLabel: {
    fontSize: 12,
    lineHeight: 14,
    color: '#000',
    marginTop: 10,
  },
  bannerContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  bannerImage: {
    width: deviceWidth - 20,
    height: 100,
    borderRadius: 20,
  },
  vehicleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  vehicleItem: {
    width: '45%',
    marginBottom: 20,
  },
  vehicleImage: {
    width: '100%',
    height: 100,
    borderRadius: 20,
  },
  vehicleLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  vehicleDescription: {
    fontSize: 12,
    color: '#555',
  },
});

export default HomeScreen;
