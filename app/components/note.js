import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default class Note extends Component {

    constructor() {
        super();
        this.state = {
            noteArray: [
                {
                    id: 0,
                    task: "work",
                },
                {
                    id: 1,
                    task: "swim",
                },
                {
                    id: 2,
                    task: "study",
                },
                {
                    id: 3,
                    task: "sleep",
                },
                {
                    id: 4,
                    task: "run"
                },
            ]
        }
    }

    render() {
        return (

            <View>
                {this.state.noteArray.map(list => {
                    return (
                        <View key={list.id} style={styles.listNote}>
                            <Text style={styles.fontNote}>{list.task}</Text>
                        </View>
                    )
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listNote: {
        borderWidth: 1,
        alignItems: "flex-start",
        justifyContent: "center"
    },
    fontNote: {
        fontSize: 20,
        padding: 10
    }
})





