const List = ({shownPersons}) => (
  <div>
    <h2>Numbers</h2>
    {shownPersons.map(p => <p key={p.name}>{p.name} {p.number}</p>)}
  </div>
)

export default List
