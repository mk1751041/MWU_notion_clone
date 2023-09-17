export default function Sidebar({ $target, initialState }){
    const $sidebar = document.createElement('div')

    this.state = initialState
    $target.append($sidebar)

    $sidebar.innerHTML = `
        <ul>
            ${this.state.map(item => `
                ${item.id}<li>${item.title}<li>
            `).join('')}
        </ul>
    `
    console.log($sidebar)
}