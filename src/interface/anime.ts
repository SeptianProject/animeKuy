interface Titles {
     type: string;
     title: string;
}

interface DateAired {
     day: number;
     month: number;
     year: number;
}

interface Aired {
     from: string
     to: string
     prop: {
          from: DateAired;
          to: DateAired;
     }
}

interface Broadcast {
     day: string;
     time: string;
     timezone: string;
}

interface BaseEntity {
     mal_id: number;
     type: string;
     name: string;
     url: string;
}

interface ImageVariants {
     jpg: {
          image_url: string;
          small_image_url: string;
          large_image_url: string;
     },
     webp: {
          image_url: string;
          small_image_url: string;
          large_image_url: string;
     }
}

export interface JikanAPIResponse {
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

export interface AnimeData {
     mal_id: number;
     url: string;
     images: ImageVariants
     titles: Titles
     title: string;
     title_english: string;
     title_japanese: string;
     title_synonyms: string[];
     type: string;
     episodes: number;
     status: string;
     aired: Aired;
     duration: string;
     rating: string;
     score: number;
     rank: number;
     popularity: number;
     favorites: number;
     synopsis: string;
     backgroud: string;
     season: string;
     year: number;
     broadcast: Broadcast
     producers: BaseEntity[]
     licensors: BaseEntity[]
     studios: BaseEntity[]
     genres: BaseEntity[]
     themes: BaseEntity[]
     demographics: BaseEntity[]
};