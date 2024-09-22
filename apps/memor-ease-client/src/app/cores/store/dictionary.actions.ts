export namespace DictionaryActions {
  export class GetDictionaries {
    static type ='[DictionaryActions] GetDictionaries';
  }

  export class GetTopicDictionaries {
    static type ='[DictionaryActions] GetTopicDictionaries';
    constructor(public isDataFetchingNeedToReset?: boolean) {}
  }

  export class ResetState {
    static type ='[DictionaryActions] ResetState';
  }
}
