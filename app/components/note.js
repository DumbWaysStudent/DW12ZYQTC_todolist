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
    CheckBox,
    Right
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
            text: '',
            id: '',
            editText: '',
            edit: false
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

    _handleEditList = (newEditData) => {
        const { noteArray } = this.state
        let id = noteArray.indexOf(newEditData)
        this.setState({ edit: newEditData.task, edit: true, id: id })
    }

    _handleChangeEdit = () => {
        const { noteArray, id, editText } = this.state
        noteArray[id].task = editText
        this.setState([...noteArray])
        this.setState({ text: '', edit: false, editText: '' })
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.edit ?
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputText}
                            value={this.state.editText}
                            onChangeText={text => this.setState({ editText: text })}
                        />
                        <Button
                            onPress={() => this._handleChangeEdit()}
                            style={styles.btnAdd}>
                            <Text>Change</Text>
                        </Button>
                    </View> :
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputText}
                            value={this.state.text}
                            placeholder="New Todo"
                            onChangeText={text => this.setState({ text })}
                        />
                        <Button
                            onPress={() => this._handleAddBtn()}
                            style={styles.btnAdd}>
                            <Text>Add</Text>
                        </Button>
                    </View>
                }

                <View>
                    {this.state.noteArray.map(list => {
                        return (
                            <View key={list.id} style={styles.listNote}>
                                <View style={styles.checkboxList}>
                                    <CheckBox checked={list.isDone} onPress={() => this._handlePressCheckBox(list)} />
                                    <Text style={styles.fontNote}>{list.task}</Text>
                                </View>
                                <View style={styles.iconContainer}>
                                    <Icon onPress={() => this._handleEditList(list)}
                                        style={styles.iconEdit} name="create" />
                                    <Icon onPress={() => this._delButton(list)} style={styles.iconTrash} name="trash" />
                                </View>
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
        padding: 20
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
        color: 'red'
    },
    checkboxList: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconEdit: {
        color: 'green',
        right: 8
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 10,
        paddingTop: 20,
    }
})





