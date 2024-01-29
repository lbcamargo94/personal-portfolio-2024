interface IProject {
  name: string;
  decription: string;
  imageUrl: string[];
  deployUrl: string;
  githubUrl: string;
}

export interface IDataProjects {
  projects: IProject[];
}
