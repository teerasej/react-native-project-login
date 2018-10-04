import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import {
  Card,
  CardItem,
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Form,
  Item,
  Input
} from "native-base";

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      loading: true
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }
  

  showAlert = () => {
    Alert.alert(`${this.state.username} is signing in with password: ${this.state.password}`);
  }

  updateUsername = (text) => {
    this.setState({
      username: text
    });
  }

  updatePassword = (text) => {
    this.setState({
      password: text
    });
  }

  render() {

    if (this.state.loading) {
      return <Expo.AppLoading />;
    }

    return (
      <Container>
        <Header>
          <Body>
            <Title>My App</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" onChangeText={text => this.updateUsername(text)}/>
            </Item>
            <Item last>
              <Input secureTextEntry={true} placeholder="Password" onChangeText={text => this.updatePassword(text)}/>
            </Item>
          </Form>
          <Button block onPress={this.showAlert}>
            <Text>Sign In</Text>
          </Button>
          <Text>{this.state.username}</Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 20
  }
});
