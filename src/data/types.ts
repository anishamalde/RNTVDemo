export type RootStackParamList = {
    LandingPage: undefined;
    Videos: {video: IVideo};
    VideoPlayerPage: {videoURL: string};
}

export interface IVideo {
    id: string;
    title: string;
    description: string;
    duration: Number;
    thumbURL: string;
    imgURL: string;
    videoURL: string;
    categories: Array<string>;
    channel_id: number;
  }