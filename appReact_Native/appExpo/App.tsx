import React from 'react';
import { View, Text, Button } from 'react-native';

const MeuComponente = () => {
  const funcao1 = () => {
    // Lógica da primeira função
    console.log('Função s1 foi chamada');
  };

  const funcao2 = () => {
    // Lógica da sda função
    console.log('Função a2 foi chamada');
  };

  return (
    <View>
      <Text>Componente com duas funções</Text>
      <Button title="Chamar Função 1" onPress={funcao1} />
      <Button title="Chamar Função 2" onPress={funcao2} />
    </View>
  );
};

export default MeuComponente;



enum Cor{
  azul, preto, branco, vermelho
}

interface dados{
  placa: string;
  vidro: string;
}

abstract class Name {
  constructor() {
    let nome: string = 'nome';
    let idade: number = 0;
  }
}

class sas{
  
}

class Pessoas extends Name{
  private nome: string = '';
  private idade: number = 0;
  
  velucidade(nome: string){
    this.nome = nome;
  }
}

function velocidade(){
  let name: string;


}

let dados = () => {

}

/*
PROVA_______________________________________________________________________
  memoriasss
  soma binariassss
  conversão de decimal pra binariosss
  decimal pra hexadecimal
  notação cientifica de binarios
  ponto flutuante e coisas
  converter pra binario, cientifica e coloca em flutuante
*/