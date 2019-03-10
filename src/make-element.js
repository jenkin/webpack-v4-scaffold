import { join as _join } from 'lodash-es'
export default function makeElement() {
    let element = document.createElement('p')
    element.className = 'bold'
    element.innerText = _join(["It","works!"], ' ')
    return element
}
