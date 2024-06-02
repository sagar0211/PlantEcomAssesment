import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import PlantCard from '../Components/PlantCard.component';
import axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';

const LandingScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const url = 'https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q';
    await axios
      .get(url)
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error, 'ERROR Block');
        setLoading(false);
      });
  };

  return loading ? (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{textAlign: 'center'}}>Loading</Text>
    </View>
  ) : (
    <ScrollView style={{flex: 1, padding: 24}}>
      {data?.map((item: any, index: Number) => (
        <PlantCard
          name={item.name}
          category={item?.category}
          price={item?.price}
          image={item?.image}
          data={item}
        />
      ))}
    </ScrollView>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({});
