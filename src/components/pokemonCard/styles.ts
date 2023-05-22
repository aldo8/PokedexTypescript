import { css } from 'emotion';

export const cardContainer = css`
  display:grid;
  grid-template-columns:repeat(3,1fr) ;
  gap:1em;
`
export const cardContent = css `
  display:block;
  background:white;
  border:1px solid black;
  border-radius:16px;
  max-width:30em !important;
  .cardImage{
    max-width: 100%;
    height: auto;
  }
  .cardId{
    font-weight:bold;
    font-size:2em;
    text-transform:uppercase;
    text-align:center;
    padding:10px;
    margin:0;
  }
  p{
    font-weight:bold;
    font-size:3em;
    text-transform:uppercase;
    text-align:center;
    padding:10px;
    margin:0;
  }
`

export const cardFooter = css`
  padding:0.5rem;
  justify-content: center;
  display: flex;
  .type{
    padding:10px;
    color:#F5F5F5;
    border: 1px black solid;
    margin: 10px;
    font-weight: bold;
    border-radius: 8px;
    width:40%;
    text-align: center;
  }
`

