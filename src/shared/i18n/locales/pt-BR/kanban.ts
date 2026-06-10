export default {
  title: "Quadro",
  subtitle:
    "Um quadro onde vários agentes pegam tarefas e tocam até o fim, sozinhos.",

  // Header actions
  refresh: "Atualizar",
  refreshTooltip: "Recarregar quadros e tarefas do agente",
  dispatch: "Distribuir",
  dispatchTooltip:
    "Roda uma rodada de distribuição — libera as tarefas prontas e coloca agentes para trabalhar",
  newTask: "Nova tarefa",
  newTaskTooltip: "Criar uma tarefa neste quadro",
  newBoard: "Novo quadro",
  newBoardTooltip: "Criar um novo quadro",

  // Remote-mode unsupported notice
  remoteUnsupportedTitle:
    "O Quadro só funciona com o Hermes instalado no seu computador ou pelo túnel SSH.",
  remoteUnsupportedHint:
    "No modo remoto simples (HTTP + chave de API) o Quadro ainda não está disponível. Mude para o modo local ou túnel SSH nas Configurações para usar o quadro.",

  // Column / task statuses
  status: {
    triage: "Triagem",
    todo: "A fazer",
    ready: "Pronto",
    running: "Em andamento",
    blocked: "Travado",
    done: "Concluído",
  },

  // Card action tooltips
  cardSpecify: "Detalhar (transforma a ideia em tarefa pronta)",
  cardMarkDone: "Marcar como concluído",
  cardReclaim: "Liberar o agente",
  cardUnblock: "Destravar",
  cardBlock: "Travar",
  cardArchive: "Arquivar",

  // Create-task modal
  createTitle: "Nova tarefa no quadro",
  fieldTitle: "Título",
  titlePlaceholder: "O que precisa ser feito?",
  fieldBody: "Detalhes (opcional)",
  bodyPlaceholder: "Contexto, o que define a tarefa como pronta, links…",
  fieldAssignee: "Perfil responsável",
  assigneeNone: "— Triagem (sem responsável)",
  fieldPriority: "Prioridade",
  priorityNormal: "Normal (0)",
  priorityLow: "Baixa (P2)",
  priorityHigh: "Alta (P1)",
  priorityUrgent: "Urgente (P0)",
  fieldWorkspace: "Pasta de trabalho",
  workspaceScratch: "Temporária (pasta provisória)",
  workspaceWorktree: "Worktree (repositório atual)",
  workspaceChoose: "Escolher pasta…",
  workspaceNoFolder: "Nenhuma pasta escolhida",
  browse: "Procurar…",
  triageCheckbox:
    "Deixar na triagem (alguém detalha a tarefa antes de mandar para o 'A fazer')",
  create: "Criar tarefa",
  creating: "Criando…",

  // New-board modal
  newBoardTitle: "Novo quadro",
  fieldSlug: "Identificador",
  slugPlaceholder: "use-hifens, ex: servidor-atm10",
  fieldDisplayName: "Nome de exibição (opcional)",
  displayNamePlaceholder: "Servidor ATM10",
  createBoard: "Criar quadro",

  // Task-detail modal
  detailFallbackTitle: "Tarefa",
  detailBody: "Detalhes",
  detailSummary: "Resumo da última execução",
  detailResult: "Resultado",
  detailComments: "Comentários ({{count}})",
  detailEvents: "Eventos ({{count}})",
  commentAnon: "anônimo",

  // Prompts / confirmations
  blockReasonPrompt: "Por que está travando?",
  confirmMarkDone: 'Marcar "{{title}}" como concluído?',
  confirmArchive: 'Arquivar "{{title}}"?',

  // Errors
  moveNotAllowed:
    "Não dá para mover de {{from}} para {{to}} pelo aplicativo. Use o agente ou a linha de comando.",
  errLoadBoards: "Não foi possível carregar os quadros",
  errLoadTasks: "Não foi possível carregar as tarefas",
  errMoveTask: "Não foi possível mover a tarefa",
  errPickFolder: "Escolha uma pasta de trabalho primeiro.",
  errCreateTask: "Não foi possível criar a tarefa",
  errSwitchBoard: "Não foi possível trocar de quadro",
  errCreateBoard: "Não foi possível criar o quadro",
  errSpecify: "Não foi possível detalhar a tarefa",
  errArchive: "Não foi possível arquivar a tarefa",
  errReclaim: "Não foi possível liberar o agente",
  errDispatch: "A distribuição falhou",

  // Tooltips & buttons
  hqBoardTooltip: "Quadro central do Claw3D (somente leitura)",
  dismissError: "Dispensar erro",
  closeTaskDetails: "Fechar detalhes da tarefa",
} as const;
