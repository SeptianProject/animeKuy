export const animeDataHelpers = {
     getMainTitle: (anime: AnimeData): string => {
          if (anime.title_english) return anime.title_english;
          if (anime.title_japanese) return anime.title_japanese;
          return anime.title || 'Unknown Title';
     },

     getImageUrl: (images: ImageVariants): string => {
          return images.webp.large_image_url ||
               images.webp.image_url ||
               images.jpg.large_image_url ||
               images.jpg.image_url;
     },

     getAiredDate: (aired: Aired): string => {
          const from = aired.prop.from;
          const to = aired.prop.to;

          if (!from.year) return 'Not yet aired';

          const fromDate = `${from.year}-${String(from.month).padStart(2, '0')}-${String(from.day).padStart(2, '0')}`;

          if (!to.year) return `From ${fromDate}`;

          const toDate = `${to.year}-${String(to.month).padStart(2, '0')}-${String(to.day).padStart(2, '0')}`;
          return `${fromDate} to ${toDate}`;
     },

     getBroadcastInfo: (broadcast: Broadcast): string => {
          const parts = [];
          if (broadcast.day) parts.push(broadcast.day);
          if (broadcast.time) parts.push(`at ${broadcast.time}`);
          if (broadcast.timezone) parts.push(`(${broadcast.timezone})`);

          return parts.length > 0 ? parts.join(' ') : 'Broadcast information unavailable';
     },

     getEntityNames: (entities: BaseEntity[]): string => {
          return entities.length > 0
               ? entities.map(entity => entity.name).join(', ')
               : 'None';
     },

     getSynopsisExcerpt: (synopsis: string): string => {
          if (!synopsis) return 'No synopsis available';
          const firstSentence = synopsis.split('.')[0];
          return firstSentence ? `${firstSentence}.` : synopsis;
     },
}


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

export interface ImageVariants {
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
     trailer: {
          youtube_id: string;
          url: string;
          embed_url: string;
     }
     approved: boolean;
     titles: Titles
     title: string;
     title_english: string;
     title_japanese: string;
     title_synonyms: string[];
     type: string;
     source: string;
     episodes: number;
     status: string;
     airing: boolean;
     aired: Aired;
     duration: string;
     rating: string;
     score: number;
     scored_by: number;
     rank: number;
     popularity: number
     members: number;
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