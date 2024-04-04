import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const deviceWidth = Dimensions.get('window').width;

const carTypes = [
  {
    id: 1,
    label: 'Small/Hatchback',
    img: require('../../assets/image/small.png'),
    typeOfVehicles: [
      {
        id: 1,
        label: 'Quick Wash',
        price: '200 - 300',
        image: require('../../assets/image/small1.jpg'),
        description: 'Full car shampoo and wash (Exterior only)',
      },
      {
        id: 2,
        label: 'Essential',
        price: '500 - 600',
        image: require('../../assets/image/small1.jpg'),
        description: 'Full Car exterior body Shampoo and Wash',
      },
      {
        id: 3,
        label: 'Gold',
        price: '750 - 850',
        image: require('../../assets/image/small1.jpg'),
        description: 'Full Car exterior body Shampoo and Wash',
      },
      {
        id: 4,
        label: 'Premium',
        price: '1200 - 1500',
        image: require('../../assets/image/small1.jpg'),
        description: 'Full Car exterior body Shampoo Wash',
      },
      {
        id: 5,
        label: 'Paint Protection ',
        price: '7500 - 10000',
        image: require('../../assets/image/small1.jpg'),
        description: 'Outing body pressure wash',
      },
      {
        id: 6,
        label: 'Ceramic Treatment',
        price: '10000 - 12000',
        image: require('../../assets/image/small1.jpg'),
        description: 'Pressure Wash and Shampoo Wash',
      },
    ],
  },
  {
    id: 2,
    label: 'Sedan',
    img: require('../../assets/image/sedan.png'),
    typeOfVehicles: [
      {
        id: 1,
        label: 'Quick Wash',
        price: '200 - 300',
        image: require('../../assets/image/sedan1.jpg'),
        description: 'Full car shampoo and wash (Exterior only)',
      },
      {
        id: 2,
        label: 'Essential',
        price: '500 - 700',
        image: require('../../assets/image/sedan1.jpg'),
        description: 'Full Car exterior body Shampoo and Wash',
      },
      {
        id: 3,
        label: 'Gold',
        price: '750 - 900',
        image: require('../../assets/image/sedan1.jpg'),
        description: 'Full Car exterior body Shampoo and Wash',
      },
      {
        id: 4,
        label: 'Premium',
        price: '1300 - 1800',
        image: require('../../assets/image/sedan1.jpg'),
        description: 'Full Car exterior body Shampoo Wash',
      },
      {
        id: 5,
        label: 'Paint Protection ',
        price: '7500 - 10000',
        image: require('../../assets/image/sedan1.jpg'),
        description: 'Outing body pressure wash',
      },
      {
        id: 6,
        label: 'Ceramic Treatment',
        price: '10000 - 15000',
        image: require('../../assets/image/sedan1.jpg'),
        description: 'Pressure Wash and Shampoo Wash',
      },
    ],
  },
  {
    id: 3,
    label: 'Sub-Compact SUV',
    img: require('../../assets/image/suv.png'),
    typeOfVehicles: [
      {
        id: 1,
        label: 'Quick Wash',
        price: '250 - 350',
        image: require('../../assets/image/suv1.jpg'),
        description: 'Full car shampoo and wash (Exterior only)',
      },
      {
        id: 2,
        label: 'Essential',
        price: '500 - 800',
        image: require('../../assets/image/suv1.jpg'),
        description: 'Full Car exterior body Shampoo and Wash',
      },
      {
        id: 3,
        label: 'Gold',
        price: '750 - 1200',
        image: require('../../assets/image/suv1.jpg'),
        description: 'Full Car exterior body Shampoo and Wash',
      },
      {
        id: 4,
        label: 'Premium',
        price: '1300 - 1800',
        image: require('../../assets/image/suv1.jpg'),
        description: 'Full Car exterior body Shampoo Wash',
      },
      {
        id: 5,
        label: 'Paint Protection ',
        price: '7500 - 10000',
        image: require('../../assets/image/suv1.jpg'),
        description: 'Outing body pressure wash',
      },
      {
        id: 6,
        label: 'Ceramic Treatment',
        price: '10000 - 15000',
        image: require('../../assets/image/suv1.jpg'),
        description: 'Pressure Wash and Shampoo Wash',
      },
    ],
  },
  {
    id: 4,
    label: '7 Seater SUV/MUV',
    img: require('../../assets/image/7suv.png'),
    typeOfVehicles: [
      {
        id: 1,
        label: 'Quick Wash',
        price: '300 - 400',
        image: require('../../assets/image/7suv1.jpg'),
        description: 'Full car shampoo and wash (Exterior only)',
      },
      {
        id: 2,
        label: 'Essential',
        price: '700 - 1200',
        image: require('../../assets/image/7suv1.jpg'),
        description: 'Full Car exterior body Shampoo and Wash',
      },
      {
        id: 3,
        label: 'Gold',
        price: '800 - 1300',
        image: require('../../assets/image/7suv1.jpg'),
        description: 'Full Car exterior body Shampoo and Wash',
      },
      {
        id: 4,
        label: 'Premium',
        price: '2000 - 2500',
        image: require('../../assets/image/7suv1.jpg'),
        description: 'Full Car exterior body Shampoo Wash',
      },
      {
        id: 5,
        label: 'Paint Protection ',
        price: '7500 - 10000',
        image: require('../../assets/image/7suv1.jpg'),
        description: 'Outing body pressure wash',
      },
      {
        id: 6,
        label: 'Ceramic Treatment',
        price: '10000 - 15000',
        image: require('../../assets/image/7suv1.jpg'),
        description: 'Pressure Wash and Shampoo Wash',
      },
    ],
  },
  {
    id: 5,
    label: 'Luxury/Premium',
    img: require('../../assets/image/luxury.png'),
    typeOfVehicles: [
      {
        id: 1,
        label: 'Quick Wash',
        price: '500 - 700',
        image: require('../../assets/image/luxury1.jpg'),
        description: 'Full car shampoo and wash (Exterior only)',
      },
      {
        id: 2,
        label: 'Essential',
        price: '1500 - 1700',
        image: require('../../assets/image/luxury1.jpg'),
        description: 'Full Car exterior body Shampoo and Wash',
      },
      {
        id: 3,
        label: 'Gold',
        price: '1800 - 2000',
        image: require('../../assets/image/luxury1.jpg'),
        description: 'Full Car exterior body Shampoo and Wash',
      },
      {
        id: 4,
        label: 'Premium',
        price: '2200 - 3000',
        image: require('../../assets/image/luxury1.jpg'),
        description: 'Full Car exterior body Shampoo Wash',
      },
      {
        id: 5,
        label: 'Paint Protection ',
        price: '7500 - 10000',
        image: require('../../assets/image/luxury1.jpg'),
        description: 'Outing body pressure wash',
      },
      {
        id: 6,
        label: 'Ceramic Treatment',
        price: '10000 - 15000',
        image: require('../../assets/image/luxury1.jpg'),
        description: 'Pressure Wash and Shampoo Wash',
      },
    ],
  },
];

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ProductListResponse {
  products: Product[];
}

const HomeScreen = ({navigation}: any) => {
  const [searchResult, setSearchResult] = useState<ProductListResponse>();
  const [searchText, setSearchText] = useState('');
  const [initialIndex, setInitialIndex] = useState(0);
  const [typeOfVehicles, setTypeOfVehicles] = useState(
    carTypes[0]?.typeOfVehicles,
  );
  const [selectedCarType, setSelectedCarType] = useState(carTypes[0]);

  const searchItem = (inputText: string) => {
    fetch(
      'https://dummyjson.com/products/search?q=' +
        inputText?.toLocaleLowerCase(),
    )
      .then(res => res.json())
      .then(json => setSearchResult(json))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if (searchText?.length) {
      let timer = setTimeout(() => searchItem(searchText), 2000);
      return () => clearTimeout(timer);
    }
  }, [searchText]);

  const addPost = () => {
    setSearchResult(undefined);
    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: 'I am in love with someone.',
        userId: 5,
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .then(console.log);
  };

  const handleCarTypeSelection = (carType: any) => {
    setSelectedCarType(carType);
    setTypeOfVehicles(carType.typeOfVehicles);
  };

  // Render carousel items
  const renderCarouselItem = ({item, index}: {item: any; index: number}) => {
    return (
      <View style={styles.carouselItemContainer}>
        <Image source={item.image} style={styles.carouselImage} />
        <Text style={styles.carouselTitle}>{item.title}</Text>
        <Text style={styles.carouselDescription}>{item.description}</Text>
      </View>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerText}>Carzorro</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Where to?"
            placeholderTextColor="#000"
            onChangeText={val => setSearchText(val)}
          />
          <Image
            style={styles.searchImage}
            resizeMode="cover"
            source={require('../../assets/image/search.png')}
          />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>
            Looking for Car Wash? Choose a Plan
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.carTypesContainer}>
            {carTypes.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() => handleCarTypeSelection(item)}>
                <View style={styles.carTypeItem}>
                  <Image
                    style={styles.carTypeImage}
                    resizeMode="contain"
                    source={item.img}
                  />
                  <Text style={styles.carTypeLabel}>{item.label}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {selectedCarType && (
          <View style={styles.selectedCarTypeContainer}>
            <Image
              style={styles.selectedCarTypeImage}
              resizeMode="contain"
              source={selectedCarType.img}
            />
            <Text style={styles.selectedCarTypeLabel}>
              {selectedCarType.label}
            </Text>
          </View>
        )}

        <View style={styles.vehicleContainer}>
          {typeOfVehicles.map(item => (
            <View key={item?.id} style={styles.vehicleItem}>
              <Image
                style={styles.vehicleImage}
                resizeMode="cover"
                source={item?.image}
              />
              <Text style={styles.vehicleLabel}>{item.label}</Text>
              <Text style={styles.priceLabel}>{item.price}</Text>
              <Text style={styles.vehicleDescription}>{item.description}</Text>
            </View>
          ))}
        </View>
      </View>

      {searchResult?.products?.length && (
        <View style={styles.searchResultsContainer}>
          {searchResult?.products?.map((item: Product, index: number) => (
            <TouchableOpacity key={index} onPress={addPost}>
              <View style={styles.searchResultItem}>
                <Text style={styles.searchResultText}>{item?.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  content: {
    flex: 1,
    marginBottom: 40,
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
  carTypesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    gap: 20,
  },
  carTypeItem: {
    height: 120,
    borderRadius: 20,
    width: deviceWidth / 3,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
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
  selectedCarTypeContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  selectedCarTypeImage: {
    width: 100,
    height: 100,
  },
  selectedCarTypeLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  vehicleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  vehicleItem: {
    width: '45%',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  vehicleImage: {
    width: '100%',
    height: 100,
    borderRadius: 20,
  },
  vehicleLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
  priceLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
  vehicleDescription: {
    fontSize: 12,
    color: '#555',
    alignSelf: 'center',
    textAlign: 'center',
  },
  searchResultsContainer: {
    position: 'absolute',
    top: 150,
    backgroundColor: 'white',
    width: deviceWidth - 20,
    paddingBottom: 50,
  },
  searchResultItem: {
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 0.2,
    borderColor: 'grey',
  },
  searchResultText: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '600',
  },
});

export default HomeScreen;
