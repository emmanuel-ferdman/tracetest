import {TAssertion} from './Assertion.types';
import {Model, TTestSchemas} from './Common.types';

export type TRawTestDefinition = TTestSchemas['TestDefinition'];

export type TTestDefinitionEntry = {
  selector: string;
  assertionList: TAssertion[];
};

export type TTestDefinition = Model<
  TRawTestDefinition,
  {
    definitionList: TTestDefinitionEntry[];
    definitions?: TRawTestDefinition;
  }
>;