import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DetailsScreen = (props: any) => {
  const data = props?.route?.params?.data;
  return (
    <View style={{padding: 24}}>
      <Text style={{fontSize: 32, color: '#000000'}}>Bio</Text>
      <Text>{data?.bio}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
