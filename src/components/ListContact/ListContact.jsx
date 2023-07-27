import PropTypes from 'prop-types';
import { ListContactItem } from "components/ListContactItem/ListContactItem"
import { List } from './ListContact-style';


export const ListContact = ({contacts, deleteContact})=>{

        return (
            <>
                <List>
                    {contacts.map(({ id, name, number }) =>
                        <ListContactItem
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                        deleteContact={deleteContact}
                        /> )}
                </List>
            </>
        )
    }


ListContact.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })),
    deleteContact:PropTypes.func.isRequired
}