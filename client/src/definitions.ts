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
  name?: string;
  position: string;
  time: string;
  contract: string;
  location: string;
  newJob?: number;
  feature?: number;
  id?: number;
};

export type Hashtag = {
  role: string;
  level: string;
  languages: string;
  tools: string;
};

export type JobDetails = {
  name: string;
  position: string;
  location: string;
  contract: string;
  time: string;
  url: string;
  id_jobs: number;
  description_jobs: string;
  responsabilities: string;
  benefits: string;
};

export type FormChange = {
  formData: FormData;
  onChange: (name: any, value: any) => void;
};

type FormData = {
  name: string;
  url: string;
  location: string;
  time: string;
  contract: string;
  position: string;
  level: string;
  role: string;
  tools: string;
  languages: string;
  isNew: number;
  isFeatured: number;
  description_jobs: string;
  responsabilities: string;
  benefits: string;
};
