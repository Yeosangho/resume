import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Deep Learning',
  items: [
    {
      title: 'Deep Reinforcement Learning',
      level: 2,
    },
    {
      title: 'Multi-agent Reinforcement Learning',
      level: 2,
    },
    {
      title: 'Distributed Deep Learning',
      level: 3,
    },
    {
      title: 'Deep Learning Model for Image Classification',
      level: 1,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Optimization algorithm',
  items: [
    {
      title: '(Integer) Linear Programming',
      level: 1,
    },
    {
      title: 'Genetic Algorithm',
      level: 1,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Language',
  items: [
    {
      title: 'Node.js',
      level: 2,
    },
    {
      title: 'Java',
      level: 3,
    },
    {
      title: 'javascript',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 2,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Framework',
  items: [
    {
      title: 'Tensorflow',
    },
    {
      title: 'PyTorch',
    },
    {
      title: 'Hadoop',
    },
    {
      title: 'Spark',
    },

    {
      title: 'AWS EC2',
    },
    {
      title: 'AWS S3',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
