import './App.css';
import * as React from 'react';
import { Button, ButtonGroup, Dialog, Container, Grid } from '@mui/material';

function Header(){
  return(
    <header>
      <h1>Welcome :)</h1>
    </header>
  )
}

function Nav(){
  return(
    <nav>
      <ol>
        <li>html</li>
        <li>css</li>
      </ol>
    </nav>
  )
}

function Article(){
  return(
    <article>
      <h2>Welcome</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
      <ButtonGroup>
      <Button variant='outlined'>Create</Button>
      <Button variant='outlined'>Update</Button>
      </ButtonGroup>
      <Button variant='outlined' style={{ marginLeft:'10px' }}>Delete</Button>
    </article>
  )
}


function App() {
  return (
    <div className="App">
      <Container fixed >
      <Header />
      <Grid container>
        <Grid item xs={2}>
          <Nav />
      <Nav />
        </Grid>
        <Grid item xs={10}>
      <Article />
      </Grid>
      </Grid>
      </Container>
    </div>
  );
}

export default App;
