import PostList from "./PostList.js"

export default function PostPage({ $target, initialState }){
    const $page = document.createElement('div')
    $page.className = 'documentDiv'

    $target.appendChild($page)

    this.state = initialState

    new PostList({ 
        $target: $page, 
        data: initialState
    })
}