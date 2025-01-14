export default interface Publication {
  id: number;
  authors: string[] | string;
  date: string;
  publication_types: string[];
  publication: string;
  publicationShort: string;
  title: string;
  url_pdf: string;
  abstract: string;
  url_preprint: string;
  url_code: string;
  url_dataset: string;
  url_poster: string;
  url_project: string;
  url_slides: string;
  url_source: string;
  url_video: string;
  cite: string;
}