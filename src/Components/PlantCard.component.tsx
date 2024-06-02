import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const PlantCard = (props: any) => {
  console.log(props?.image, 'Source image');
  const navigation: any = useNavigation();
  return (
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        borderWidth: 1,
      }}
      onPress={() => {
        navigation.navigate('DetailsScreen', {data: props?.data});
      }}>
      <View style={{backgroundColor: '#9CE5CB', padding: 24}}>
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{props?.name}</Text>
          <Text style={{fontSize: 14, color: 'blue'}}>{props?.category}</Text>
        </View>
        <View style={{flexDirection: 'row', paddingTop: 24, marginBottom: 4}}>
          <Text>${props?.price}</Text>
          <Image
            source={{uri: props?.image}}
            style={{
              width: 48,
              height: 48,
              borderWidth: 1,
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlantCard;

const styles = StyleSheet.create({});
