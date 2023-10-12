export default function Editor({ $target, initialState }){
    const $editer = document.createElement('div')
    $editer.className = "editorDiv"
    $target.appendChild($editer)

    this.state = initialState

    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        $editer.innerHTML = `
            <input type="text" name="title" class="editorTitle" value="" placeholder="UnTitle" autofocus />
            <textarea name="content" class="editorContent" placeholder="제목을 입력하세요" autofocus></textarea>
        `
    }
    
    this.render()
}