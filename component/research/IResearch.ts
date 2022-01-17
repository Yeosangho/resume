// import { IRow } from '../common/IRow';
import { ICommon } from '../common/ICommon';

export declare namespace IResearch {
  /**
   * ### Sample Rendering
   *
   * ![image](https://user-images.githubusercontent.com/8033320/80116477-fd69b600-85c0-11ea-9fe5-5e5e664605f2.png)
   *
   * @example https://github.com/uyu423/resume-nextjs/blob/master/payload/presentation.ts
   */
  export interface Payload extends ICommon.Payload {
    /** ### 발표 목록 */
    list: Item[];
  }

  export interface Item {
    /** ### 발표명 */
    title: string;

    /** ### 발표 서브 타이틀 */
    subTitle: string;
    author: string;

    firstauthor: string;
    coauthor: string;
    review: string;
    planned: string;

    /**

     */
    type: string;
    skillKeywords?: string[];
    /** ### 발표 설명 */
    // descriptions: IRow.Description[];
    descriptions: string[];
  }
}
