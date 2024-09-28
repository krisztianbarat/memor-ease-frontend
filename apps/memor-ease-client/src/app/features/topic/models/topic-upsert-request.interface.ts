export interface TopicUpsertRequest {
  sourceLanguage?: number;
  targetLanguage?: number;
  title: string;
  description?: string;
  level?: number;
}
