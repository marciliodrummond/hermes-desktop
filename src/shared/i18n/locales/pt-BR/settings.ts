export default {
  title: "Configurações",
  sections: {
    hermesAgent: "Hermes Agent",
    appearance: "Aparência",
    privacy: "Privacidade",
    credentialPool: "Pool de Credenciais",
  },
  analytics: {
    label: "Enviar dados de uso anônimos",
    hint: "Ajuda a melhorar o app. Enviamos só estatísticas de uso anônimas e agrupadas para o PostHog do projeto (servidores na UE). Você pode desligar quando quiser.",
    disclosure: {
      uuid: "Um código aleatório criado nesta instalação e guardado só neste aparelho (sem nome, e-mail ou dados da sua conta).",
      platform:
        "Seu sistema operacional, versão do Electron e versão do Node.js.",
      navigation:
        "Quais telas você abre no app (ex.: Conversa, Histórico, Configurações). O que você escreve nas conversas, os prompts, as respostas do modelo e o conteúdo dos seus arquivos nunca são coletados.",
      endpoint:
        "Os dados vão para eu.i.posthog.com (nuvem do PostHog na UE). Gravação de tela e captura automática de páginas estão desligadas.",
      notCollected:
        "Nunca coletamos: mensagens das conversas, caminhos de arquivos, chaves de API, configuração do modelo e dados de login.",
    },
  },
  theme: {
    label: "Tema",
    system: "Sistema",
    light: "Claro",
    dark: "Escuro",
  },
  roundedCorners: {
    label: "Cantos arredondados",
    hint: "Desligue para deixar os cantos retos em todo o app",
  },
  font: {
    label: "Fonte",
    manrope: "Manrope",
    system: "Do sistema",
    hint: "Escolha a fonte do app",
  },
  language: {
    label: "Idioma",
    english: "English",
    indonesian: "Indonésio",
    japanese: "日本語",
    spanish: "Español",
    chinese: "中文",
    portuguese: "Português",
    turkish: "Türkçe",
    hint: "Escolha o idioma do app",
  },
  notDetected: "Não detectado",
  updatedSuccessfully: "Tudo certo, atualizado!",
  updateSuccess: "Hermes atualizado com sucesso.",
  updateFailed: "Não foi possível atualizar.",
  version: "v{{version}}",
  proxyPlaceholder: "ex: socks5://127.0.0.1:1080 ou http://proxy:8080",
  modelNamePlaceholder: "ex: anthropic/claude-opus-4.6",
  modelBaseUrlPlaceholder: "http://localhost:1234/v1",
  networkSection: "Rede",
  forceIpv4: "Forçar IPv4",
  forceIpv4Hint:
    "Desliga o IPv6. Ative se a conexão fica caindo por tempo esgotado em algumas redes",
  httpProxy: "Proxy HTTP",
  httpProxyHint:
    "Proxy SOCKS ou HTTP para tudo que o app envia para a internet (deixe em branco para o app descobrir sozinho)",
  saved: "Salvo",
  providerHint:
    "Escolha um provedor ou deixe o app descobrir sozinho a partir da sua chave de API",
  customProviderHint:
    "Use qualquer API compatível com OpenAI (LM Studio, Ollama, vLLM, etc.)",
  modelHint:
    "Modelo que será usado por padrão (deixe em branco para usar o modelo padrão do provedor)",
  refreshModels: "Atualizar lista de modelos",
  discoveringModels: "Buscando os modelos disponíveis…",
  discoveredCount:
    "{{count}} modelos disponíveis — comece a digitar para filtrar",
  discoveryNoKey:
    "Coloque a chave de API deste provedor no .env para ver a lista de modelos disponíveis",
  discoveryError:
    "Não conseguimos buscar a lista de modelos do provedor — mas você ainda pode digitar o nome do modelo",
  customBaseUrlHint: "Endereço (endpoint) da API compatível com OpenAI",
  poolHint:
    "Adicione várias chaves de API do mesmo provedor para o Hermes ir alternando entre elas automaticamente e dividir o uso. Assim você não estoura o limite de uma só.",
  add: "Adicionar",
  remove: "Remover",
  keyLabel: "Chave",
  empty: "(vazio)",
  dataSection: "Dados",
  dataHint:
    "Faça uma cópia de segurança ou restaure suas configurações, histórico, habilidades e memória do Hermes.",
  backingUp: "Salvando cópia...",
  exportBackup: "Salvar cópia (backup)",
  importing: "Importando...",
  importBackup: "Restaurar de uma cópia",
  logsSection: "Logs",
  refresh: "Atualizar",
  emptyLog: "(vazio)",
  updating: "Atualizando...",
  updateEngine: "Atualizar o motor",
  latestVersion: "Você já está na versão mais recente",
  runningDiagnosis: "Rodando diagnóstico...",
  runDiagnosis: "Rodar diagnóstico",
  running: "Executando...",
  debugDump: "Relatório técnico",
  migrationDetected: "Encontramos uma instalação do OpenClaw",
  migrationDesc:
    "Achamos o OpenClaw em <code>{{path}}</code>. Você pode trazer suas configurações, chaves de API, histórico e habilidades para o Hermes.",
  migrationDismiss: "Não mostrar de novo",
  migrating: "Trazendo seus dados...",
  migrateToHermes: "Trazer para o Hermes",
  skip: "Pular",
  appearanceHint: "Deixe a aparência do app do jeito que você gosta",
  apiKeyPlaceholder: "Chave da API",
  labelPlaceholder: "Apelido ({{optional}})",
  connectionSection: "Conexão",
  modeLocal: "Neste computador",
  modeRemote: "Remoto",
  modeLocalHint: "Usar o Hermes instalado neste computador",
  modeRemoteHint:
    "Conectar a um servidor do Hermes na sua rede ou na nuvem",
  remoteUrl: "URL do servidor",
  remoteUrlHint:
    "Endereço (URL) do servidor do Hermes — ele precisa responder em /health e /v1/chat/completions",
  remoteApiKey: "Chave da API",
  remoteApiKeyHint:
    "Precisa ser igual à API_SERVER_KEY do servidor remoto. Deixe vazio se o servidor aceitar conexões sem autenticação.",
  testingConnection: "Testando...",
  testConnection: "Testar conexão",
  save: "Salvar",
  serverConfigTitle: "Configuração do servidor",
  serverConfigHint:
    "Você está conectado a um servidor remoto do Hermes. A escolha dos modelos, as chaves de API dos provedores e as credenciais ficam no próprio servidor, nos arquivos <code>~/.hermes/.env</code> e <code>config.yaml</code>. Edite por lá e reinicie o servidor.",
  connectionMode: "Modo",
  switchedToLocal: "Pronto, agora você está usando este computador",

  // Community
  communityTitle: "Comunidade",
  communityHint:
    "Entre no nosso canal do Discord para tirar dúvidas, relatar problemas e conversar com outras pessoas que usam o Hermes.",
  joinDiscord: "Entrar no canal do Discord",

  // SSH & Server Config
  modeSsh: "Túnel SSH",
  modeSshHint:
    "Faz um túnel até um Hermes remoto por SSH — sem precisar abrir portas nem criar chaves de API.",
  sessionDisabledTitle:
    "Histórico desativado — a API_SERVER_KEY não foi definida",
  sessionDisabledDesc:
    "Sem uma chave de API do servidor, as conexões não conseguem retomar suas conversas. As mensagens continuam sendo enviadas, mas o histórico não será guardado quando você reiniciar.",
  generateKey: "Gerar e salvar uma chave",
  generating: "Gerando…",
  remoteEnvTitle: "Defina a API_SERVER_KEY no servidor remoto",
  remoteEnvSshDesc:
    "Modo SSH: adicione API_SERVER_KEY=<sua-chave> em ~/.hermes/profiles/<perfil>/.env no servidor remoto e reinicie as conexões por lá.",
  remoteEnvDesc:
    "Modo remoto: adicione API_SERVER_KEY=<sua-chave> no arquivo .env do seu servidor remoto do Hermes e reinicie as conexões.",
  sshHost: "Host SSH",
  sshPort: "Porta SSH",
  sshUsername: "Usuário",
  sshKeyPath: "Caminho da chave privada",
  sshKeyPathOptional: "(opcional, o padrão é ~/.ssh/id_rsa)",
  sshRemotePort: "Porta do Hermes remoto",
  sshRemotePortDefault: "(padrão 8642)",
  sshHint:
    "Confira se você consegue rodar ssh {{cmd}} sem pedir senha. Na primeira conexão, a chave do host é confiada e guardada em ~/.ssh/known_hosts; se essa chave mudar depois, o SSH vai recusar a conexão por segurança.",
  sshHintWelcome:
    "Usa o SSH do seu sistema. Confira se você já consegue rodar ssh {{cmd}} sem pedir senha.",
  testingSsh: "Testando SSH…",
  testSsh: "Testar conexão SSH",
  connectSsh: "Conectar por SSH",
  sshTitle: "Conectar por SSH",
  sshSubtitle:
    "Faz um túnel até um Hermes remoto por SSH — sem precisar abrir portas nem criar chaves de API.",
  sshHostPlaceholder: "192.168.1.100 ou meuservidor.local",
  sshUsernamePlaceholder: "hermes",
  sshErrorRequired: "Informe o host e o usuário.",
  sshErrorConnection:
    "Não foi possível conectar por SSH nem chegar ao Hermes no servidor remoto. Confira se:\n• A chave SSH está correta (ou se o padrão ~/.ssh/id_rsa funciona)\n• As conexões do Hermes estão rodando no servidor remoto\n• A porta remota está correta (padrão 8642)",
  sshErrorFailed: "O teste de conexão SSH falhou: {{msg}}",
  sshErrorFailedSimple: "O teste de conexão SSH falhou.",
  remoteErrorUrl: "Digite uma URL.",
  remoteErrorConnection:
    "Não conseguimos chegar ao Hermes nesta URL. Confira a URL e a chave de API.\n\nDeixe a chave vazia se o servidor aceitar conexões sem autenticação (por exemplo, por um túnel SSH para localhost).",
  remoteErrorFailed: "O teste de conexão falhou.",
  sshSuccess: "Túnel SSH conectado!",
  sshErrorRequiredSimple: "Informe o host e o usuário",
  remoteSuccess: "Conectado com sucesso!",
  remoteErrorRequiredSimple: "Digite uma URL",
  remoteErrorFailedSimple: "Não foi possível chegar ao servidor",
  apiGenerated: "Chave de API gerada — reiniciando as conexões…",
} as const;
