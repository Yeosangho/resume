import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: '특허 및 지적재산권',
      descriptions: [
        {
          content: '국내 특허 등록 3건',
          weight: 'MEDIUM',
          descriptions: [
            // Challenge -> how -> Result
            {
              content: '분산 SDN 컨트롤러의 부하 분산을 위한 스위치 마이그레이션 장치 및 방법',
            },
            {
              content: '레이어 오버래핑 기반의 분산 딥러닝 수행 장치 및 방법',
            },
            {
              content: '심층 강화 학습을 위한 데이터 처리 장치 및 방법',
            },
          ],
        },
        {
          content: '프로그램 등록 4건',
          descriptions: [
            // Challenge -> how -> Result
            {
              content:
                'RCRS(RoboCup Resque Simulation) 기반 화재 재난 대응을 위한 강화학습 적용 솔루션',
            },
            {
              content: 'RCRS(RoboCup Resque Simulation) 기반 화재 재난 대응 강화 학습 환경',
            },
            {
              content:
                '심층 강화 학습 가속화를 위해 Atari 게임 환경에서의 효율적인 human demonstration data 관리 시스템',
            },
            {
              content: 'OpenCV를 위한 CUDA Unified Memory 할당 프로그램',
            },
          ],
        },
      ],
    },
    {
      title: 'TA',
      descriptions: [
        {
          content: '대학원 재학기간 동안 다수의 실습 TA 수행',
          weight: 'MEDIUM',
          descriptions: [
            // Challenge -> how -> Result
            {
              content:
                '객체지향프로그래밍 : 자바, 2017년 1학기부터 2020년 1학기까지 1학기마다 매년 조교업무 수행.',
            },
            {
              content:
                '웹 프로그래밍 : HTML,Node.js,Javascript, 2017년 2학기, 2020년 2학기 조교업무 수행.',
            },
          ],
        },
      ],
    },
  ],
};

export default openSource;
