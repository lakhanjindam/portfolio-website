import type { VercelRequest, VercelResponse } from '@vercel/node';

// Jikan API - Free MyAnimeList API
// Docs: https://docs.api.jikan.moe/

interface AnimeData {
    mal_id: number;
    title: string;
    score: number | null;
    scored_by: number | null;
    status: string;
    episodes: number | null;
    images: {
        jpg: {
            large_image_url: string;
        };
    };
}

interface JikanResponse {
    data: AnimeData;
}

export default async function handler(request: VercelRequest, response: VercelResponse) {
    const { id } = request.query;

    if (!id || typeof id !== 'string') {
        return response.status(400).json({ error: 'Missing or invalid anime ID' });
    }

    try {
        // Fetch anime data from Jikan API
        const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);

        if (!res.ok) {
            return response.status(res.status).json({ error: 'Failed to fetch from Jikan API' });
        }

        const data: JikanResponse = await res.json();
        const anime = data.data;

        return response.status(200).json({
            id: anime.mal_id,
            title: anime.title,
            score: anime.score,
            scoredBy: anime.scored_by,
            status: anime.status,
            episodes: anime.episodes,
            image: anime.images?.jpg?.large_image_url || null
        });
    } catch (error) {
        console.error('Jikan API error:', error);
        return response.status(500).json({ error: 'Failed to fetch anime data' });
    }
}
