## Configurando o serviço

O serviço de autenticação tem algumas variáveis de ambiente que precisam ser configuradas em um arquivo .env aqui mesmo nesse diretório.

 - DATABASE: Para configurar a string de conexão do banco de dados da aplicação
 - EMAIL_PWD: Senha do email utilizado para envio do código de  confirmação (second factor auth)
 - EMAIL_LOGIN: Email a ser utilizado para envio do código de  confirmação (second factor auth)
 - SECRET: Chave para gerar token JWT utilizado na autenticação