// FIX: Import React to use React.ReactNode type.
import React from 'react';

export enum ExerciseType {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  DRAG_AND_DROP = 'DRAG_AND_DROP',
  TRUE_FALSE = 'TRUE_FALSE',
  HIGHLIGHT_TEXT = 'HIGHLIGHT_TEXT',
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  illustration: React.ReactNode;
  color: string;
  sections: Section[];
}

export type Section =
  | ExplanationSection
  | PhrasesSection
  | DialogueSection
  | ExerciseSection;

export interface BaseSection {
  title: string;
}

export interface ExplanationSection extends BaseSection {
  type: 'explanation';
  content: string[];
}

export interface PhrasesSection extends BaseSection {
  type: 'phrases';
  items: {
    en: string;
    id: string;
  }[];
}

export interface DialogueSection extends BaseSection {
  type: 'dialogue';
  intro: string;
  lines: {
    speaker: string;
    text: string;
  }[];
}

export interface ExerciseSection extends BaseSection {
  type: 'exercise';
  exerciseType: ExerciseType;
  data: any;
}

export interface MultipleChoiceData {
  instruction: string;
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
}

export interface DragAndDropData {
  instruction: string;
  correctOrder: string[];
  scrambled: string[];
}

export interface TrueFalseData {
  instruction: string;
  statements: {
    statement: string;
    isTrue: boolean;
  }[];
}

export interface HighlightTextData {
  instruction: string;
  text: string;
  parts: {
    text: string;
    type: 'thesis' | 'argument' | 'reiteration';
  }[];
}