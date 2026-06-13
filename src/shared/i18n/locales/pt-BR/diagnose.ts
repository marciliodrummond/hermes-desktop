export default {
  title: "Diagnóstico",
  description:
    "Conferimos as configurações do aplicativo (variáveis de ambiente, config.yaml e modelos) e mostramos o que pode estar fazendo a conversa falhar. Quando for seguro, corrigimos para você com um clique.",
  rerun: "Conferir de novo",
  allGood: "Tudo certo. Suas configurações estão em ordem.",
  banner: {
    lead: "Encontramos problemas nas configurações:",
    errors: "{{count}} erro(s)",
    warnings: "{{count}} aviso(s)",
    infos: "{{count}} observação(ões)",
    showDetails: "Ver detalhes",
  },
  apiKeyBanner: {
    lead: "A chave do servidor de API não está definida — a conversa não vai funcionar.",
    setNow: "DEFINIR AGORA",
  },
  apiKeyModal: {
    title: "Definir a chave do servidor de API",
    description:
      "A API_SERVER_KEY é necessária para as Conexões do SI Agent liberarem as solicitações. Defina agora para a conversa funcionar.",
    label: "Chave do servidor de API",
    placeholder: "sk-… ou qualquer senha",
    autoGenerate: "Gerar automaticamente",
    hint: "Você pode colar a sua própria chave ou gerar um código aleatório.",
  },
  fix: {
    apply: "Corrigir",
    running: "Corrigindo…",
    success: "Corrigido.",
    failure: "Não deu para corrigir.",
  },
} as const;
