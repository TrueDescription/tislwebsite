export default interface Publication{
    title: string;
    authors: string[];
    year: number;
    publicationType: string;
    links: {
      pdf?: string;
      code?: string;
      cite?: string;
      project?: string;
    };
    slug: string;
  }