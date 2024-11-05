# Projeto InScreening - Documentação

O projeto proposto visa criar uma plataforma para triagem hospitalar. Inicialmente, o paciente confirma suas informações e escolhe um hospital da plataforma. Em seguida, ele reporta seus sintomas, 
podendo escolher opções predefinidas. Pacientes com sintomas sugestivos de COVID-19 ou pneumonia são encaminhados para exames de raio-x. O exame é conduzido por profissionais de saúde designados pelo hospital, 
com as imagens sendo analisadas por um modelo de IA em busca de sinais das doenças. Caso uma dessas doenças seja identificada, o paciente é classificado como prioridade alta, garantindo um atendimento mais rápido

<br>

### Apresentação dos Integrantes

#### João Vito Santiago da Silva - RM86293 
#### Marco Antônio de Araújo - RM550128 
#### Vinícius Andrade Lopes - RM99343 
#### Leonardo Bruno de Sousa - RM552408

<br>


#

### Requisições Ativas:

#### GET na página "TriagemHome" - Exibe o nome do paciente na tela ao logar
#### GET na página "MeusDados" - Exibe os dados do paciente na tela
#### GET na página "AcompanharTriagem" - Exibe os dados da triagem de um paciente na tela

#### POST na página "Register" - Cadastra os dados do paciente no firestore
#### POST na página "Login" - Loga com os dados do paciente no firestore
#### POST na página "NovaTriagem" - Realiza uma triagem

#### PUT na página "AlterarCEP" - Altera os dados do cep do paciente no firestore
#### PUT na página "AlterarRG" - Loga com os dados do rg do paciente no firestore
