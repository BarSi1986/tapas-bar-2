import React from 'react'
import styled from 'styled-components'

const MapWrapper = styled.div`
background: black;
border: none;
height: 450px;
width: 100%;
position: relative;
overflow: hidden;
`

const Frame = styled.iframe`
border: none;
filter: grayscale(100%);
opacity: .7;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
`


const Map = () => {
    return (
        <MapWrapper>
            <Frame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d133566.15082569676!2d-0.24770125673546808!3d51.53447811324713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondyn%2C%20Wielka%20Brytania!5e0!3m2!1spl!2spl!4v1579949737041!5m2!1spl!2spl"></Frame>
        </MapWrapper >
    )
}

export default Map
