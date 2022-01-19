import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'MR-IoT 융합 기반의 인공지능 재난 대응 기술 연구',
      startedAt: '2020-03',
      endedAt: '2021-12',
      where: '정보통신 기획 평가원',
      descriptions: [
        {
          content:
            '역할 : 연구과제의 세부 프로젝트 중 "재난 대응 협업을 위한 지능형 의사 결정 지원 기술"에 대한 연구를 진행함. ',
        },
        {
          content:
            '과제 내 창의자율프로젝트와 연계하여 재난 상황에서의 효과적인 인명구조를 위한 강화학습 활용방안 연구 (2020)',
          weight: 'MEDIUM',
          descriptions: [
            // Challenge -> how -> Result
            {
              content:
                'What : 기존 도시 화재 재난 시뮬레이션과 강화학습 에이전트를 연동하는 방안을 연구함.',
            },
            {
              content:
                'Challenge : 기존 도시 화재 재난 시뮬레이션의 경우, 자바로 구성된반면, 강화학습 모델을 파이썬으로 구성됨. 또한, 화재 재난 시뮬레이션의 데이터 포맷을 해석해야함.',
            },
            {
              content:
                'Result : 기존 대비 더 효과적인 방식으로 시뮬레이션 데이터를 활용하는 방안을 제시하여 기존 기법 대비 가장 낮은 건물 피해도를 기록함.',
            },
            {
              content:
                'Limitation : 소규모 환경의 예시환경에서 수행하였으며, 행위 공간에 대한 최적화를 수행하지 못함.',
            },
          ],
        },
        {
          content:
            '실제 도시 지도 데이터를 활용한 도시 화재 시뮬레이션 환경 구성 및 멀티에이전트 강화학습 수행(2021)',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'What : 시 규모의 도시 화재 재난  대응을 위해 시뮬레이션을 분석하여 최적화하고, 강화학습의 복잡도를 낮추기 위해 상태정보와 행위정보를 변환하는 솔루션 구성',
            },
            {
              content:
                'How : 화재 시뮬레이션의 특정과정에서 불필요한 연산이 발생함을 확인하고 이부분을 제거함. 또한, 강화학습의 복잡도를 낮추기 위해 상태정보는 이미지로, 행위공간는 건물의 수와 관계없는 값으로 정의함.',
            },
            {
              content:
                'Result : 시 규모(건물 수 : 16184)와 동 규모(건물 수 : 3355)에서 강화학습 적용 시 학습이 수행됨을 확인함.',
              descriptions: [
                {
                  content:
                    '동 규모에서 기존 거리 기반 탐욕정책의 화재대응도(77.2 %) 대비 높은 화재 대응도(99.2 %) 달성함.',
                },
                {
                  content:
                    '시 규모에서 학습이 수행됨을 확인함(학습 이전 화재 대응도: 43.7%, 학습 이후 화재 대응도 46.46%)',
                },
              ],
            },
            {
              content:
                'Limitation : 기존 강화학습 모델을 그대로 활용하여 연구적 측면에서 새로운 측면을 제시하지 못함.',
            },
          ],
        },
      ],
      skillKeywords: ['Multi-agent Reinforcement Learning', 'PyTorch', 'Java', 'Python'],
    },
    {
      title: '분산 딥러닝 관련 KISTI 용역과제 수행',
      startedAt: '2018-05',
      endedAt: '2019-10',
      where: '한국과학기술정보연구원(KISTI)',
      descriptions: [
        {
          content:
            '역할 : 키스티 5호기 클러스터(누리온)에서의 분산 딥러닝 확장성 연구 수행을 위하여 분산학습 환경 구성을 지원함.',
        },
        {
          content:
            '인공지능 응용 연구 지원을 위한 Many Core 환경 머신러닝 플랫폼 최적화 연구(2018)',
          weight: 'MEDIUM',
          descriptions: [
            // Challenge -> how -> Result
            {
              content:
                'What : 키스티 5호기 클러스터에서 분산딥러닝을 구동시키기 위한 환경 설정 방안에 대해 분석함.',
            },
            {
              content:
                'Challenge : CPU 환경에서의 효과적인 구동을 위해 Caffe2를 환경에 맞추어 컴파일하고 이를 싱귤라리티 이미지로 구성해야함. 그러나, 싱귤라리티 이미지가 실제 클러스터 환경에서 잘 구동되지않음.',
            },
            {
              content:
                'Result : 싱귤라리티 이미지 구성 후, 클러스터 환경에서 실제로 분산 딥러닝을 구동하여 HPCS 학회에 공저자로 논문을 제출함.',
            },
            {
              content:
                'Limitation : 구동을 수행하였으나, 새로운 기술 요소의 적용을 수행하지 못함. 특히, 거대환경에서 분산딥러닝 수행시 발생하는 Large mini-batch 문제의 해결이 필수적임.',
            },
          ],
        },
        {
          content: '초거대규모 CPU 기반 환경에서 딥러닝 응용의 12페타플롭스 병렬확장성 연구(2019)',
          weight: 'MEDIUM',
          descriptions: [
            // Challenge -> how -> Result
            {
              content:
                'What : Caffe2의 분산 딥러닝 코드에 대해 분석을 수행하여, 거대규모(2048머신) 환경에서의 분산딥러닝 실험을 지원함.',
            },
            {
              content:
                'Challenge : Caffe2의 경우, PyTorch 대비 코드의 구성이 복잡하여 이해 및 해석이 어려웠음.',
            },
            {
              content:
                'Result : Caffe2 싱귤라리티 이미지를 활용한 2048 머신에서 ResNet50의 분산 딥러닝 실험을 지원함.',
            },
            {
              content:
                'Limitation : Large mini-batch 문제를 해결할 수 있는 기존 기술들을 적용하였으나, 새로운 기술 요소를 발굴하지 못함.',
            },
          ],
        },
      ],
      skillKeywords: ['Singlularity', 'Caffe2', 'Distributed Deep Learning'],
    },
    {
      title: 'KISTI 클러스터 무상 대여 프로그램(R&D 혁신지원 프로그램) 수행',
      startedAt: '2020-08',
      endedAt: '2022-08',
      where: '한국과학기술정보연구원(KISTI)',
      descriptions: [
        {
          content:
            '요약 : KISTI의 클러스터 무상 대여 프로그램(R&D 혁신지원 프로그램)에 2년 연속 통과 및 총 8천만원의 활용시간을 무상대여',
        },
        {
          content:
            '분산딥러닝의 large minibatch 문제 완화 및 성능 향상을 위한 GPU 클러스터 환경에서의 탈중앙화 통신 확장성 향상 연구(2020-2021)',
          weight: 'MEDIUM',
          descriptions: [
            // Challenge -> how -> Result
            {
              content:
                'What : large-minibatch problem 문제를 완화시킬 수 있는 가십 기반 탈중앙화 통신 방안에 대해 연구를 수행함.',
            },
            {
              content:
                'Challenge : 실험의 가치를 높이기 위해 정확도를 유지할 수 있는 현존 ResNet50의 최대 미니배치사이즈(86,016)을 도달하는 것이 매우 어려웠음. 또한, 미니배치를 높여감에 따라 가장 정확도를 높일 수 있는 러닝레이트를 찾는데 시간이 매우 오래걸림.',
            },
            {
              content:
                'Result : ResNet50에서 정확도를 유지할 수 있는 최대 미니배치 사이즈에 도달함. 기존 가십 기반 탈중앙화 통신방식 대비 수렴정확도가 더 높음을 확인하였으며, 제안기법을 SCI 논문지에 제출함.',
            },
            {
              content:
                'Limitation : Cifar10 데이터셋을 활용한 실험에서는 실제로 가십기반 통신이 정확도가 더 높았으나, 이미지넷 데이터를 활용한 경우 AllReduce를 활용한 방식이 더 높은 정확도를 가지게됨. 또한, Large mini-batch 문제가 왜 완화되는지에 대한 원인 정의에 실패함. ',
            },
          ],
        },
        {
          content:
            '고급 네트워크 환경을 가지는 슈퍼컴퓨터에서의 분산 딥러닝 학습 속도 향상을 위한 통신 스케쥴링 기법 연구(2021-2022)',
          weight: 'MEDIUM',
          descriptions: [
            // Challenge -> how -> Result
            {
              content:
                'What : 네트워크 대역폭이 충분한 환경에서 멀티 쓰레드 통신을 활용한 분산딥러닝 통신 스케쥴링',
            },
            {
              content:
                'Challenge : 제안서 작성 후, 동일 아이디어의 연구를 확인하였으며, 따라서 아이디어를 전면 수정함.',
            },
            {
              content:
                'Result : 데이터 병렬화 기반 분산딥러닝의 메모리 활용 문제를 고려할 수 있는 새로운 통신 스케쥴링 기법을 제안하고 졸업논문으로 작성 예정',
            },
          ],
        },
      ],
    },
    {
      title: '클라우드 transient 자원 기반의 고성능 분산 딥러닝을 위한 학습 기법 연구',
      startedAt: '2021-06',
      endedAt: '2024-02',
      where: '한국연구재단 기초연구과제',
      descriptions: [
        {
          content:
            '요약 : 클라우드 transient 자원(예: AWS 스팟 인스턴스)를 활용한 분산 딥러닝을 주제로 주도적으로 연구 아이디어를 제안하고 제안서를 통과시켜, 총 1억 5천만원의 과제비 충당.',
        },
        {
          content: '연구주제 1 : Large mini-batch 문제 해결을 위한 pipeline 기반 Local SGD 기법',
          weight: 'MEDIUM',
          descriptions: [
            // Challenge -> how -> Result
            {
              content:
                'What : 미니배치가 증가함에 따라 최종 수렴 정확도가 감소하는 large mini-batch 문제를 해결하기 위해 local SGD를 활용함',
            },
            {
              content:
                'Challenge : local SGD는 미니배치를 나눈 마이크로 미니배치마다 학습을 반복하여 진행하여 GPU 활용률이 낮아질 수 있음.',
            },
            {
              content:
                'Result : local SGD 방식과 파이프라인 병렬화를 병합하여 멀티 스트림를 활용한 파이프라인 local SGD를 제시함.',
            },
          ],
        },
        {
          content:
            '연구주제 2 : 탄력적인 가십 네트워크 토폴로지의 spectral gap에 기반한 적응형 가십 피어 수 조정 기법',
          weight: 'MEDIUM',
          descriptions: [
            // Challenge -> how -> Result
            {
              content:
                'What : 클라우드 인스턴스는 HPC 클러스터 대비 네트워크 대역폭이 낮아 분산 딥러닝 학습에서 가십 기반 통신 토롤로지의 활용이 필요함.',
            },
            {
              content:
                'Challenge : 클라우드 trasient 자원 환경에서는 네트워크 토폴로지가 고정되지 않으며, 매 반복마다 통신되는 피어의 수마다 학습 효율이 달라지므로 피어 수와 토폴로지를 적절하게 조정해야함',
            },
            {
              content:
                'Result : 가십 통신 토롤로지의 spectral gap 값을 모니터링하며 가십 통신에 의한 모델 업데이트의 오차를 적응형으로 조정하는 방안 제시',
            },
          ],
        },
        {
          content:
            '연구주제 3 : 클라우드 transient 자원 환경에서의 멤버쉽 관리 및 segment checkpoint 기법',
          weight: 'MEDIUM',
          descriptions: [
            // Challenge -> how -> Result
            {
              content:
                'What : 분산 학습 과정에서 인스턴스의 점유 이탈 과정에 효과적으로 대응할 수 있는 방안이 필요함.',
            },
            {
              content:
                'Challenge : 각 인스턴스의 Liveness를 주기적으로 탐색해야하는 비용이 추가 요구되며, 새로운 인스턴스 참여로 인한 학습 중단이 발생',
            },
            {
              content:
                'Result : Liveness 탐색 부하를 줄이기 위한 Piggy backing 방식의 멤버쉽 관리 및 Segment checkpoint 방식을 통한 부분적 학습 중단',
            },
          ],
        },
      ],
      skillKeywords: ['a', 'b'],
    },
    {
      title: '구조건전성평가 응용을 위한 영상데이터 패턴인식 초고속 병렬화 연구',
      startedAt: '2017-03',
      endedAt: '2017-10',
      where: '한국과학기술정보연구원(KISTI)',
      descriptions: [
        {
          content:
            'What : GPU 임베디드 보드(Jetson TX1)을 활용한 저전력 환경에서의 이미지 분류 기법 연구',
        },
        {
          content:
            'Challenge : 서버 환경 대비 설치 가능한 프레임워크에 제약이 많아 생각대로 할 수 없는 부분이 많았음.',
        },
        {
          content:
            'Result : GPU 임베디드 보드(Jetson TX1)의 Unified Memory를 활용한 이미지 처리 방안을 제시함.',
        },
      ],
      skillKeywords: ['a', 'b'],
    },
  ],
};

export default project;
