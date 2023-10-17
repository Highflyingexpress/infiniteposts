look at infinite scroll app
https://infiniteposts.vercel.app/

## FSD src/shared/api/postsApi.tsx

FSD - Also we can split this file and separate Api and hooks.

1.  move 'postApi' from 'shared' => 'app/api' or even to 'widgets/api'
2.  move hook 'useGetPostsQuery' => 'widget/..'
3.  move hook 'useGetPostQuery' => 'entities/post'

**Note: oldSchool with onScroll below**

// useEffect(() => {  
// const onScroll = () => {  
// const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight  
// if (scrolledToBottom && !isFetching) dispatch(setPage(page + 1))  
// }  
// document.addEventListener('scroll', onScroll)

// return function () {  
// document.removeEventListener('scroll', onScroll)  
// }  
// }, [page, isFetching])  
//
