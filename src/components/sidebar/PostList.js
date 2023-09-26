export default function PostList({ $target, data }){
    const $postList = document.createElement('div')
    $postList.className = 'postList'
    $target.appendChild($postList)

    this.createTreeView = (data) => {
        let str = ''
        for(const key in data){
            if(data[key].documents.length > 0) {
                str += `<li class="dataList">📃${data[key].title}
                    <button class="addBtn">➕</button>
                    <button class="delBtn">🗑️</button>
                    <ul>${this.createTreeView(data[key].documents)}</ul>
                </li>`
            } else {
                str += `<li class="dataList">📃${data[key].title}
                    <button class="addBtn">➕</button>
                    <button class="delBtn">🗑️</button>
                </li>`
            }
        }
        return str
    }

    $postList.innerHTML = `
        <ul>
            ${data.map(item => `
                <li class="dataList">📃${item.title}
                    <button class="addBtn">➕</button>
                    <button class="delBtn">🗑️</button>
                </li>
                ${item.documents.length > 0 ? `<ul>${this.createTreeView(item.documents)}</ul>` : ''}
            `).join('')}
        </ul>
    `
}