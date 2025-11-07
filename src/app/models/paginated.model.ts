import { Assignment } from './assignment.model';

// Décrit la réponse de l'API de pagination
export interface PaginatedAssignments {
  docs: Assignment[];
  totalDocs: number;
  limit: number;
  page: number;
  totalPages: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}
