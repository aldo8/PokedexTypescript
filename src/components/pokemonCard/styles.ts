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
`

export const cardFooter = css`
  padding:0.5rem;
  .type{
    padding:10px;
    color:blue;
    border: 1px black solid;
  }
`

