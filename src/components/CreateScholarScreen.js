/* eslint-disable react-native/no-inline-styles */
import ImagePicker from 'react-native-image-picker';

import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Picker,
  Button,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Card} from 'react-native-elements';
import {background_color} from '../color';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');
const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default class CreateScholarScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  /**
   * The first arg is the options object for customization (it can also be null or omitted for default options),
   * The second arg is the callback which sends object: response (more info in the API Reference)
   */

  static navigationOptions = {
    headerTitle: 'Thông tin học bổng ',
    headerRight: (
      <Text
        style={{
          color: '#fff',
          marginRight: 16,
          fontWeight: 'bold',
          fontSize: 20,
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
                marginBottom: 16,
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
                marginBottom: 16,
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
          </View>
          <View style={{marginHorizontal: 16, flexDirection: 'row'}}>
            <TextInput
              style={{
                height: 40,
                fontSize: 16,
                paddingLeft: 8,
                backgroundColor: '#fff',
                marginVertical: 8,
                borderColor: '#000',
                borderWidth: 1,
                marginBottom: 16,
                flex: 2,
              }}
              underlineColorAndroid="transparent"
            />
            <View
              style={{
                borderColor: '#000',
                marginVertical: 8,
                borderWidth: 1,
                backgroundColor: '#fff',
                marginBottom: 16,
                flex: 1,
                marginLeft: 8,
              }}>
              <Picker style={{height: 36}}>
                <Picker.Item label="Đơn vị" value="java" />
                <Picker.Item label="USD" value="js" />
                <Picker.Item label="VND" value="js" />
              </Picker>
            </View>
          </View>
          <View style={{marginHorizontal: 16}}>
            <Text fontSize={20}>Quốc gia</Text>
            <View
              style={{
                borderColor: '#000',
                marginVertical: 8,
                borderWidth: 1,
                backgroundColor: '#fff',
                marginBottom: 16,
              }}>
              <Picker style={{height: 40}}>
                <Picker.Item label="Quốc gia" value="java" />
                <Picker.Item label="Mỹ" value="js" />
                <Picker.Item label="Việt Nam" value="js" />
              </Picker>
            </View>
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
                marginBottom: 16,
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
                marginBottom: 16,
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
                marginBottom: 16,
              }}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={{marginHorizontal: 16}}>
            <Text fontSize={20}>Mô tả</Text>
            <TextInput
              style={{
                height: 40,
                fontSize: 16,
                paddingLeft: 8,
                backgroundColor: '#fff',
                marginVertical: 8,
                borderColor: '#000',
                borderWidth: 1,
                marginBottom: 16,
              }}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={{marginHorizontal: 16}}>
            <Text fontSize={20}>Thủ tục</Text>
            <TextInput
              style={{
                height: 40,
                fontSize: 16,
                paddingLeft: 8,
                backgroundColor: '#fff',
                marginVertical: 8,
                borderColor: '#000',
                borderWidth: 1,
                marginBottom: 16,
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
                marginBottom: 16,
              }}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={{marginHorizontal: 16, marginBottom: 16}}>
            <Button
              title="Chọn hình ảnh"
              style={{
                height: 40,
                fontSize: 16,
                paddingLeft: 8,
                backgroundColor: '#fff',
                marginVertical: 8,
                borderColor: '#000',
                borderWidth: 1,
                marginBottom: 16,
              }}
              onPress={() =>
                ImagePicker.showImagePicker(options, response => {
                  console.log('Response = ', response);

                  if (response.didCancel) {
                    console.log('User cancelled image picker');
                  } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                  } else if (response.customButton) {
                    console.log(
                      'User tapped custom button: ',
                      response.customButton,
                    );
                  } else {
                    const source = {uri: response.uri};

                    // You can also display the image using data:
                    // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                    this.setState({
                      avatarSource: source,
                    });
                  }
                })
              }
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
