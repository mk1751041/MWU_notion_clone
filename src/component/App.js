import Editor from "./Editor.js";
import Sidebar from "./Sidebar.js";

export default function App({ $target }){
    new Editor({$target})
    new Sidebar({$target})
}