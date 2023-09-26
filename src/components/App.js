import Editor from "./editor/Editor.js";
import PostPage from "./sidebar/PostPage.js";

export default function App({ $target }){
    const $listContainer = document.createElement('div')
    $listContainer.className = 'listContainer'
    const $rendingContainer = document.createElement('div')
    $rendingContainer.className = 'rendingContainer'

    $target.appendChild($listContainer)
    $target.appendChild($rendingContainer)

    const testData = [
        {
            "id": 1, // Document id
            "title": "노션을 만들자", // Document title
            "documents": [
                {
                    "id": 2,
                    "title": "블라블라",
                    "documents": [
                        {
                            "id": 3,
                            "title": "함냐함냐",
                            "documents": []
                        }
                    ]
                }
            ]
        },
        {
            "id": 4,
            "title": "hello!",
            "documents": []
        },
    ]

    new PostPage({
        $target: $listContainer,
        initialState: testData  
    })

    new Editor({
        $target: $rendingContainer
    })
}