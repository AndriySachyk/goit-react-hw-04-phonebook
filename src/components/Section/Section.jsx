import PropTypes from 'prop-types';
import { WrapSection } from './Section-style';


export const Section = ({title, children}) => {
    return (
        <> 
            <WrapSection>
                <h2>{title}</h2>
                {children}
            </WrapSection>
            
        </>
    )
}


Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}