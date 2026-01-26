import type { VercelRequest, VercelResponse } from '@vercel/node';

const STEAM_API_KEY = process.env.VITE_STEAM_API_KEY;
const STEAM_ID = process.env.VITE_STEAM_ID;

export default async function handler(request: VercelRequest, response: VercelResponse) {
    if (!STEAM_API_KEY || !STEAM_ID) {
        return response.status(500).json({ error: 'Missing Steam Environment Variables' });
    }

    try {
        // 1. Get Player Summary (Status, Avatar, etc.)
        const summaryRes = await fetch(
            `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${STEAM_API_KEY}&steamids=${STEAM_ID}`
        );
        const summaryData = await summaryRes.json();
        const player = summaryData.response.players[0];

        if (!player) {
            return response.status(404).json({ error: 'Player not found' });
        }

        // 2. Get Recently Played Games (to find what we are playing or played last)
        // Note: GetPlayerSummaries also returns 'gameextrainfo' if currently playing.
        const isPlaying = !!player.gameextrainfo;
        const gameName = player.gameextrainfo || "Not Playing";
        const gameLink = player.gameid ? `https://store.steampowered.com/app/${player.gameid}/` : "#";

        let gameImage = "";
        let hoursPlayed = "";

        if (isPlaying && player.gameid) {
            // If playing, try to get image from Recently Played to get the logo/icon
            const recentRes = await fetch(
                `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${STEAM_API_KEY}&steamid=${STEAM_ID}&format=json&count=1`
            );
            const recentData = await recentRes.json();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const recentGame = recentData.response?.games?.find((g: any) => g.appid.toString() === player.gameid);

            if (recentGame) {
                // Construct image URL from hash if available, or fall back to store header
                // Custom logic: prefer store header for consistency
                gameImage = `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${player.gameid}/header.jpg`;

                if (recentGame.playtime_forever) {
                    hoursPlayed = Math.round(recentGame.playtime_forever / 60).toString();
                }
            } else {
                gameImage = `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${player.gameid}/header.jpg`;

                // Fallback: Try GetOwnedGames with filter for this specific game
                try {
                    const ownedRes = await fetch(
                        `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${STEAM_API_KEY}&steamid=${STEAM_ID}&include_appinfo=1&input_json=${encodeURIComponent(JSON.stringify({ appids_filter: [parseInt(player.gameid)] }))}`
                    );
                    const ownedData = await ownedRes.json();
                    if (ownedData.response && ownedData.response.games && ownedData.response.games.length > 0) {
                        const ownedGame = ownedData.response.games[0];
                        if (ownedGame.playtime_forever) {
                            hoursPlayed = Math.round(ownedGame.playtime_forever / 60).toString();
                        }
                    }
                } catch (e) {
                    console.error("Fallback fetch failed", e);
                }
            }
        }

        return response.status(200).json({
            isPlaying,
            game: {
                name: gameName,
                image: gameImage,
                link: gameLink,
                hoursPlayed
            },
            steamUrl: player.profileurl,
            status: player.personastate // 0 - Offline, 1 - Online, 2 - Busy, etc.
        });

    } catch (error) {
        console.error(error);
        return response.status(500).json({ error: 'Failed to fetch Steam data' });
    }
}
