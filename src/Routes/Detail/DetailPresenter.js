import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import { Link, Route, withRouter } from "react-router-dom";
import Overview from "Components/Overview";
import Video from "Components/Video";
import Seasons from "Components/Seasons";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const InsideMenu = styled.div`
  margin: 20px 0px;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  margin-right: 20px;
  text-transform: uppercase;
  font-weight: 600;
  border: 2px solid #ffc93c;
  padding: 5px;
  border-radius: 3px;
  background-color: ${props => (props.active ? "#ffc93c" : "transparent")};
  color: white;
`;


const DetailPresenter = withRouter(({ location: { pathname }, result, loading, isMovie, error }) =>   
  loading ? (
    <>
      <Helmet>
        <title>Loading | SJ_flix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | SJ_flix
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.png")
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]} min
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
            <Divider>•</Divider>
            <Item>
              <button>
                <Link to={{ pathname : `https://www.imdb.com/title/${result.imdb_id}`}} target="_blank">IMDB</Link>
              </button>
            </Item>

          </ItemContainer>

          <InsideMenu>
          <List>
              <ListItem active={isMovie ? pathname === `/movie/${result.id}/overview`:
                            pathname === `/show/${result.id}/overview`}>
              <Link to={isMovie ? `/movie/${result.id}/overview`:
                        `/show/${result.id}/overview`}>Overview</Link>
              </ListItem>
              
              <ListItem active={isMovie ? pathname === `/movie/${result.id}/video`:
                            pathname === `/show/${result.id}/video`}>
              <Link to={isMovie ? `/movie/${result.id}/video`:
                        `/show/${result.id}/video`}>Video</Link>
              </ListItem>

              {
                !isMovie && result.seasons.length > 0 &&
                <ListItem active={pathname === `/show/${result.id}/seasons`}>
                <Link to={`/show/${result.id}/seasons`}>Seasons</Link>
                </ListItem>
              }

          </List>
          </InsideMenu>
          <Route path={isMovie ? "/movie/:id/overview" : "/show/:id/overview"}>
            <Overview data = {result}/>
          </Route>

          <Route path={isMovie ? "/movie/:id/video" : "/show/:id/video"}>
            <Video data = {result}/>
          </Route>

          {
            !isMovie && result.seasons.length > 0 &&
                        <Route path="/show/:id/seasons">
                          <Seasons data = {result}/>
                        </Route>
          }
         
        </Data>
      </Content>
    </Container>
  ));

DetailPresenter.propTypes = {
result: PropTypes.object,
loading: PropTypes.bool.isRequired,
error: PropTypes.string
};


export default DetailPresenter;