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
const Overview = (props) => {

    const { data : { production_companies, production_countries, overview } } = props;

    return(
        <>
            <ItemContainer>
                {production_companies && production_companies.map((m, index) =>
                    <Item key={index}>
                        {m.name} / 
                    </Item>
                )}

                {production_countries && production_countries.map((m, index)=>
                    <Item key={index}>
                        {m.iso_3166_1}
                    </Item>
                )}
                </ItemContainer>
                
                
            <COverview>{overview}</COverview> 
        </>
    )
};
  

  
export default Overview;
  