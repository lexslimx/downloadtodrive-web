import { IYoutubeDirectDownloadLink } from "./youtubeDirectDownloadLink";

export interface IYoutubeDownloadRequest {
  "title": string,
  "webSite": number,
  "uri": string,
  "formatCode": number,
  "isEncrypted": boolean,
  "is3D": boolean,
  "isAdaptive": boolean,
  "adaptiveKind": number,
  "audioBitrate": number,
  "resolution": number,
  "format": number,
  "audioFormat": number,
  "fileExtension": string,
  "fullName": string
}
