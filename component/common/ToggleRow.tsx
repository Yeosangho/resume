import { PropsWithChildren } from 'react';
import { Row, Col, Badge, Button, UncontrolledCollapse } from 'reactstrap';
import { IRow } from './IRow';
import { Style } from './Style';
import { CommonDescription } from './CommonDescription';
import { HrefTargetBlank } from '.';

export function ToggleRows({
  index,
  payload,
}: PropsWithChildren<{ payload: IRow.Payload; index: number }>) {
  const { left, right } = payload;

  const isNeedDescriptionPadding = !!(right.title || right.subTitle);

  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          <Row>
            <Col md={12}>
              <h6 style={Style.gray}>{left.title}</h6>
            </Col>

            {left.subTitle ? <Col md={12}>{left.subTitle}</Col> : ''}
          </Row>
        </Col>
        <Col sm={12} md={9}>
          <Row>
            <Col md={10}>
              {right.title ? <h4>{right.title}</h4> : ''}

              {right.subTitle ? <i style={Style.gray}>{right.subTitle}</i> : ''}
              {right.author ? <i style={Style.gray}>{right.author}</i> : ''}
              {createSkillKeywords(right.skillKeywords)}
              {right.link ? (
                <i style={Style.black}>
                  코드 : <HrefTargetBlank url={right.link} text={right.link} />
                </i>
              ) : (
                ''
              )}
            </Col>
            <Col md={2}>
              <Button color="primary" size="sm" id={`toggler_${index}`}>
                상세설명
              </Button>
            </Col>
          </Row>
          <Row>
            <UncontrolledCollapse toggler={`#toggler_${index}`}>
              {right.descriptions ? (
                <CommonDescription
                  descriptions={right.descriptions}
                  option={{ padding: isNeedDescriptionPadding }}
                />
              ) : (
                ''
              )}
            </UncontrolledCollapse>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

function createSkillKeywords(skillKeywords?: string[]) {
  if (!skillKeywords) {
    return '';
  }
  return (
    <div>
      {skillKeywords.map((keyword, index) => (
        <Badge
          style={Style.skillKeywordBadge}
          key={index.toString()}
          color="secondary"
          className="mr-1"
        >
          {keyword}
        </Badge>
      ))}
    </div>
  );
}
