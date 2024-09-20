import { TopicDictionaryResponse } from "./topic-dictionary-response.interface";

export interface TopicResponse {
  createdDateTimeUtc: string;
  id: string;
  sourceLanguage: number;
  targetLanguage: number;
  title: string;
  topicDictionaries: TopicDictionaryResponse[];
  updatedDateTimeUtc: string;
}
