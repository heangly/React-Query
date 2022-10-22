export interface CharacterProps {
  id: string
  name: string
  image: string
  status: string
  species: string
  location: { name: string }
}

const Character: React.FC<CharacterProps> = ({
  name,
  image,
  status,
  species,
  location
}) => {
  return (
    <div className='card'>
      <img src={image} alt={name} />
      <div className='text-container'>
        <h3>{name}</h3>
        <p className='status'>
          {status} - {species}
        </p>
        <p className='title'>Last seen on</p>
        <p>{location.name}</p>
      </div>
    </div>
  )
}

export default Character
