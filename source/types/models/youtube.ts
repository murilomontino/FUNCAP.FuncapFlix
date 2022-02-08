export interface YTPlaylistsAttributes {
	id?: string
	publishedAt: Date
	title: string
	description: string
	channelID: string
	img: string
}

export interface YTVideosAttributes {
	id?: number
	videoID: string
	publishedAt: Date
	categoria: string
	title: string
	description: string
	channelID: string
	img: string
	privacyStatus: string
	playlistID: string
}
