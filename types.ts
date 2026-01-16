
export interface Option {
  text: string;
  impact: number;
  feedback: string;
}

export interface Scenario {
  id: number;
  category: 'Privacy' | 'Security' | 'Reputation' | 'Etiquette';
  question: string;
  options: Option[];
}

export type ViewState = 'landing' | 'quiz' | 'summary';
