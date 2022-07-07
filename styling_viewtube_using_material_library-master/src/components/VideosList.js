import React, {useEffect, useState} from 'react';
import moment from 'moment';
import Video from './Video';
import VideosList from '../data/videoData.json';

export default function VideoList() {

  const [videosColln, setVideoColln] = useState();

  useEffect(() => {
    let videos = VideosList?.items?.map(video => {
      video.snippet.relativeTime = moment(video.snippet.publishedAt, moment.defaultFormatUtc).fromNow();
      video.url = `http://www.youtube.com/watch?v=${video.id}`;
      return video;
    })
    setVideoColln(videos);
  }, []);

  return (
    <div>
      {/* Try to list the videos and make playlist by using imported `video` component*/}
    </div>
  )
}
