/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Picker,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Card} from 'react-native-elements';
import {background_color} from '../color';
const {width, height} = Dimensions.get('window');

export default class CreateScholarScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    headerTitle: 'Thông tin học bổng ',
    headerRight: (
      <Text
        style={{
          color: '#fff',
          marginRight: 16,
          fontWeight: 'bold',
          fontSize: 24,
        }}>
        Tạo
      </Text>
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{marginHorizontal: 16, marginTop: 8}}>
            <Text fontSize={20}>Tên học bổng</Text>
            <TextInput
              style={{
                height: 40,
                fontSize: 16,
                paddingLeft: 8,
                backgroundColor: '#fff',
                marginVertical: 8,
                borderColor: '#000',
                borderWidth: 1,
              }}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={{marginHorizontal: 16}}>
            <Text fontSize={20}>Loại học bổng</Text>
            <View
              style={{
                borderColor: '#000',
                marginVertical: 8,
                borderWidth: 1,
                backgroundColor: '#fff',
              }}>
              <Picker style={{height: 40}}>
                <Picker.Item label="Loại học bổng" value="java" />
                <Picker.Item label="Học bổng toàn phần" value="js" />
                <Picker.Item label="Học bổng bán phần" value="js" />
              </Picker>
            </View>
          </View>
          <View style={{marginHorizontal: 16}}>
            <Text fontSize={20}>Giá trị</Text>
            <TextInput
              style={{
                height: 40,
                fontSize: 16,
                paddingLeft: 8,
                backgroundColor: '#fff',
                marginVertical: 8,
                borderColor: '#000',
                borderWidth: 1,
              }}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={{marginHorizontal: 16}}>
            <Text fontSize={20}>Quốc gia</Text>
            <TextInput
              style={{
                height: 40,
                fontSize: 16,
                paddingLeft: 8,
                backgroundColor: '#fff',
                marginVertical: 8,
                borderColor: '#000',
                borderWidth: 1,
              }}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={{marginHorizontal: 16}}>
            <Text fontSize={20}>Đối tượng</Text>
            <TextInput
              style={{
                height: 40,
                fontSize: 16,
                paddingLeft: 8,
                backgroundColor: '#fff',
                marginVertical: 8,
                borderColor: '#000',
                borderWidth: 1,
              }}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={{marginHorizontal: 16}}>
            <Text fontSize={20}>Chuyên ngành</Text>
            <TextInput
              style={{
                height: 40,
                fontSize: 16,
                paddingLeft: 8,
                backgroundColor: '#fff',
                marginVertical: 8,
                borderColor: '#000',
                borderWidth: 1,
              }}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={{marginHorizontal: 16}}>
            <Text fontSize={20}>Số lượng</Text>
            <TextInput
              style={{
                height: 40,
                fontSize: 16,
                paddingLeft: 8,
                backgroundColor: '#fff',
                marginVertical: 8,
                borderColor: '#000',
                borderWidth: 1,
              }}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={{marginHorizontal: 16}}>
            <Text fontSize={20}>Yêu cầu khác</Text>
            <TextInput
              style={{
                height: 40,
                fontSize: 16,
                paddingLeft: 8,
                backgroundColor: '#fff',
                marginVertical: 8,
                borderColor: '#000',
                borderWidth: 1,
              }}
              underlineColorAndroid="transparent"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: background_color,
    display: 'flex',

    flex: 0,
  },
});
