import Editor from "./Editor.js";
import Sidebar from "./Sidebar.js";

export default function App({ $target }){
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
        }
    ]
    new Editor({
        $target
    })
    new Sidebar({
        $target,
        initialState: testData  
    })
}