import { FC } from "react";
import { AppBar, Box, Container, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { useRouter } from "next/router";

const pages = [{name:'Home',path:'/pokemon'}, {name:'Pokemon Type',path:'/pokemon/type'}];
const Appbar : FC = () => {
  const router = useRouter()
  return (
    <AppBar position="static" style={{background:'#FFFFFF'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <MenuItem key={page.name} >
                  <Typography style={{color:'#E6AB09'}} textAlign="center" onClick={() => router.push(page.path)}>{page.name}</Typography>
                </MenuItem>
              ))}
              </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Appbar