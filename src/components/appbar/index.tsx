import { FC, useState } from "react";
import { AppBar, Box, Container, Menu, MenuItem, Toolbar, Typography, Button } from "@material-ui/core";
import { useRouter } from "next/router";
import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";

const pages = [{name:'Home',path:'/pokemon',lang:'home'}, {name:'Pokemon Type',path:'/pokemon/type',lang:'pokemon-type'}];
const Appbar : FC = () => {
  const {t} = useTranslation("common" || "pokemon");
  const handleChangeLanguage = async (event:React.ChangeEvent<HTMLSelectElement>) => {
      await setLanguage(event.target.value);
    
  }
  const selectOptionStyle = {
    width:"5%",
    padding: "5px",
    borderRadius: "5px",
    margin: "5px"
  }

  return (
    <div >
    <div style={{display:"flex",justifyContent:"flex-end",marginRight:"15px",backgroundColor:"#f7f8f8"}}>
      <select style={selectOptionStyle} onChange={handleChangeLanguage}>
      <option value="id">Bahasa</option>
      <option value="en">English</option>
      </select>
    </div>
    <AppBar position="static" style={{background:'#FFFFFF'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <MenuItem key={page.name} >
                  <Typography style={{color:'#E6AB09'}} textAlign="center" onClick={() => router.push(page.path)}>{t(`${page.lang}`)}</Typography>
                </MenuItem>
              ))}
              </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  )
}
export default Appbar