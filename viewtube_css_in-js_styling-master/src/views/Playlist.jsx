import React from "react";
import styled from "styled-components";
import data from '../data/videoData.json';
import moment from 'moment';
import Chip from "../component/Chip";
import Card from "../component/Card";

export default function Videos(props) {

    // Need to write component code for Categories using styled component by replacing `null` value
    const Categories = styled.div`
        display:inline;
    `;

    // Need to write component code for VideoList using styled component by replacing `null` value
    const VideoList = styled.div`
        display: grid;
        grid-template-columns: 200px;
        grid-gap: 15px;
    `;

    // Need to write component code for VideoContent using styled component by replacing `null` value
    const VideoContent = styled.div`
        display:flex;
        margin-right: 5px;
        margin-left: 5px;
    `;

    // Need to write component code for Span using styled component by replacing `null` value
    const Span = styled.span`
        color: white;
    `;
    
    return (
        <div>
            <Categories>
                <Chip>All</Chip>
                <Chip>Electronics</Chip>
                <Chip>Computers</Chip>
                <Chip>Mechanics</Chip>
                <Chip>Aeronautics</Chip>
                <Chip>Metallurgy</Chip>
            </Categories>
            <VideoList>
                    {data.items.map((post) => {
                        return <Card 
                        src={post.snippet.thumbnails.standard.url} 
                        alt={post.snippet.title} 
                        title={post.snippet.title}
                        subtitle={post.snippet.channelTitle}
                        >
                            <div>
                                <VideoContent>
                                    <Span>{post.statistics.viewCount} Views  </Span>
                                    <Span>{moment(post.snippet.publishedAt).fromNow()}</Span>
                                </VideoContent>
                            </div>
                        </Card>
                    })}
            </VideoList>
        </div>
    )
}