// IMPORTANDO A NAVEGAÇÃO
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


import Login from "./src/screens/Login";
import CreateUser from "./src/screens/CreateUser"
import FeedBooks from "./src/screens/FeedBook"
import DetailBook from "./src/screens/DetailsBook";
import DrawerMenu from "./src/DrawerMenu/DrawerMenu";
import { colors } from "./src/styles/variables";

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
        <Stack.Screen
          name='DrawerMenu'
          component={DrawerMenu}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

