import { request } from "../../utils/api.js";
import Editor from "./Editor.js";

export default function EditorPage({ $target, initialState }) {
    const $page = document.createElement('div')

    this.state = initialState;

    const isNew = true
    const tempPost = {
        title: '123123',
        content: 'testtest'
    }

    new Editor({
        $target: $page,
        initialState: {
            title: '',
            content: ''
        },
        onEditing: () => {
            setTimeout(() => {
                if(isNew){
                    request('/documents', {
                        method: 'POST',
                        body: JSON.stringify(tempPost)
                    })
                } else {
                    request('/documents', {
                        method: 'PUT',
                        body: JSON.stringify(tempPost)
                    })
                }
            }, 1000)
        }
    })


    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        $target.appendChild($page)
    }

    this.render()
}