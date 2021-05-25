import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const ItemContainer = styled.div`
  margin: 15px 0;
`;

const Item = styled.span`
    margin: 0 5px 0 0;
    font-size: 12px;
    opacity: 0.7;
`;

const Divider = styled.span`
  margin: 0 10px;
  opacity: 0.7;
`;

const COverview = styled.p`
  font-size: 12px;
  width: 50%;
  opacity: 0.7;
`;


//{  }
const Overview = (props) => {

    const { data : { production_companies, production_countries, overview } } = props;

    return(
        <>
            <ItemContainer> 
                <Item>
                Production :
                {production_companies && production_companies.map((m, index)=>
                    (index === production_companies.length -1 ) ? ` ${m.name}` : ` ${m.name} /`
                )}
                </Item>
                <Divider>•</Divider>
                <Item>
                {production_countries && production_countries.map((m, index)=>
                    (index === production_countries.length -1 ) ? ` ${m.iso_3166_1}` : `${m.iso_3166_1} /`
                )}
                </Item>
            </ItemContainer>
            <COverview>{overview}</COverview> 
        </>
    )
};
  

  
export default Overview;
  