import React from 'react';
import data from "./data.json"
import { Fade } from 'react-reveal';
import { Link } from 'react-scroll';

interface IHeaderLinkProps {

}


const HeaderLink:React.FC<IHeaderLinkProps>= () => {
    return (
      <nav className="navigation">
      {data.header_data.map((item, i) =>  (
            <Fade key={i} top delay={400 * i}>
                  <Link  smooth style={{ animationDelay: `${i * 0.1}s`}}to={item.toLowerCase()}>
                    {item}
                  </Link>
            </Fade> 
       ))}
    </nav>
    )
};

export default HeaderLink ;