import PropTypes from 'prop-types';
import { ItemContact, ButtonDelete } from './ListContactItem-style';


export const ListContactItem = ({name, number, id, deleteContact}) => {
    return (
        <>
            
            <ItemContact key={id}>
                {name}: {number}
                <ButtonDelete onClick={() => deleteContact(id)}>Delete</ButtonDelete>
            </ItemContact>
        </>
    )
}

ListContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired
}