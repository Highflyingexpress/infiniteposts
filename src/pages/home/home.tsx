import React from 'react'
import InfinitePosts from 'widgets/infinitePosts'
import { IPost } from 'shared/types/api/posts.interfaces'

type HomePage = {
  data: IPost[] | undefined
  isFetching: boolean
}

const Home = (props: HomePage) => {
  return (
    <div className="App">
      <div className="AppHeader">
        <div>
          <h3>React - RTK Query - Router v6 - JSONPlaceholder</h3>
          <h4>scrollin down is infinity here - caution - do not hurt your scrollin-finger</h4>
        </div>
      </div>
      <InfinitePosts data={props?.data} isFetching={props?.isFetching} />
    </div>
  )
}

export default Home
