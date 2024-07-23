import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Today from './pages/Today'
import Developer from './pages/Developer'
import Webd from './pages/Webd'
import Website from './pages/Website'
import Gsap from './pages/Gsap'
import Port from './pages/Port'
import Youtube from './pages/Youtube'
import Channel from './pages/Channel'
import Video from './pages/Video'
import Search from './pages/Search'
import Not from './pages/Not'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/today' element={<Today />} />
        <Route path='/developer' element={<Developer />} />
        <Route path='/webd' element={<Webd />} />
        <Route path='/website' element={<Website />} />
        <Route path='/gsap' element={<Gsap />} />
        <Route path='/port' element={<Port />} />
        <Route path='/youtube' element={<Youtube />} />
        <Route path='/channel/:channelId' element={<Channel />} />
        <Route path='/video/:videoId' element={<Video />} />
        <Route path='/search/:searchId' element={<Search />} />
        <Route path='*' element={<Not />} />

        {/* element prop을 사용하여 해당 경로에 대한 컴포넌트를 지정합니다.
        나머지 <Route> 컴포넌트도 동일한 방식으로 설정됩니다. 예를 들어, /video/:videoId 경로는 Video 컴포넌트를, /channel/:channelId 경로는 Channel 컴포넌트를, 
        그리고 /search/:searchId 경로는 Search 컴포넌트를 렌더링합니다. :videoId, :channelId, :searchId는 경로 파라미터를 나타내며, 실제로 해당 변수에 따라 다른 콘텐츠를 렌더링할 수 있습니다. */}


      </Routes>
    </BrowserRouter>
  )
}

export default App