import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const ALL_MOVIES = gql`
    {
        allMovies {
            id
            title
            medium_cover_image
        }
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 45vh;
    background-image: linear-gradient(-45deg, #d754ab, #fd723a);
    color: white;
`

const Title = styled.h1`
    margin-bottom: 20px;
    font-size: 60px;
    font-weight: 600;
`

const Loading = styled.div`
    margin-top: 10px;
    font-size: 18px;
    font-weight: 500;
    opacity: 0.5;
`

const MoviesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 25px;
    position: relative;
    top: -50px;
    width: 60%;
`

const PosterContainer = styled.div`
    width: 100%;
    height: 400px;
    border-radius: 7px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background-color: transparent;
`

const PosterBg = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 7px;
    background-image: url(${(props) => props.background});
    background-position: center center;
    background-size: cover;
`

function MovieList(){
    const { data, loading } = useQuery(ALL_MOVIES);

    return (
        <Container>
            <Header>
                <Title>Movie List</Title>
            </Header>

            {/* JS에서 boolean && expression은 true인 경우 expression이 출력되고, false인 경우 무시 */}
            {loading && <Loading>Loading...</Loading>}  

            <MoviesGrid>
                {data && data.allMovies.map((movie) => (
                    <PosterContainer key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>
                            <PosterBg background={movie.medium_cover_image} />
                        </Link>
                    </PosterContainer>
                ))}
            </MoviesGrid>
        </Container>
    );
}

export default MovieList;