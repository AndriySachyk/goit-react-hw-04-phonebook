import PropTypes from 'prop-types';
import { BoxFilter, LableFilter, InputFilter} from './FilterContact-style';



export const Filter= ({handleChangeFilter, value})=>{


return (
    <>
        <BoxFilter>
            <LableFilter htmlFor="filter">Find contacts by name</LableFilter>
            <InputFilter
                type="text"
                name="filter"
                onChange={handleChangeFilter}
                id="filter"
                value={value}
            />
        </BoxFilter>
        
    </>
)
}


Filter.propTypes = {
    handleChangeFilter: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}