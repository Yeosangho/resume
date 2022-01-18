import { IResearch } from '../component/research/IResearch';

const research: IResearch.Payload = {
  disable: false,

  list: [
    {
      title:
        'Accelerated deep reinforcement learning with efficient demonstration utilization techniques',
      subTitle: 'World Wide Web : Internet and Web Information Systems',
      author: 'Sangho Yeo, Sangyoon Oh, Minsu Lee',
      type: 'SCI(E)',
      firstauthor: '2',
      coauthor: '1',
      planned: '1',
      review: '2',
      descriptions: ['Status : Published', 'Impact factor : 2.716, Q2'],
      skillKeywords: ['Python', 'Tensorflow', 'OpenAI Gym'],
      link: 'https://www.google.com',
    },
    {
      title:
        'Achieving Balanced Load Distribution with Reinforcement Learning-Based Switch Migration in Distributed SDN Controllers',
      subTitle: 'MDPI Electronics',
      author: 'Sangho Yeo, Ye Naing, Taeha Kim, Sangyoon Oh',
      type: '',
      descriptions: ['Status : Published', 'Impact factor : 2.397, Q3'],
      skillKeywords: ['Python', 'Pytorch', 'OpenAI Gym'],
      link: 'https://www.google.com',
    },
    {
      title:
        'Crossover-SGD: A gossip-based communication in distributed deep learning for alleviating large mini-batch problem and enhancing scalability',
      subTitle: 'Concurrency and Compuation: Practice and Experience',
      author: 'Sangho Yeo, Minho Bae, Minjoong Jeong, Oh-kyoung Kwon, Sangyoon Oh',
      type: '',
      descriptions: ['Status : Review', 'Impact factor : 2.397, Q3'],
      skillKeywords: ['Python', 'Pytorch', 'MPI', 'Horovod'],
      link: 'https://www.google.com',
    },
    {
      title:
        'Memory-aware Communication Scheduling and Shard Strategy Selection for Data-parallel Distributed Deep Learning',
      subTitle: '',
      author: 'Sangho Yeo, Sangyoon Oh',
      type: '',
      descriptions: ['Status : Planned'],
      skillKeywords: ['Python', 'Pytorch', 'MPI', 'Horovod', 'ByteScheduler', 'FairScale'],
      link: 'https://www.google.com',
    },
  ],
};

export default research;
