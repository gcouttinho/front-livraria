
// IMPORTAÇÕES DO DRAWER MENU

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from "@react-navigation/drawer";

// IMPORTAÇÕES DE TELAS

import FeedBook from '../screens/FeedBook';
import TelaDrawer1 from '../screens/TelaDrawer1';
import TelaDrawer2 from '../screens/TelaDrawer2';
import TelaDrawer3 from '../screens/TelaDrawer3';
import TelaDrawer4 from '../screens/TelaDrawer4';

// CRIAÇÃO DO DRAWER MENU

const Drawer = createDrawerNavigator();

// CRIAÇÃO DO COMPONENTE DRAWER MENU

export default function MyDrawer() {
    return (
        <Drawer.Navigator
            initialRouteName="FeedBook"
        >
            <Drawer.Screen
                name="FeedBook"
                component={FeedBook}
                options={
                    {
                        title: 'Feed de Livros',
                    }
                }
            />
            <Drawer.Screen
                name="TelaDrawer1"
                component={TelaDrawer1}
                options={
                    {
                        title: 'Tela 1',
                    }
                }
            />
            <Drawer.Screen
                name="TelaDrawer2"
                component={TelaDrawer2}
                options={
                    {
                        title: 'Tela 2',
                    }
                }
            />
            <Drawer.Screen
                name="TelaDrawer3"
                component={TelaDrawer3}
                options={
                    {
                        title: 'Tela 3',
                    }
                }
            />
            <Drawer.Screen
                name="TelaDrawer4"
                component={TelaDrawer4}
                options={
                    {
                        title: 'Tela 4',
                    }
                }
            />
        </Drawer.Navigator>
    );
}
