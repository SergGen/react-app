import {List, ListItem } from "@mui/material";
import PropTypes from "prop-types";
import {CustomLink} from "./CustomLink";

/**
 * Презентационный компонент отрисовки элементов меню.
 * @param {Array} menu - массив с параметрами элементов меню.
 * @returns {JSX.Element}
 * @constructor
 */
export const MenuItems = ({menu}) => {

    return (
        <List sx={{display: 'flex'}}>
            {menu.map(({name, path, linkMatch}, index) =>
                <ListItem key={index} sx={{mr: '15px'}}>
                    <CustomLink to={path} linkMatch={linkMatch}>{name}</CustomLink>
                </ListItem>
            )}
        </List>
    );
}

MenuItems.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        linkMatch: PropTypes.bool.isRequired
        })).isRequired
}