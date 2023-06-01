import {ClockCircleOutlined, SettingOutlined, ToolOutlined} from '@ant-design/icons';
import {Space} from 'antd';
import {useMemo, useState} from 'react';
import {Handle, NodeProps, Position} from 'react-flow-renderer';

import {SemanticGroupNamesToText} from 'constants/SemanticGroupNames.constants';
import {SpanKindToText} from 'constants/Span.constants';
import {useAppSelector} from 'redux/hooks';
import SpanService from 'services/Span.service';
import TestSpecsSelectors from 'selectors/TestSpecs.selectors';
import {INodeDataSpan} from 'types/DAG.types';
import AssertionResultChecks from 'components/AssertionResultChecks/AssertionResultChecks';
import {selectOutputsBySpanId} from 'redux/testOutputs/selectors';
import TestOutputMark from 'components/TestOutputMark';
import {useTestSpecForm} from 'components/TestSpecForm/TestSpecForm.provider';
import CurrentSpanSelector from 'components/CurrentSpanSelector';
import {useSpan} from 'providers/Span/Span.provider';
import {useTestOutput} from 'providers/TestOutput/TestOutput.provider';
import {useTestRun} from 'providers/TestRun/TestRun.provider';
import * as S from './SpanNode.styled';

interface IProps extends NodeProps<INodeDataSpan> {}

const SpanNode = ({data, id, selected}: IProps) => {
  const assertions = useAppSelector(state => TestSpecsSelectors.selectAssertionResultsBySpan(state, data?.id || ''));
  const outputs = useAppSelector(state => selectOutputsBySpanId(state, data?.id || ''));
  const {failed, passed} = useMemo(() => SpanService.getAssertionResultSummary(assertions), [assertions]);
  const {isOpen: isTestSpecFormOpen} = useTestSpecForm();
  const {isOpen: isTestOutputFormOpen} = useTestOutput();
  const {matchedSpans} = useSpan();
  const {runLinterResultsBySpan} = useTestRun();
  const lintErrors = useMemo(
    () => SpanService.filterLintErrorsBySpan(runLinterResultsBySpan, data.id),
    [runLinterResultsBySpan, data.id]
  );
  const showSelectAsCurrent =
    !data.isMatched && !!matchedSpans.length && (isTestSpecFormOpen || isTestOutputFormOpen) && selected;
  const className = `${data.isMatched ? 'matched' : ''} ${showSelectAsCurrent ? 'selectedAsCurrent' : ''}`;
  const [isOpenLintErrors, setIsOpenLintErrors] = useState(false);

  return (
    <>
      <S.Container
        className={className}
        data-cy={`trace-node-${data.type}`}
        $matched={data.isMatched}
        $selected={selected}
      >
        <Handle id={id} position={Position.Top} style={{top: 0, visibility: 'hidden'}} type="target" />

        <S.TopLine $type={data.type} />

        {isOpenLintErrors && (
          <S.LintContainer className="nowheel nodrag">
            <S.LintCloseIcon onClick={() => setIsOpenLintErrors(false)} />
            <Space>
              <S.LintErrorIcon />
              <S.LintTitle level={4}>Analyzer errors</S.LintTitle>
            </Space>
            <S.LintBody>
              {lintErrors.map(lintError => (
                <div>
                  <S.LintText strong>{lintError.ruleName}</S.LintText>

                  {lintError.errors.map(error => (
                    <div>
                      <S.LintText type="secondary">- {error}</S.LintText>
                    </div>
                  ))}
                </div>
              ))}
            </S.LintBody>
          </S.LintContainer>
        )}

        <S.Header>
          <S.BadgeContainer>
            <S.BadgeType count={SemanticGroupNamesToText[data.type]} $hasMargin $type={data.type} />
          </S.BadgeContainer>
          <S.HeaderText>{data.name}</S.HeaderText>
          {!!lintErrors.length && <S.LintErrorIcon $isAbsolute onClick={() => setIsOpenLintErrors(prev => !prev)} />}
        </S.Header>

        <S.Body>
          <S.Item>
            <SettingOutlined />
            <S.ItemText>
              {data.service} {SpanKindToText[data.kind]}
            </S.ItemText>
          </S.Item>
          {Boolean(data.system) && (
            <S.Item>
              <ToolOutlined />
              <S.ItemText>{data.system}</S.ItemText>
            </S.Item>
          )}
          <S.Item>
            <ClockCircleOutlined />
            <S.ItemText>{data.duration}</S.ItemText>
          </S.Item>
        </S.Body>

        <S.Footer>
          {!!outputs.length && <TestOutputMark outputs={outputs} />}
          <AssertionResultChecks failed={failed} passed={passed} styleType="node" />
        </S.Footer>

        <Handle id={id} position={Position.Bottom} style={{bottom: 0, visibility: 'hidden'}} type="source" />
      </S.Container>
      {showSelectAsCurrent && <CurrentSpanSelector spanId={data.id} />}
    </>
  );
};

export default SpanNode;
