export interface AccessedTopic {
  id: string;
  title: string;
  description: string;
  sourceLanguage: number;
  targetLanguage: number;
  reatedDateTimeUtc: string;
  updatedDateTimeUtc?: string;
}
