// ✍️ import GetServerSideProps from 'next'
import type { GetStaticProps } from 'next'
import Link from 'next/link'
import { List, ListItem, Container, Heading } from '@chakra-ui/react'

type Props = {
  genres: string[]
}

const Home = ({ genres }: Props) => {
  return (
    <Container maxW="container.xl" pt={10}>
      <Heading mb={4}>Genres:</Heading>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre}>
            <Link href={`/${genre}`}>{genre}</Link>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

// ✍️ export the getServerSideProps method instead
export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const genres = [
    'rock',
    'country',
    'pop',
    'rap',
    'folk',
    'metal',
    'rnb',
    'funk'
  ]
  return {
    props: {
      genres
    }
  }
}

export default Home
