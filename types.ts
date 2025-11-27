import React from 'react';

export enum Stage {
  INTRO = 0,
  STATS = 1,
  ORIGIN = 2,
  QUEST_LOG = 3,
  BOSS_RAID_1 = 4,
  BOSS_RAID_2 = 5,
  SKILL_TREE = 6,
  SPECIAL_ABILITY = 7,
  PARTY_REVIEW = 8,
  CONTACT = 9
}

export interface StatData {
  subject: string;
  A: number;
  fullMark: number;
}

export interface QuestItem {
  id: string;
  year: string;
  title: string;
  role: string;
  description: string[];
  type: 'main' | 'side';
}

export interface SkillNode {
  category: string;
  skills: string[];
  icon: React.ElementType;
}

export interface PartyMember {
  role: string;
  name: string;
  quote: React.ReactNode;
}