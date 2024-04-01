import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';

const FileList = ({ surahNames, surahDetails }) => {
    const handlePress = (surahName) => {
      const surahDetail = surahDetails.find(detail => detail.name === surahName);
      if (surahDetail) {
        Alert.alert(surahName, surahDetail.detail);
      }
    };


    return (
        <View style={styles.container}>
            <FlatList
                data={surahNames}
                keyExtractor={(item) => item.english}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handlePress(item.english)}>
                    <View style={styles.searchContainer}>
                      <View style={styles.searchContent}>
                        <View style={styles.searchHeader}>
                          <Text style={styles.engName}>{item.english}</Text>
                          <Text style={styles.arabName}>{item.arabic}</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
            />

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 16,
    },
    searchContainer: {
        flexDirection: 'row',
        marginRight: 16,
        marginLeft: 16,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#1287c5',
        alignItems: 'center',
        justifyContent: 'center',

    },
    searchContent: {
        flex: 5,
        borderBottomWidth: 0,
        marginLeft: 16,
        marginBottom: 13,
        paddingBottom: 16,
    },
    searchHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
        marginTop: 4,

    },
    engName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    arabName: {
        fontSize: 12,
        color: 'purple',
        fontWeight: 'bold',
    },

});

export default FileList;