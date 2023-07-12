/* eslint-disable no-template-curly-in-string */
export default {
  COMMONS: {
    BACK: 'Voltar',
    SAVE: 'Salvar',
    EDIT: 'Editar',
    NO_OPTIONS: 'Sem opções'
  },
  VALIDATION: {
    NUMBER: 'Campo tem que ser do tipo número',
    REQUIRED_FIELD: 'Campo obrigatório',
    STRING_LENGTH: 'Deve ter {{length}} caracteres',
    AT_LEAST_VALUE: 'Dever ser ao menos {{min}}',
    INVALID_EMAIL: 'E-mail inválido',
    INVALID_DATE: 'Data inválida',
    INVALID_URL: 'Digite uma url válida: http://www.exemplo.com.br',
    MAX_LENGTH: 'Deve ter no máximo {{max}} caracteres',
    MIX_NUMBER: 'Deve ser no mínimo {{min}}',
    MAX_NUMBER: 'Deve ser no máximo {{max}}',
    INVALID_ISBN: 'ISBN inválido',
    INVALID_CNPJ: 'CNPJ inválido',
    INVALID_CPF: 'CPF inválido',
    INVALID_TELEPHONE: 'Telefone inválido',
    INVALID_CELLPHONE: 'Celular inválido',
    TAG_MAX_LENGTH:
      'A soma de todas as palavras-chave deve ser no máximo {{max}} caracteres'
  },
  ERROR: {
    USER_NOT_FOUND: 'Usuário não encontrado',
    400: 'Não foi possível concluir a requisição',
    401: 'Usuário não autorizado',
    403: 'Este usuário não tem permissão para fazer esta operação.',
    404: 'Não encontrado',
    500: 'Ocorreu um erro inesperado',

    'Network Error': 'Ocorreu um erro de rede',

    DEFAULT_ERROR:
      'Não foi possível realizar a operação. Caso o problema persista contate o administrador do sistema.'
  },
  STAGES: {
    HR: 'RH',
    TECHNICAL: 'Técnico',
    PROPOSAL: 'Proposta',
    COUNTER_PROPOSAL: 'Contra-proposta',
    TRIAGE: 'Triagem',
    CLIENT: 'Cliente'
  },
  SOURCES: {
    LINKEDIN: 'LinkedIn',
    OTHER_CHANNELS: 'Outros canais',
    RECOMMENDATION: 'Indicação'
  },
  JOB_STATUS: {
    OPENED: 'Aberto',
    CLOSED: 'Fechado'
  },

  JOB_LEVEL: {
    JUNIOR: 'Junior',
    FULL: 'Pleno',
    SENIOR: 'Sênior'
  },
  STATUS_SLA: {
    GREEN: 'Verde',
    YELLOW: 'Amarelo',
    ORANGE: 'Laranja',
    RED: 'Vermelho'
  },

  LOGIN: {
    SIGIN: 'Entrar',
    EMAIL: 'E-mail',
    SEND: 'Enviar',
    BACKGROUND1: 'Logo RedSpark',
    BACKGROUND2: 'Imagem com pessoas trabalhando'
  },
  CANDIDATES: {
    CANDIDATE_NAME: 'Nome do candidato',
    LINKEDIN: 'Linkedin',
    TELEPHONE: 'Telefone',
    CURRICULUM: 'Currículo',
    EMAIL: 'E-mail',
    SKILLS: 'Habilidades',
    INTERVIEW_BOOKING: 'Data e hora entrevista',
    SOURCE: 'Fonte',
    CURRENT_JOB: 'Vaga',
    POSSIBLE_JOBS: 'Possiveis vagas',
    SELECT_STAGE: 'Selecionar etapa',
    RESPONSIBLE_RECRUITER: 'Recrutador Responsável',
    JOB: 'Vaga',
    SELECT: 'Selecione',
    CONFIRMATION: 'Cadastro realizado com sucesso!',
    FIELD_OF_ACTION: 'Área de Atuação',
    NEW_CANDIDATE: 'Novo Candidato',
    ADDING_CANDIDATE: 'Adicionar candidato',
    COMPLEMENT_SOURCE: 'Complemento',
    EDIT_CANDIDATE: 'Editar dados candidato',
    NOT_INFO: 'Não informado',
    INTERVIEW_STATUS: 'Status da entrevista',
    CANDIDATE_EVALUATION: 'Avaliação do candidato'
  },
  JOBS: {
    MAIN_TITLE: 'Cadastro de Vagas',
    JOB_TITLE: 'Titulo da Vaga',
    COMPANY: 'Empresa',
    REQUESTING_AREA: 'Área Solicitante',
    MANAGER_LEADER: 'Gestor/Líder',
    SLA_START_DATE: 'Data de Início (SLA)',
    SLA_IN_DATE: 'Data de Abertura',
    CLIENT: 'Cliente',
    FIELD_OF_ACTION: 'Área de Atuação',
    PROFILE: 'Perfil',
    JOB_LEVEL: 'Nível da Vaga',
    SALARY_RANGE: 'Faixa Salarial',
    REQUIREMENTS: 'Requisitos Imprescindíveis',
    DIFFERENTIAL: 'Diferenciais',
    FINAL_OBSERVATION: 'Observação Final - Área de Pessoas',
    JOB_REASON: 'Motivo da Vaga',
    ADDITIONAL_INFO: 'Informações Adicionais',
    START_PREVISION: 'Previsão Início',
    CONFIRMATION: 'Cadastro realizado com sucesso!',
    CONFIRMATION_EDIT: 'Cadastro alterado com sucesso!',
    EDIT_DETAILS_TITLE: 'Detalhes da Vaga',
    CONFIRM_CLOSE_JOB: 'Você realmente deseja fechar essa vaga?',
    ERROR_EDIT: 'Cadastro não realizado',
    JOB_STATUS: 'Status da Vaga',
    CONFIRMATION_CLOSED: 'Vaga fechada com sucesso!',
    JOB_CLOSED: 'Encerrar Vaga',
    CREATE_JOB: 'Criar Vaga'
  },
  LISTING_CANDIDATE: {
    TITLE: 'Candidatos'
  },
  LISTING_JOB: {
    TITLE: 'Vagas',
    STATUS: 'Status da Vaga',
    NEW_JOB: 'Nova Vaga'
  },
  VIEW_JOB: {
    ADD_CANDIDATE: 'Adicionar Candidato',
    BACK_VACATIONS: 'Voltar vagas',
    CANDIDATES: 'Candidatos',
    TRIAGE: 'Triagem',
    HR: 'Área de Pessoas(RH)',
    TECH: 'Tecnico/Gestor',
    CLIENT: 'Cliente',
    PROPOSAL: 'Proposta',
    IN_PROCESS: 'Em processo',
    REPROVED: 'Reprovados'
  },
  STAGE: {
    CURRENT_STAGE: 'Fase atual:',
    MOVE_TO_STEPS: 'Mover para a fase',
    CURRICULUM_BANK: 'Banco de CV',
    MOVE_TO: {
      HR: 'Entrevista com RH',
      TECHNICAL: 'Entrevista com Técnico/Gestor',
      PROPOSAL: 'Proposta',
      COUNTER_PROPOSAL: 'Contra-proposta',
      CLIENT: 'Entrevista com Cliente',
      TRIAGE: 'Triagem'
    }
  },
  INTERVIEW_STATUS: {
    SHOWED_UP: 'Compareceu',
    NO_SHOWED_UP: 'Não compareceu'
  },
  SALARY: {
    SALARY_MIN: 'Min',
    SALARY_MAX: 'Max'
  },
  ADVANTAGES_JOB_CURRENNT: {
    ADVANTAGES_JOB_CURRENNT: 'Benefícios atuais'
  },
  TYPE_HIRING: {
    CLT: 'CLT',
    PJ: 'PJ',
    CLT_FLEX: 'CLT FLEX',
    COOPERADO: 'COOPERADO',
    OTHER: 'Outro'
  },

  HIRING_MODEL: {
    TYPE_OF_CONTRACT: 'Modelo de contração'
  },

  HOMEAVAILABILITY: {
    AVAILABILITYHOME: 'Disponibilidade de Inicio'
  },
  STARTAVAILABILITY: {
    IMMEDIATE_START: 'Imediato',
    ONE_WEEK: '1 Semana',
    TWO_WEEK: '2 semanas',
    THREE_WEEK: '3 Semanas',
    MOST: 'Mais'
  },
  CONCLUSION: {
    REASON: 'Motivo'
  }
};
