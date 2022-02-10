import {ListItemButton, ListItemText} from "@mui/material";
import {Link as RouterLink, useMatch} from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Презентационный компонент ссылки с выделением активной
 * @param {string} children - Текст в ссылку
 * @param {string} to - путь для навигации и проверки активной ссылки
 * @param {boolean} linkMatch - признак для полного сравнения ссылок
 * @returns {JSX.Element}
 * @constructor
 */
export const CustomLink = ({children, to, linkMatch}) => {
    let match = useMatch({path: to, caseSensitive: true, end: linkMatch});

    return (
        <ListItemButton component={RouterLink} selected={!!match} size="large" to={to}>
            <ListItemText>{children}</ListItemText>
        </ListItemButton>
    );
}

CustomLink.propTypes = {
    children: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    linkMatch: PropTypes.bool.isRequired
}