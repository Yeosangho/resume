import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/pepe.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '여상호 | 분산 딥러닝 / 강화학습 엔지니어 입니다',
  },
  contact: [
    {
      title: 'soboru963@ajou.ac.kr',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/Yeosangho',
      link: 'https://github.com/Yeosangho',
      icon: faGithub,
    },
  ],
  notice: {
    title: '각 연구에 대한 설명은 깃헙 리포지터리 별 리드미 파일 참조 부탁드립니다.',
    icon: faBell,
  },
};

export default profile;
