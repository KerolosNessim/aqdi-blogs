export interface Blog {
  id: number;
  title: string;
  description: string;
  slug: string;
  image: string;
  status: string;
  timePublish: string | null;
  isActive: number;
  metaTitle: string;
  metaDescription: string;
}

export interface PaginationData {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  from: number;
  to: number;
}