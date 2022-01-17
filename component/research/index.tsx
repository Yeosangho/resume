import { PropsWithChildren } from 'react';
import { CommonSection } from '../common/CommonSection';
import PresentationRow from './row';
import { IResearch } from './IResearch';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IResearch.Payload;

export const Research = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="RESEARCHES">
      <PresentationRow payload={payload} />
    </CommonSection>
  );
}
