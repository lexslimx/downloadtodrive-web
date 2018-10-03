import { IYoutubeDirectDownloadLink } from "./youtubeDirectDownloadLink";

export interface IYoutubeDownloadRequest
{
    "youtubeLink": string;
    "quality": string;
    "title": string;
    "userId": string;
    "owner": string;
    "isFreeDownloadComplete": null,
    "isPremiumDownloadComplete": null,
    "youtubeDirectVideoLinks": IYoutubeDirectDownloadLink[]
}