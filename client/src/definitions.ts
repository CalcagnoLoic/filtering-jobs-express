export type JobInformations = {
  id: number;
  name: string;
  location: string;
  time: string;
  contract: string;
  level: string;
  position: string;
  role: string;
  id_jobs: number;
  url: string;
  isNew: {
    type: string;
    data: [number];
  };
  isFeatured: {
    type: string;
    data: [number];
  };
  tools: string;
  languages: string;
};

export type Details = {
  name: string;
  position: string;
  time: string;
  contract: string;
  location: string;
  newJob: number;
  feature: number;
};

export type Hashtag = {
  role: string;
  level: string;
  languages: string;
  tools: string;
};
