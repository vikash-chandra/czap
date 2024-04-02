import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';

interface OnBoardingType {
  id: number;
  image: ImageSourcePropType;
  heading: string;
  label: string;
}

const onboardingList: OnBoardingType[] = [
  {
    id: 1,
    image: require('../../assets/image/background.jpg'),
    heading: 'Convenient Car Wash Booking',
    label: 'Schedule car washes at your convenience with our app',
  },
  {
    id: 2,
    image: require('../../assets/image/car-wash1.jpg'),
    heading: 'Quality Services',
    label: 'Experience top-notch car cleaning services from professionals',
  },
  {
    id: 3,
    image: require('../../assets/image/car-wash2.jpg'),
    heading: 'Eco-Friendly Solutions',
    label:
      'We use eco-friendly products and techniques for a cleaner environment',
  },
];

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const Welcome = ({navigation}: any) => {
  const [initialIndex, setInitialIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (initialIndex == 2) {
      let timer = setTimeout(() => navigation?.navigate('Home'), 5000);
      return () => clearTimeout(timer);
    }
  }, [initialIndex]);

  const carouselCardItem = ({item}: {item: OnBoardingType}) => {
    return (
      <View style={{flex: 1}}>
        <Image style={styles.image} resizeMode="cover" source={item?.image} />
        <View style={styles.textContainer}>
          <Text style={styles.heading}>{item?.heading}</Text>
          <Text style={styles.label}>{item?.label}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#5D6D7E'}}>
      <Carousel
        layout={'default'}
        ref={carouselRef}
        data={onboardingList}
        renderItem={carouselCardItem}
        sliderWidth={deviceWidth}
        itemWidth={deviceWidth}
        onSnapToItem={(index: number) => setInitialIndex(index)}
        autoplay={true}
        autoplayInterval={10000}
        loop={true}
        loopClonesPerSide={onboardingList.length}
      />
      <Pagination
        dotsLength={onboardingList.length}
        activeDotIndex={initialIndex}
        containerStyle={styles.paginationContainer}
        dotColor={'rgba(255, 255, 255, 0.92)'}
        dotStyle={styles.dot}
        inactiveDotColor={'#fff'}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
    textAlign: 'center',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});
