export const SITE_TITLE = 'Daniel Duhnev - ML / MLOps Engineer';
export const SITE_DESCRIPTION =
  'ML / MLOps engineer in Barcelona. I build production ML and GenAI systems - and the infrastructure that keeps them running.';

export const NAME = 'Daniel Duhnev';
export const POSITIONING =
  'I build production ML and GenAI systems - and the infrastructure that keeps them running.';
export const EMAIL = 'daniduhnev@gmail.com';
export const GITHUB_URL = 'https://github.com/daniel-duhnev';
export const REPO_URL = 'https://github.com/daniel-duhnev/daniel-duhnev.github.io';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/daniel-duhnev';
export const CV_FILENAME = 'daniel-duhnev-cv.pdf';

/** BASE_URL-aware link helper — harmless no-op on a user site (base is ''), kept for portability. */
const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
export const href = (path: string) => `${base}${path.startsWith('/') ? path : `/${path}`}`;
