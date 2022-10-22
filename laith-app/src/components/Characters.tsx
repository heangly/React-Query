import { useState } from 'react'
import { useQuery } from 'react-query'
import Character, { CharacterProps } from './Character'

interface APIDataResponse {
  info: {
    count: number
    next: string
    pages: number
    prev: string
  }
  results: CharacterProps[]
}

interface QueryProps {
  queryKey: (string | number)[]
}

const Characters = () => {
  const [page, setPage] = useState(1)

  const fetchCharacters = async (
    queryProps: QueryProps
  ): Promise<APIDataResponse> => {
    const pageNumber = queryProps.queryKey[1]
    const url = `https://rickandmortyapi.com/api/character?page=${pageNumber}`
    const response = await fetch(url)
    return response.json()
  }

  const { data, isLoading, isError, isPreviousData } = useQuery(
    ['characters', page],
    fetchCharacters,
    { keepPreviousData: true }
  )

  const onPrevious = () => {
    setPage(page - 1)
  }
  const onNext = () => {
    setPage(page + 1)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return (
    <div className='characters'>
      {data?.results.map((character) => (
        <Character key={character.id} {...character} />
      ))}
      <div>
        <button disabled={page === 1} onClick={onPrevious}>
          Previous
        </button>
        <button
          disabled={isPreviousData || !!!data?.info.next}
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Characters
