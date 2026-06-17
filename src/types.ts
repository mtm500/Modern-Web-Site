export type PageId = 
  | 'home'
  | 'process'
  | 'projects'
  | 'pricing'
  | 'contact'
  | 'custom-website'
  | 'easy-updates'
  | 'secure-setup'
  | 'pro-email'
  | 'low-costs'
  | 'privacy-policy'
  | 'terms-of-use'
  | 'project-apex'
  | 'project-lumina'
  | 'project-bright'
  | 'project-cornerstone'
  | 'project-elevate'
  | 'project-mainstreet';

export interface ProcessSubPage {
  id: PageId;
  label: string;
}
