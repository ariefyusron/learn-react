import Header from './Header'

const Card = (props) => {
  return (
    <div id="Card">
      <Header title={`ini judul ${props.title}`} />
      {props.children}
    </div>
  )
}

export default Card;