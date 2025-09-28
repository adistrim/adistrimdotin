export interface Project {
  _id: string;
  title: string;
  description: string;
  link?: string;
  github: string;
  tags?: string[];
}
