//Code React element here
const header = React.createElement('h1', {}, "An Awesome Person")
const paragraph = React.createElement('p', {}, "Who is learning React")
const listItemOne = React.createElement('li', {}, "JavaScript")
const listItemTwo = React.createElement('li', {}, "React")
const listItemThree = React.createElement('li', {}, "Movies")
const listItemFour = React.createElement('li', {}, "Ice cream")
const list = React.createElement('ul', {className: "me_interests"}, [listItemOne, listItemTwo, listItemThree, listItemFour])
const meInReact = React.createElement('div', {className: "me"}, [header, paragraph, list])

ReactDOM.render(
  meInReact,
  document.getElementById('main')
)
