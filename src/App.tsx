import { useEffect, useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';


export function App() {

  const [id, setId] = useState(1)

  function updateId(id: number) {
    setId(id)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <SideBar setId={updateId} />
      <Content selectedGenreID={id}/>

    </div>
  )
}