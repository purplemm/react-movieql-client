import styled from "styled-components";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const GET_MOVIE = gql`
    query ($movieId: String!) {
        movie(id: $movieId) {
            id
            title
            medium_cover_image
            rating
        }
    }
`

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(-45deg, #d754ab, #fd723a);
    color: white;
`

const Column = styled.div`
    width: 50%;
    margin-left: 10px;
`

const Title = styled.h1`
    margin-bottom: 15px;
    font-size: 65px;
`

const Subtitle = styled.h4`
    margin-bottom: 10px;
    font-size: 35px;
`

const Image = styled.div`
    width: 25%;
    height: 60%;
    border-radius: 7px;
    background-color: transparent;
    background-image: url(${(props) => props.bg});
    background-position: center center;
    background-size: cover;
`

function MovieDetail(){
    const { id } = useParams();
    const { data, loading } = new useQuery(GET_MOVIE, {
        variables: {
            movieId: id
        }
    });

    return (
        <Container>
            <Column>
                <Title>{loading ? "Loading..." : `${data.movie.title}`}</Title>
                <Subtitle>⭐️ {data && data.movie.rating}</Subtitle>
            </Column>
            <Image bg={data && data.movie.medium_cover_image} />
        </Container>
    )
}

export default MovieDetail;