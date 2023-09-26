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

    // TODO: 컴포넌트화 시키기
    const $newBtn = document.createElement('button')
    $newBtn.textContent = '+ New Page'
    $newBtn.className = 'addNew'
    $page.appendChild($newBtn)
}