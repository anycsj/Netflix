import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const COverview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;


//{  }
const Video = (props) => {

    const { data : { videos } } = props;
    return(
        <>
            <ItemContainer>
                { 
                    videos.results.length > 0 &&
                    <iframe id="player" type="text/html" width="640" height="360"
                    src={`https://www.youtube.com/embed/${videos.results[0].key}`}
                    frameborder="0"></iframe>
                }
           
            </ItemContainer>
        </>
    )
};

export default Video;