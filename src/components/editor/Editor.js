export default function Editor({ $target }){
    const $editer = document.createElement('div')
    $editer.className = "editorDiv"
    $target.appendChild($editer)

    $editer.innerHTML = `
        <input type="text" name="title" class="editorTitle" value="" placeholder="UnTitle" autofocus />
        <textarea name="content" class="editorContent" placeholder="제목을 입력하세요" autofocus></textarea>
    `
}