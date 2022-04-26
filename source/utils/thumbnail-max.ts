type Props = {
  url: string
  width: number
  height: number
}

interface Thumbnail {
  maxres?: Props
  standard?: Props
  high?: Props
  medium?: Props
  default?: Props
}
export const ThumbnailsMax = (thumbnail: Thumbnail) => {
  if (thumbnail.maxres) {
    return thumbnail.maxres.url
  } else if (thumbnail.standard) {
    return thumbnail.standard.url
  } else if (thumbnail.high) {
    return thumbnail.high.url
  } else if (thumbnail.medium) {
    return thumbnail.medium.url
  } else {
    return thumbnail.default.url
  }
}
