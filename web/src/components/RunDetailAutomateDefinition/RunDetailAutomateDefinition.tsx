import {useCallback, useEffect} from 'react';
import {DownloadOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import {downloadFile} from 'utils/Common';
import useDefinitionFile from 'hooks/useDefinitionFile';
import {ResourceType} from 'types/Resource.type';
import Test from 'models/Test.model';
import * as S from './RunDetailAutomateDefinition.styled';
import {FramedCodeBlock} from '../CodeBlock';

interface IProps {
  test: Test;
}

const RunDetailAutomateDefinition = ({test: {id, version}}: IProps) => {
  const {definition, loadDefinition} = useDefinitionFile();

  const onDownload = useCallback(() => {
    downloadFile(definition, 'test_definition.yaml');
  }, [definition]);

  useEffect(() => {
    loadDefinition(ResourceType.Test, id, version);
  }, [id, loadDefinition, version]);

  return (
    <S.Container>
      <S.Title>Test Definition</S.Title>
      <FramedCodeBlock title="Preview your YAML file" value={definition} language="yaml" />
      <S.Footer>
        <Button data-cy="file-viewer-download" icon={<DownloadOutlined />} onClick={onDownload} type="primary">
          Download File
        </Button>
      </S.Footer>
    </S.Container>
  );
};

export default RunDetailAutomateDefinition;