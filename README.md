# Desafio Microserviço de Autenticação

**Qual foi a proposta?** 

Requisitos funcionais

 - O microserviço AUTHENTICATION deve ter a opção de 2-factor authentication por pelo menos 2 canais (Exemplo: e-mail, SMS, aplicativo) 

 - O microserviço MOCK deve ter implementado um CRUD (de qualquer coisa) Todos os endpoints do MOCK devem ser autenticados 

Requisitos não-funcionais

 - Deve estar no padrão REST
 - Deve estar rodando em pelo menos 2 ambientes (Local Development e Production)
 - Deve ter a documentação de como rodar localmente e de como rodar os ambientes em production
 - Todos os serviços devem funcionar com Docker
 - Deve estar na mesma Codebase
 - Deve ter CI/CD
 - Desejável ter a documentação da API em SWAGGER

**Como ficou o projeto**

Os serviços escritos com a NodeJS + Express + MongoDB.
Dentro de cada diretório do serviço tem um README para auxiliar a configuração.

Foi criado um ambiente de staging no Heroku para deploy logo é possível consumir os serviços pelos endereços https://gptw-authenticate.herokuapp.com/ e https://gptw-mock.herokuapp.com/ assim como conferir as suas respectivas documentações no SwaggerUI https://gptw-mock.herokuapp.com/docs e https://gptw-mock.herokuapp.com/docs.

Para o projeto em produção funcionar foi feita integração com banco MongoDB através do Atlas

**Como ele funciona?**

O serviço de autenticação(`authenticate`) possui a premissa de autenticar o usuário, conceder um token de autorização e validar se um token é válido. Ao consumir o recurso authenticate o usuário irá receber um email com código de acesso temporário para então consumir o recurso authenticate e receber se token.

Em posse do token o usuário poderá consumir livremente o serviço de CRUD de usuários(`mock`)


**Como fazer ele funcionar?**

Após fazer download do repositório na sua máquina você precisa instalar as dependencias de cada serviço:

```
    cd /services/authentication/
    npm install

    cd /services/mock/
    npm install
```
Agora é só executar cada um deles!

```
    cd /services/authentication/
    npm run start

    cd /services/mock/
    npm run start
```

Por padrão eles irão iniciar nas portas 3001 e 3002, respectivamente, mas você pode trocar isso nas configurações de cada um. No README de cada serviço explica melhor as configurações.

**Como podemos melhorar?**

Algumas ideias que poderiam agregar valor ao projeto e que poderiam ser os próximos passos de implementação:

  - Migrar para Typescript e tirar proveito de injeção de dependecias para desacoplar mais as camadas de IO
  - Integrar a função de envio de SMS. Foi desenvolvida a camada que faz a chamada mas não a integração com serviços externos.
