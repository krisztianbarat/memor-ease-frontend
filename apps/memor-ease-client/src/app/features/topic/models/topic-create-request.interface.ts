import { TopicDictionaryCreateRequest } from './topic-dictionary-create-request.interface';
import { TopicUpsertRequest } from './topic-upsert-request.interface';

export interface TopicCreateRequest extends TopicUpsertRequest {
  topicDictionaries: TopicDictionaryCreateRequest[];
}
