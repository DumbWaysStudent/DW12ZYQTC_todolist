import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';

import {
    Button,
    Icon,
    CheckBox
} from 'native-base';


export default class Note extends Component {

    constructor() {
        super();
        this.state = {
            noteArray: [
                {
                    id: 0,
                    task: "work",
                    isDone: false
                },
                {
                    id: 1,
                    task: "swim",
                    isDone: false
                },
                {
                    id: 2,
                    task: "study",
                    isDone: false
                },
                {
                    id: 3,
                    task: "sleep",
                    isDone: false
                },
                {
                    id: 4,
                    task: "run",
                    isDone: false
                },
            ],
            text: ''
        }
    }

    _handleAddButton = () => {
        if (this.state.text != '') {
            let newTaskName = this.state.text
            let id = this.state.noteArray.length + 1
            const inputBaru = { "id": id, "task": newTaskName }
            this.setState({ noteArray: [...this.state.noteArray, inputBaru], text: '' })
        } else {
            alert("Task tidak boleh kosong")
        }
    }

    _delButton = (taskDiHapus) => {
        const { noteArray } = this.state
        const filterCek = noteArray.filter(function (list) { return list.id != taskDiHapus.id })
        this.setState({ noteArray: filterCek })
    }

    _handlePressCheckBox = (checkList) => {
        const { noteArray } = this.state
        let checkedItem = noteArray.find(list => checkList.id === list.id)
        if (checkedItem) {
            checkedItem.isDone = !checkList.isDone
            this.setState([...noteArray])
        }
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
                                <View style={styles.checkboxList}>
                                    <CheckBox checked={list.isDone} onPress={() => this._handlePressCheckBox(list)} />
                                </View>
                                <Text style={styles.fontNote}>{list.task}</Text>
                                <Icon onPress={() => this._delButton(list)} style={styles.iconTrash} name="trash" />
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
        justifyContent: "space-between",
        flexDirection: "row"
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
    },
    iconTrash: {
        paddingRight: 10,
        paddingTop: 10,
        color: 'red'
    },
    checkboxList: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 12
    }

})





