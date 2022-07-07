import React from "react";
import data from '../data/videoData.json';
import moment from 'moment';
import FilterVideos from "../components/FilterVideos";
import VideoList from "../components/VideosList";

// Try to replace existing code with above imported components
export default function Videos(props) {

    return (
        <div>
            <div>
                <FilterVideos/>
            </div>
            <div>
                    {data.items.map((post) => {
                        return <div>
                            <img src={post.snippet.thumbnails.standard.url} alt={post.snippet.title} height={200} width={250}></img>
                            <div>
                                <h4>{post.snippet.title}</h4>
                                <h5>{post.snippet.channelTitle}</h5>
                                <div>
                                    <span>{post.statistics.viewCount} Views  </span>
                                    <span>{moment(post.snippet.publishedAt).fromNow()}</span>
                                    {/* <span>{moment.duration(post.contentDetails.duration, "minutes")}</span> */}
                                </div>
                            </div>
                        </div>
                    })}
            </div>
        </div>
    )
}