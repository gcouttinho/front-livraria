// IMPORTANDO A NAVEGAÇÃO
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


import Login from "./screens/Login";
import CreateUser from "./screens/CreateUser"
import FeedBooks from "./screens/FeedBook"
import DetailBook from "./screens/DetailsBook";
import { colors } from "./styles/variables";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        /* 
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            color: colors.dark2,
            backgroundColor: 'red',
          }, */
        
      >
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            title: "FAÇA SEU LOGIN OU CRIE UMA CONTA",
            headerStyle: {
              backgroundColor: colors.light3,
            },
          }}
        />
        <Stack.Screen
          name='FeedBooks'
          component={FeedBooks}
        />
        <Stack.Screen
          name='DetailBook'
          component={DetailBook}
        />
        <Stack.Screen
          name='CreateUser'
          component={CreateUser}
          options={{
            title: "CRIE SUA CONTA",
            headerStyle: {
              backgroundColor: colors.light3,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

