import { ListItemButton, Menu, MenuItem } from '@mui/material';
import { AccountCircleOutlined as UserMenuIcon } from '@mui/icons-material';
import { useContext, useState } from 'react';
import { authContext } from '@services/Authentication';


const UserMenu = () => {

    const { currentUser, logout } = useContext(authContext);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const isOpen = Boolean(anchorEl);


    return (
        <>
            <ListItemButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                <UserMenuIcon />
            </ListItemButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={isOpen}
                onClose={() => setAnchorEl(null)}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem disabled>{currentUser?.firstName} {currentUser?.lastName}</MenuItem>
                <MenuItem onClick={() => logout()}>Logout</MenuItem>
            </Menu>
        </>
    )
}

export default UserMenu;