import React, { setState } from "react";
import DrawIcon from "@mui/icons-material/Draw";
import CollectionsIcon from "@mui/icons-material/Collections";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, handleClose }) {
  return (
    <div>
      <Drawer anchor={"right"} open={isOpen} onClose={handleClose}>
        <Box role="presentation" onClick={handleClose} onKeyDown={handleClose}>
          <List>
            <ListItem disablePadding>
              <Link to="/draw">
                <ListItemButton>
                  <ListItemIcon>
                    <DrawIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Draw"} />
                </ListItemButton>
              </Link>
            </ListItem>

            <ListItem disablePadding>
              <Link to="/products">
                <ListItemButton>
                  <ListItemIcon>
                    <CollectionsIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Gallery"} />
                </ListItemButton>
              </Link>
            </ListItem>

            <ListItem disablePadding>
              <Link to="/cart">
                <ListItemButton>
                  <ListItemIcon>
                    <AddShoppingCartIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Cart"} />
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
