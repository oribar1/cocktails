import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchVal = React.useRef('')

  React.useEffect(() => {
    searchVal.current.focus()
  }, [])

  const searchCocktail = () => {
    setSearchTerm(searchVal.current.value)
  }

  const hadleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={hadleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your fav cocktail</label>
          <input
            type='text'
            id='name'
            ref={searchVal}
            onChange={searchCocktail}
          ></input>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
