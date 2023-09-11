import { useEffect, useState } from 'react'
import { shortList, list, longList } from './data'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Person from './Person'

const Carousel = () => {
  const [people] = useState(longList)
  const [currentPerson, setCurrentPerson] = useState(0)

  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length
      return result
    })
  }
  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length
      return result
    })
  }

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide()
    }, 2000)
    return () => {
      clearInterval(sliderId)
    }
  }, [currentPerson])

  return (
    <section className="slider-container" id={currentPerson}>
      {people.map((person, personIndex) => {
        return (
          <Person
            key={person.id}
            {...person}
            personIndex={personIndex}
            currentPerson={currentPerson}
          />
        )
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  )
}
export default Carousel
