import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';

import {
    Button,
} from 'native-base';


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
            ],
            text: ''
        }
    }

    _handleAddButton = () => {
        let newTaskName = this.state.text
        let id = this.state.noteArray.length + 1
        const inputBaru = { "id": id, "task": newTaskName }
        this.setState({ noteArray: [...this.state.noteArray, inputBaru], text: '' })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputText}
                        value={this.state.text}
                        placeholder="Add new task"
                        onChangeText={text => this.setState({ text })} />

                    <Button onPress={() => this._handleAddButton()} style={styles.btnAdd}><Text>Add</Text></Button>
                </View>

                <View>
                    {this.state.noteArray.map(list => {
                        return (
                            <View key={list.id} style={styles.listNote}>
                                <Text style={styles.fontNote}>{list.task}</Text>
                            </View>
                        )
                    })}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    listNote: {
        borderWidth: 1,
        alignItems: "flex-start",
        justifyContent: "center"
    },
    fontNote: {
        fontSize: 20,
        padding: 10
    },
    inputContainer: {
        flexDirection: "row",
        paddingBottom: 20,
        justifyContent: "space-between"
    },
    inputText: {
        width: "73%",
        borderWidth: 1,
        paddingRight: 10,
        height: 40
    },
    btnAdd: {
        width: "25%",
        justifyContent: "center",
        height: 40,
        backgroundColor: "#a8ff41"
    }
})





