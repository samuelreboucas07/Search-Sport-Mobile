# Search-Sport-Mobile

* [Sobre](#sobre)

* [Funcionamento](#funcionamento)

* [Principais tecnologias](#principais-tecnologias)

* [Como usar](#como-usar)

* [Observação](#observação)

## Sobre

Este projeto tem como objetivo possiblitar que diferentes pessoas possam criar ou se inscrever em partidias de futebol, gerando interação entre as partes interessadas.
O sistema teve como base a utilização do google maps, o qual possibilitou utilizar o sistema de geolocalização e assim prover aos usuários uma interface mais simples, sempre levando em consideração localização atual dos usuários. 

## Funcionamento
A execução deste projeto está dividida em três partes principais.

O módulo do usuário, o qual permite que o mesmo se cadastre a plicação e realize o login na aplicação.

https://user-images.githubusercontent.com/20310532/133942649-f5d68c2c-9c64-4843-96db-b0c8e0e983f2.mp4

A partir do momento que o usuário esteja logado, o mesmo terá acesso a todas as partidas de futebol que ainda não aconteram, as quais estaram destacadas as que apresentarem uma localização próxima ao usuário no momento do acesso. 


A criação de novas partidas é uma funcionalidade importante, neste momento todas as informações da partida devem ser utilizadas para garantir que os usuários tenham todas as informações necessárias. 

https://user-images.githubusercontent.com/20310532/133942668-5bb074d8-0ddb-4dec-967f-86e35f7d0645.mp4


Esta funcionalidade permite que os usuários vejam as informações das partidas e se inscrevam (caso tenha vaga). 


https://user-images.githubusercontent.com/20310532/133942671-e646f3d2-636d-41c7-a765-5821ef10454a.mp4


## Principais tecnologias

* [React-native](https://reactnative.dev/)
* [Context API](https://pt-br.reactjs.org/docs/context.html)
* [axios](https://axios-http.com/docs/intro)
* [react-native-datepicker](https://www.npmjs.com/package/react-native-datepicker)
* [react-native-maps](https://www.npmjs.com/package/react-native-maps)
* [react-native-paper](https://callstack.github.io/react-native-paper/)
* [moment](https://momentjs.com/)


## Como usar

Inicialmente é necessário clonar o repositório atual:

``` https://github.com/samuelreboucas07/Search-Sport-Mobile.git ```

**Iniciando aplicação** 
```
yarn install 
npx react-native start
npx react-native run-android
```

## Observação

Esta aplicação consumiu uma API a qual está descrita [Aqui](https://github.com/samuelreboucas07/Search-sport-api).
