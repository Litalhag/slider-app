import { FaQuoteRight } from 'react-icons/fa'

const Person = ({ personIndex, currentPerson, name, image, title, quote }) => {
  return (
    <article
      id={personIndex}
      className="slide"
      style={{
        transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
        opacity: personIndex === currentPerson ? 1 : 0,
        visibility: personIndex === currentPerson ? 'visible' : 'hidden',
      }}
    >
      <img src={image} alt={name} className="person-img" />
      <h5 className="name">{name}</h5>
      <p className="title">{title}</p>
      <p className="text">{quote}</p>
      <FaQuoteRight className="icon" />
    </article>
  )
}
export default Person
