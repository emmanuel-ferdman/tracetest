import Test from 'models/Test.model';
import {getServerBaseUrl} from 'utils/Common';

export enum CliCommandOption {
  Wait = 'wait',
  UseHostname = 'useHostname',
  UseCurrentEnvironment = 'useCurrentEnvironment',
  // UseId = 'useId',
  GeneratesJUnit = 'generateJUnit',
  useDocker = 'useDocker',
}

export enum CliCommandFormat {
  Pretty = 'pretty',
  Json = 'json',
}

export type TCliCommandEnabledOptions = Record<CliCommandOption, boolean>;

export type TCliCommandConfig = {
  options: TCliCommandEnabledOptions;
  format: CliCommandFormat;
  environmentId?: string;
  test: Test;
};

type TApplyProps = {
  command: string;
  test: Test;
  environmentId?: string;
  enabled: boolean;
};
type TApplyOption = (props: TApplyProps) => string;

const CliCommandService = () => ({
  applyOptions: {
    [CliCommandOption.Wait]: ({command, enabled}) => (enabled ? `${command} --wait-for-result` : command),
    [CliCommandOption.UseHostname]: ({command, enabled}) => {
      const baseUrl = getServerBaseUrl();
      return enabled ? `${command} -s ${baseUrl}` : command;
    },
    [CliCommandOption.UseCurrentEnvironment]: ({command, enabled, environmentId}) =>
      enabled && environmentId ? `${command} -e ${environmentId}` : command,
    // [CliCommandOption.UseId]: ({enabled, command, test: {id}}) => `${command} -d ${enabled ? id : `${id}.yaml`}`,
    [CliCommandOption.GeneratesJUnit]: ({command, enabled}) => (enabled ? `${command} --junit result.junit` : command),
    [CliCommandOption.useDocker]: ({enabled, command}) =>
      `${
        enabled
          ? 'docker run --rm -it -v$(pwd):$(pwd) -w $(pwd) --network host --entrypoint tracetest kubeshop/tracetest:latest -s http://localhost:11633/'
          : 'tracetest'
      } ${command}`,
  } as Record<CliCommandOption, TApplyOption>,
  getCommand({options, format, test, environmentId}: TCliCommandConfig) {
    const command = Object.entries(options).reduce(
      (acc, [option, enabled]) =>
        this.applyOptions[option as CliCommandOption]({command: acc, enabled, test, environmentId}),
      'test run -d test_definition.yaml'
    );

    return `${command} -o ${format}`;
  },
});

export default CliCommandService();