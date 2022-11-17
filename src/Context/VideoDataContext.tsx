import React, { useContext, useState, useEffect } from "react";
import { IVideo } from "../data/types";

interface IProps {
  children: React.ReactNode;
}

interface IVideoContext {
  videos: Array<IVideo>;
}

export const VideoDataContext = React.createContext<IVideoContext>(null);

export const useVideoData = () => useContext(VideoDataContext);

export const VideoDataProvider = (props: IProps) => {
  const { children } = props;

  const [videos, setVideos] = useState<[IVideo]>();

  const url = "https://my-fr4ncis-bucket.s3.amazonaws.com/TestData.json";

  const getAllVideos = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setVideos(data.testData))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllVideos();
  }, []);

  return (
    <VideoDataContext.Provider
      value={{
        videos,
      }}
    >
      {children}
    </VideoDataContext.Provider>
  );
};
