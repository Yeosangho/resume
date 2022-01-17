import { PropsWithChildren } from 'react';
import { Col, Row } from 'reactstrap';
// import { CommonSection } from '../common/CommonSection';
import ResearchRow from './row';
import { IResearch } from './IResearch';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { EmptyRowCol } from '../common';
import { Style } from '../common/Style';

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
    <div className="mt-5">
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h2 style={Style.blue}>RESEARCH </h2>
          </Col>
        </Row>
        {payload.list.map((item, index) => (
          <ResearchRow key={index.toString()} item={item} index={index} />
        ))}
      </EmptyRowCol>
    </div>
  );
}
