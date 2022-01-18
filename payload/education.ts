import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '아주대학교 일반대학원',
      subTitle: '인공지능학과 석박사통합과정 수료 (GPA 4.22/4.5)',
      startedAt: '2017-03',
      // endedAt: '2017-02',
    },
    {
      title: '아주대학교',
      subTitle: '소프트웨어 학사 (GPA 3.91/4.5)',
      startedAt: '2012-03',
      // endedAt: '2010-02',
    },
  ],
};

export default education;
