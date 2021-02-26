import React from 'react';
import { View, StyleSheet } from 'react-native';

import { 
    Avatar, Title, Caption, Paragraph, Drawer
 } from "react-native-paper";

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props){
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://image.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg'
                                }}
                                size={50}
                            />
                        </View>
                        <View style={{marginLeft:15, flexDirection:'column'}}>
                            <Title style={styles.title}>John Doe</Title>
                            <Caption style={styles.caption}>@j_doe</Caption>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                            <Caption style={styles.caption}>Following</Caption>
                        </View>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                            <Caption style={styles.caption}>Followers</Caption>
                        </View>
                    </View>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="home-outline" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Home"
                        onPress={() => {}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="book-open-outline" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Conteudos"
                        onPress={() => {}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="book-outline" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Trabalhos"
                        onPress={() => {}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="file-outline" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Avaliações"
                        onPress={() => {}}
                    />
                </Drawer.Section>

                <Drawer.Section title="Propriedades" style={styles.drawerSection}>
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="cog-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label="Settings"
                        onPress={() => {}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="bell-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label="Notifications"
                        onPress={() => {}}
                    />
                </Drawer.Section>

            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon 
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={()=>{}}
                />
            </Drawer.Section>

        </View>
    );
}
const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
      flexDirection: 'row',
      marginTop: 15
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 20
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
});