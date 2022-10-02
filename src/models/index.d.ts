import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type SocialPostProfMetaData = {
  readOnlyFields: 'updatedAt';
}

export declare class SocialPostProf {
  readonly id: string;
  readonly author?: string | null;
  readonly text?: string | null;
  readonly createdAt?: string | null;
  readonly likes?: number | null;
  readonly topic?: string | null;
  readonly class?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SocialPostProf, SocialPostProfMetaData>);
  static copyOf(source: SocialPostProf, mutator: (draft: MutableModel<SocialPostProf, SocialPostProfMetaData>) => MutableModel<SocialPostProf, SocialPostProfMetaData> | void): SocialPostProf;
}