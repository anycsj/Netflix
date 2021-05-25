import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";



const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
  text-align: center;
`;

const Grid = styled.div`
 margin-top: 25px;
 display: grid;
 grid-template-columns: repeat(auto-fill, 125px);
 grid-gap: 25px;
`;

const Seasons = (props) => {

    const { data : { seasons } } = props;
    return(
      <Grid> 
      {
        seasons.map(m=>
                  
            <Link to={`/show/${m.id}/overview`}>
            <Container>
              <ImageContainer>
                <Image
                  bgUrl={
                    m.poster_path
                      ? `https://image.tmdb.org/t/p/w300${m.poster_path}`
                      : require("../assets/noPosterSmall.png")
                  }
                />
              </ImageContainer>
              <Title>
                {m.name}
              </Title>
            </Container>
          </Link>
        )
      }
      </Grid>
      
    )
};

export default Seasons;