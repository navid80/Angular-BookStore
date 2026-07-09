export interface BookModel {
    id: number;
    title: string;
    slug: string;
    categoryName: string;
    categorySlug: string;
    publishedYear: number;
    pageCount: number;
    isFree: boolean;
    coverImagePath?: string | null;
    authorNames: string[];
}