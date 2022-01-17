// import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';
// import Util from '../common/Util';
import { EmptyRowCol } from '../common';
import { IResearch } from './IResearch';

export default function PresentationRow({
  payload,
}: PropsWithChildren<{ payload: IResearch.Payload }>) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => {
        return <CommonRows key={index.toString()} payload={serialize(item)} index={index} />;
      })}
    </EmptyRowCol>
  );
}

function serialize(item: IResearch.Item): IRow.Payload {
  return {
    left: {
      title: item.type,
    },
    right: {
      ...item,
    },
  };
}
