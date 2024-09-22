export interface AccessedTopic {
  id: string;
  title: string;
  sourceLanguage: number;
  targetLanguage: number;
  createdDateTimeUtc: string;
  updatedDateTimeUtc?: string;
}
