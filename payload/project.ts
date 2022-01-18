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
    },
    {
      title: '분산 딥러닝 관련 KISTI 용역과제 수행',
      startedAt: '2018-05',
      endedAt: '2019-10',
      where: '한국',
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
      link: 'https://www.google.com',
      skillKeywords: ['a', 'b'],
    },
    {
      title: '키스티 클러스터 무상 대여 프로그램(R&D 혁신지원 프로그램) 수행',
      startedAt: '2018-05',
      endedAt: '2019-10',
      where: 'Bar Co., LTD.',
      descriptions: [
        { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { content: 'Integer massa magna, feugiat commodo arcu sed, sagittis sollicitudin tortor' },
        { content: 'Nullam diam ex, interdum nec lacus vel, ultrices pretium sapien' },
        { content: 'Proin bibendum non nibh eu aliquet' },
      ],
      link: 'https://www.google.com',
      skillKeywords: ['a', 'b'],
    },
    {
      title: '클라우드 transient 자원 기반의 고성능 분산 딥러닝을 위한 학습 기법 연구',
      startedAt: '2018-05',
      endedAt: '2019-10',
      where: 'Bar Co., LTD.',
      descriptions: [
        { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { content: 'Integer massa magna, feugiat commodo arcu sed, sagittis sollicitudin tortor' },
        { content: 'Nullam diam ex, interdum nec lacus vel, ultrices pretium sapien' },
        { content: 'Proin bibendum non nibh eu aliquet' },
      ],
      link: 'https://www.google.com',
      skillKeywords: ['a', 'b'],
    },
    {
      title: '클라우드 transient 자원 기반의 고성능 분산 딥러닝을 위한 학습 기법 연구',
      startedAt: '2018-05',
      endedAt: '2019-10',
      where: 'Bar Co., LTD.',
      descriptions: [
        { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { content: 'Integer massa magna, feugiat commodo arcu sed, sagittis sollicitudin tortor' },
        { content: 'Nullam diam ex, interdum nec lacus vel, ultrices pretium sapien' },
        { content: 'Proin bibendum non nibh eu aliquet' },
      ],
      link: 'https://www.google.com',
      skillKeywords: ['a', 'b'],
    },
  ],
};

export default project;
