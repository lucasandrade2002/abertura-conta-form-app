import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from '../../assets/stylesheet';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Switch } from 'react-native-switch';

export default class Form extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: '',
            idade: 0,
            genero: 'Opção',
            limiteEscolhido: 0,
            valorEstudante: false
        }

        this.displayInfo = this.displayInfo.bind(this)
    }

    displayInfo(){
        if (this.state.nome === '') return alert('Preencha o campo nome!');
        if (this.state.idade === 0) return alert('Preencha o campo idade!');
        if (this.state.genero === 'Opção') return alert('Preencha o campo genero!');
        if (this.state.limiteEscolhido === 0) return alert('Defina um limite maior que 0 e menor ou igual a 500!');

        return alert(
            `Nome: ${this.state.nome}\nIdade: ${this.state.idade}\nGênero: ${this.state.genero}\nLimite definido: ${this.state.limiteEscolhido}\nÉ estudante? ${this.state.valorEstudante}`
        )      
    }

    render(){
        let sexo = ['Opção', 'Masculino', 'Feminino']

        return(
            <View>
                <TextInput 
                    style={styles.formInput} 
                    placeholder='Nome'
                    onChangeText={(text) => this.setState({nome: text})}
                ></TextInput>

                <TextInput 
                    style={styles.formInput} 
                    placeholder='Idade'
                    onChangeText={(value) => this.setState({idade: value})}
                ></TextInput>

                <Text style={styles.titleText}>
                    Selecione seu gênero:
                </Text>

                <Picker 
                    style={{ marginLeft: 5 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({genero: sexo[itemIndex]})}
                >
                    {sexo.map((item, idx) => <Picker.Item key={idx} value={idx} label={item}/>)}
                </Picker>

                <Text style={styles.titleText}>
                    Limite da conta:
                </Text>

                <Slider 
                    style={{ marginTop: 20, marginLeft: 5 }}
                    minimumValue={0}
                    maximumValue={500}
                    value={this.state.limiteEscolhido}
                    onValueChange={(valorSlider) => this.setState({limiteEscolhido: valorSlider})}
                />
                <Text style={{ marginTop: 10, marginLeft: 20}}>
                    Limite para análise de crédito: R$ {this.state.limiteEscolhido.toFixed(2)}
                </Text>

                <Text style={styles.titleText}>
                    É estudante?
                </Text>

                <View style={{ marginLeft: 25, marginTop: 20 }}>
                    <Switch
                        value={this.state.valorEstudante}
                        onValueChange={(valorSelecionado) => this.setState({valorEstudante: valorSelecionado})} 
                    />
                </View>

                <TouchableOpacity 
                    style={styles.btnSubmit}
                    onPress={this.displayInfo}>
                    <Text 
                    style={{ textAlign: 'center', color: '#fff', fontSize: 20 }}>
                        Abrir conta
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}