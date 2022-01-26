import { IResearch } from '../component/research/IResearch';

const research: IResearch.Payload = {
  disable: false,

  list: [
    {
      title:
        'Memory-aware Communication Scheduling and Shard Strategy Selection for Data-parallel Distributed Deep Learning',
      subTitle: '',
      author: 'Sangho Yeo',
      type: 'Thesis(계획)',
      descriptions: ['Status : Planned'],
      skillKeywords: [
        'Distributed Deep Learning',
        'Large-scale Depp Learning',
        'Communication Scheduling',
        'Integer Linear Programming',
        'Python',
        'Pytorch',
        'MPI',
        'Horovod',
        'ByteScheduler',
        'FairScale',
      ],
      link: 'https://github.com/Yeosangho/mem_aware_dl_comm_schedule',
    },
    {
      title:
        'Accelerated deep reinforcement learning with efficient demonstration utilization techniques',
      subTitle: 'World Wide Web : Internet and Web Information Systems (Impact factor : 2.716, Q2)',
      author: 'Sangho Yeo, Sangyoon Oh, Minsu Lee',
      type: 'SCI(E)',
      firstauthor: '2',
      coauthor: '1',
      review: '2',
      descriptions: ['Status : Published'],
      skillKeywords: [
        'Reinforcement Learning',
        'Imitation Learning',
        'Python',
        'Tensorflow',
        'OpenAI Gym',
      ],
      link: 'https://github.com/Yeosangho/dfs_er',
    },
    {
      title:
        'Achieving Balanced Load Distribution with Reinforcement Learning-Based Switch Migration in Distributed SDN Controllers',
      subTitle: 'MDPI Electronics (Impact factor : 2.397, Q3)',
      author: 'Sangho Yeo, Ye Naing, Taeha Kim, Sangyoon Oh',
      type: '',
      descriptions: ['Status : Published'],
      skillKeywords: [
        'Reinforcement Learning',
        'Multi Agent Reinforcement Learning',
        'Python',
        'Pytorch',
        'OpenAI Gym',
      ],
      link: 'https://github.com/Yeosangho/sar_lb',
    },
    {
      title:
        'Novel data-placement scheme for improving the data locality of Hadoop in heterogeneous environments',
      subTitle: 'Concurrency and Compuation: Practice and Experience (Impact factor : 1.536, Q3)',
      author: 'Minho Bae, Sangho Yeo, Gyudong Park, Sangyoon Oh',
      type: '',
      descriptions: ['Status : Published'],
      skillKeywords: ['Hadoop', 'Data Locality', 'HDFS'],
    },
    {
      title:
        'Crossover-SGD: A gossip-based communication in distributed deep learning for alleviating large mini-batch problem and enhancing scalability',
      subTitle: 'Concurrency and Compuation: Practice and Experience (Impact factor : 1.536, Q3)',
      author: 'Sangho Yeo, Minho Bae, Minjoong Jeong, Oh-kyoung Kwon, Sangyoon Oh',
      type: '',
      descriptions: ['Status : Review'],
      skillKeywords: [
        'Distributed Deep Learning',
        'Gossip-based Communication',
        'Python',
        'Pytorch',
        'MPI',
        'Horovod',
      ],
      link: 'https://github.com/Yeosangho/crossover-sgd',
    },
    {
      title:
        'AMBLE: Adjusting Mini-Batch and Local Epoch for Federated Learning with Heterogeneous Devices',
      subTitle: 'Journal of Parallel and Distributed Computing (Impact factor : 3.734, Q1)',
      author: 'Juwon Park, Daegun Yoon, Sangho Yeo, Sangyoon Oh',
      type: '',
      descriptions: ['Status : Review'],
      skillKeywords: ['Federated Learning', 'Local SGD', 'Jetson Board'],
    },

    {
      title:
        'Integrate multi-agent simulation environment and multi-agent reinforcement learning (MARL) for real-world scenario',
      subTitle: 'ICTC 2021',
      author: 'Sangho Yeo, Seungjun Lee, Boreum Choi, Sangyoon Oh',
      type: '국외 학술대회',
      firstauthor: '2',
      coauthor: '2',
      descriptions: ['Status : Published'],
      skillKeywords: [
        'Reinforcement Learning',
        'Multi-agent Reinforcmenet Learning',
        'Disaster Simulation',
        'Python',
        'PyTorch',
      ],
      link: 'https://github.com/Yeosangho/rcrs_marl_solution',
    },
    {
      title:
        'Accelerating Deep Reinforcement Learning Using Human Demonstration Data Based on Dual Replay Buffer Management and Online Frame Skipping',
      subTitle: 'IEEE Bigcomp 2019',
      author: 'Sangho Yeo, Sangyoon Oh, Minsu Lee',
      type: '',
      descriptions: ['Status : Published'],
      skillKeywords: ['Deep Reinforcement Learning', 'Imitation Learning', 'Python', 'Tensorflow'],
    },
    {
      title: 'I/O Performance Evaluation of Large-Scale Deep Learning on an HPC System',
      subTitle: 'The 2019 International Conference on High Performance Computing & Simulation ',
      author: 'Minho Bae, Minjoong Jeong, Sangho Yeo, Sangyoon Oh, Oh-kyoung Kwon',
      type: '',
      descriptions: ['Status : Published'],
      skillKeywords: ['Distributed Deep Learning', 'Singularity', 'Lustre', 'Caffe2'],
    },
    {
      title:
        'Decentralized Message Broker Federation Architecture with Multiple DHT Rings for High Survivability',
      subTitle: 'The 2018 International Conference on Computational Science and Its Applications',
      author: 'Minsub Kim, Minho Bae, Sangho Yeo, Gyudong Park, Sangyoon Oh',
      type: '',
      descriptions: ['Status : Published'],
      skillKeywords: ['Message Broker', 'DHT'],
    },
    {
      title: '학습 성능 향상을 위한 차원 축소 기법 기반 재난 시뮬레이션강화학습 환경 구성 및 활용',
      subTitle: '정보처리학회논문지:소프트웨어 및 데이터공학 (KCI 등재 학술지)',
      author: '여상호, 이승준, 오상윤',
      type: '국내저널',
      firstauthor: '1',
      coauthor: '1',
      descriptions: ['Status : Published'],
      skillKeywords: [
        'Reinforcement Learning',
        'Multi-agent Reinforcmenet Learning',
        'Disaster Simulation',
        'Python',
        'PyTorch',
      ],
    },
    {
      title:
        'Active-Active Message Replica Scheme for Enhancing Performance of Distributed Message Broker',
      subTitle: '정보처리학회논문지: 컴퓨터 및 통신시스템 (KCI 등재 학술지)',
      author: '서경희, 여상호, 오상윤',
      type: '',
      descriptions: ['Status : Published'],
      skillKeywords: ['Kafka', 'Distributed Message Broker'],
    },
    {
      title: '도시 재난 대응을 위한 Multi Objective 강화학습 모델 설계',
      subTitle: '2021 한국차세대컴퓨팅학회 춘계학술대회',
      author: '여상호, 이승준, 오상윤',
      type: '국내 컨퍼런스',
      firstauthor: '3',
      coauthor: '2',
      descriptions: ['Status : Published'],
      skillKeywords: [
        'Reinforcement Learning',
        'Multi-objective Optimization',
        'Disaster Simulation',
        'Python',
        'PyTorch',
      ],
    },
    {
      title:
        'Gossip 네트워크 토폴로지 변화에 따른 Spectral gap 분석을 통한 정보 전파지연 현상 해석',
      subTitle: 'JCCI 2021',
      author: '여상호, 오상윤',
      type: '',
      descriptions: ['Status : Published'],
      skillKeywords: [
        'Distributed Deep Learning',
        'Gossip-based Communication',
        'Spectral gap',
        'Python',
      ],
    },
    {
      title:
        '도시 화재 시뮬레이션에서의 효과적인 화재 대응을 위한 강화학습 적용 솔루션의 설계 및 구현',
      subTitle: 'ACK 2021',
      author: '여상호, 오상윤',
      type: '',
      descriptions: ['Status : Published'],
      skillKeywords: [
        'Reinforcement Learning',
        'Multi-agent Reinforcement Learning',
        'Disaster Simulation',
        'PyTorch',
        'Python',
      ],
    },
    {
      title: 'Edge AI의 추론 과정을 위한 계층적 작업 분할 배치 기법',
      subTitle: '2021 한국차세대컴퓨팅학회 춘계학술대회',
      author: '이승준, 여상호, 오상윤',
      type: '',
      descriptions: ['Status : Published'],
      skillKeywords: [
        'Edge AI',
        'Model Partitioning',
        'Deep Learning Model Inferenece',
        'Distributed Deep Learning',
      ],
    },
    {
      title: 'Embedded GPU 환경에서의 병렬 컴퓨터 비전 라이브러리의 비교: OpenCV와 VisionWorks',
      subTitle: '한국정보과학회 학술발표논문집, 2017',
      author: '김민섭, 여상호, 오상윤, 정민중',
      type: '',
      descriptions: ['Status : Published'],
      skillKeywords: ['VisionWorks', 'OpenCV', 'Jetson Board'],
    },
  ],
};

export default research;
