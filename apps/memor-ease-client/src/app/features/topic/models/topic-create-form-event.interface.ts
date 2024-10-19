import { TopicDictionaryUpsertRequest } from './topic-dictionary-upsert-request.interface';

export interface TopicCreateFormEvent {
  topicWord: TopicDictionaryUpsertRequest;
  valid: boolean;
}
