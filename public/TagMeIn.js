function open(root, value) {
 const element = document.createElement('article')
 text(element, value)
 root.appendChild(element)
 return element
}

function TagMeIn(root) {
 open(root, 0)
 open(root, 1)
 open(root, 2)
 open(root, 3)
 open(root, 4)
 open(root, 5)
 open(root, 6)
 open(root, 7)
}
