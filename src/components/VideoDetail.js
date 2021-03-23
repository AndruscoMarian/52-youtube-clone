import React from 'react';

import {Paper, TextField} from '@material-ui/core';

const VideoDetail = ({videos}) =>{

    if(!videos) return <div>Loading...</div>

    const videoSrc = `https://www.youtube.com/embed/${videos.id.videoId}`;

    return(
        <React.Fragment>
            <Paper elevation={6} style={{height: '70%'}}>
                <iframe frameBorder='0' height='100%' width='100%' title='Video Player' src={videoSrc}/>
            </Paper>
            <Paper elevation={6} style={{padding: '15px'}}>
                <div variant='h4'>{ videos.snippet.title} - {videos.snippet.channelTitle}</div>
                <div variant='subtitle1'>{videos.snippet.channelTitle}</div>
                <div variant='subtitle2'>{videos.snippet.description}</div>
            </Paper>
        </React.Fragment>
    )
}

export default VideoDetail;