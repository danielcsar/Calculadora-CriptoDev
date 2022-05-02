# Cartao de Estacionamento - Front-end

Front-end do projeto desenvolvido em React para Prefeitura Municipal de Teresópolis para criação e utilização de Cartões de Estacionamento para idosos e Pessoas com Deficiência - PcD.

## Como Rodar

### Pré-requisitos

- [Nodejs](https://nodejs.org/en/) (v16 ou superior)
- [Yarn](https://yarnpkg.com/)

### Configurando o projeto

```bash
# Em 'src\service\api.js', altere a baseURL para o endereço da API
$ baseURL: "url_desejada"
# Caso deseje rodar o projeto em uma porta diferente da 3000.
# Vá em 'package.json' e altere o script 'start' para a porta desejada. Ex.: porta 3333
$ "start": "PORT=3333 react-scripts start"
```

### Rodando o projeto

Na raiz do projeto execute os seguintes comandos:

```bash
# Instalando dependências
$ yarn
# Rodando o projetos
$ yarn start
```

## Projetos relevantes utilizados

- Construção de formulários - [formik](https://formik.org/)
- Consumo de APIs - [axios](https://axios-http.com/)
- Conversor de HTML para imagem - [dom-to-image](https://github.com/tsayen/dom-to-image)
- Estilização - [styled-components](https://styled-components.com/)
- Gerador de QRCode - [react-qr-code](https://github.com/rosskhanas/react-qr-code)
- Leitor de QRCode - [react-qr-reader](https://github.com/JodusNodus/react-qr-reader)
- Manipulação de JWT - [jwt-decode](https://github.com/auth0/jwt-decode)
- Validação de formulários - [yup](https://github.com/jquense/yup)
- Vlibras - [vlibras-react](https://github.com/cassiomaciell/vlibras-react)

## Limitações conhecidas

- O leitor de QR Code funciona apenas em navegadores baseados no Chromium e Safari(iOS).

## Preview

Confira [aqui](https://pmt-emissao-cartoes.herokuapp.com/) um preview do site.

## Desenvolvedores

Daniel         | Erick          | Lucas          | Pedro          |
-------------- | -------------- | -------------- | -------------- |
<a href="https://www.linkedin.com/in/danielcsar/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>| <a href="https://www.linkedin.com/in/erickfpc/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>| <a href="https://www.linkedin.com/in/lucasvihuchibraga/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>| <a href="https://www.linkedin.com/in/pedro-mendes-1ba551215/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>|
