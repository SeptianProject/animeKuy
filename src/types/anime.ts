export type JikanAPIResponse = {
     data: AnimeData[];
     pagination: {
          last_visible_page: number;
          has_next_page: boolean;
          current_page: number;
          items: {
               count: number;
               total: number;
               per_page: number;
          };
     };
};

export type AnimeData = {
     mal_id: number;
     url: string;
     images: {
          jpg: {
               image_url: string;
               small_image_url: string;
               large_image_url: string;
          };
          webp: {
               image_url: string;
               small_image_url: string;
               large_image_url: string;
          };
     };
     title: string;
     title_english: string | null;
     title_japanese: string | null;
     type: string;
     episodes: number | null;
     status: string;
     score: number;
     synopsis: string;
     season: string | null;
     year: number | null;
};

export type AnimeList = {
     id: number,
     url: string
     image: string
}